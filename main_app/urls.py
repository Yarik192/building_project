from django.urls import path, re_path
from . import views

app_name = "main"

urlpatterns = [
    path("", views.homepage, name="project_list"),
    path("map/", views.map_page, name="map")
]