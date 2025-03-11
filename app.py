import os
import binascii
import requests
from forms import GeolocatorForm
from flask_wtf import CSRFProtect
from flask import Flask, render_template
from dotenv import load_dotenv
from flask import request, jsonify
import json

load_dotenv()



app = Flask(__name__)
app.secret_key = binascii.hexlify(os.urandom(24)).decode()
csrf = CSRFProtect(app)


@app.route('/' , methods=['GET', 'POST'])
def index():
    form = GeolocatorForm()
    if form.validate_on_submit():
        headers = {
            "User-Agent": "Geolocator/1.0 (reality.stvns@gmail.com)"
        }

        if form.data['address'].startswith('{lat:'):
            address_data = json.loads(form.data['address'])
            params = {
                "lat": address_data['lat'],
                "lon": address_data['lon'],
                "format": "json",
                "addressdetails": 1
            }
            url = "https://nominatim.openstreetmap.org/reverse"
        else:
            params = {
                "q": form.data['address'],
                "format": "json",
                "addressdetails": 1
            }
            url = "https://nominatim.openstreetmap.org/search"

        try:
            response = requests.get(url, params=params, headers=headers)
            response.raise_for_status()
            data = response.json()
            return render_template('index.html', form=form, data=data)
        except requests.exceptions.RequestException as e:
            error = f"Error fetching data from the API: {e}"
            return render_template('index.html', form=form, error=error)
        
    return render_template('index.html', form=form)



if __name__ == '__main__':
    if os.getenv('ENV') == 'DEV':
        app.run(debug=True)
    else:
        app.run(debug=False)