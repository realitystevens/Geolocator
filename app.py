import os
import binascii
import requests
from forms import GeolocatorForm
from flask_wtf import CSRFProtect
from flask import Flask, render_template
from dotenv import load_dotenv

load_dotenv()



app = Flask(__name__)
app.secret_key = binascii.hexlify(os.urandom(24)).decode()
csrf = CSRFProtect(app)


@app.route('/' , methods=['GET', 'POST'])
def index():
    form = GeolocatorForm()
    if form.validate_on_submit():
        params = {
            "q": form.address.data,
            "format": "json",
            "addressdetails": 1
        }

        headers = {
            "User-Agent": "Geolocator/1.0 (reality.stvns@gmail.com)"
        }

        url = "https://nominatim.openstreetmap.org/search"

        response = requests.get(url, params=params, headers=headers)

        try:
            if response.status_code == 200:
                data = response.json()
                return render_template('index.html', form=form, data=data)
            else:
                response.raise_for_status()
        except requests.exceptions.RequestException as e:
            error = f"Error fetching data from the API: {e}"
            return render_template('index.html', form=form, error=error)
        
    return render_template('index.html', form=form)



if __name__ == '__main__':
    if os.getenv('ENV') == 'DEV':
        app.run(debug=True)
    else:
        app.run(debug=False)