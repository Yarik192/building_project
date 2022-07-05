from django.urls import path

from services.views import ServicesListView

app_name = "services"

urlpatterns = [
    path("services", ServicesListView.as_view(), name="services")
]
