from django.urls import path, re_path
from . import views

app_name = "projects"

urlpatterns = [
    path("", views.homepage, name="project_list"),
    path("map/", views.mappage, name="map")
]