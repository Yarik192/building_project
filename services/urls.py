from django.urls import path

from services.views import ServicesListView

urlpatterns = [
    path("services", ServicesListView.as_view(), name="services")
]
