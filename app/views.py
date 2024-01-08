import os
import requests
from dotenv import load_dotenv
from json import JSONDecodeError
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render

load_dotenv()


def index(request):

    if request.method == 'POST':
        query = request.POST.get('query')
        BING_MAPS_KEY = os.environ.get('BING_MAPS_KEY')

        url = f'https://dev.virtualearth.net/REST/v1/Locations?query={query}&key={BING_MAPS_KEY}&maxResults=1'

        response = requests.get(url)

        try:
            data = response.json()
        except JSONDecodeError:
            data = {'error': 'The API response is not in JSON format'}

        context = {
            'data': data,
        }

        return render(request, 'index.html', context)

    else:
        return render(request, 'index.html')
