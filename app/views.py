from django.shortcuts import render
from django.http import HttpResponse
from geopy.geocoders import Nominatim
import geopy


geopy.geocoders.options.default_user_agent = "http"


def index(request):

    if request.method == 'POST':
        address = request.POST.get('address')

        geolocator = Nominatim(user_agent="http")
        location = geolocator.geocode(address)

        context = {
            'location': location,
        }

        return render(request, 'index.html', context)

    else:
        return render(request, 'index.html')
 
    
