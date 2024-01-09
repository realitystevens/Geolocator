import os
import json
import requests
from dotenv import load_dotenv
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseBadRequest


load_dotenv()


def index(request):
    if request.method == 'POST':
        query = request.POST.get('query')
        BINGMAPS_APIKEY = settings.BINGMAPS_APIKEY

        url = f'https://dev.virtualearth.net/REST/v1/Locations?query={query}&key={BINGMAPS_APIKEY}&maxResults=1'

        response = requests.get(url)

        try:
            data = response.json()
        except Exception as e:
            data = {'error': str(e)}

        context = {
            'data': data,
        }

        return render(request, 'index.html', context)

    else:
        return render(request, 'index.html')
