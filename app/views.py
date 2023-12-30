from django.shortcuts import render
from django.http import HttpResponse
from geopy.geocoders import Bing
import geopy
import os
from dotenv import load_dotenv


load_dotenv()


"""
    Read more about the geopy library here: https://geopy.readthedocs.io/en/stable/
"""


def index(request):

    if request.method == 'POST':
        address = request.POST.get('address')
       
        geolocator = Bing(os.environ.get('BINGMAP_API_KEY'), user_agent="http")

        location = geolocator.geocode(address)

        context = {
            'location': location,
        }

        return render(request, 'index.html', context)

    else:
        return render(request, 'index.html')
