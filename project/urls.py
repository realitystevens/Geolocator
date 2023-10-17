from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('backend/', admin.site.urls),
     path('', include('app.urls')),
]
