from django.http import HttpRequest
from django.shortcuts import render, redirect

# Create your views here.
from django.views.generic import ListView, FormView

from services.forms import ServiceForm
from services.models import Services, ServiceRequest


class ServicesListView(ListView, FormView):
    model = Services
    template_name = "services/services_list.html"
    form_class = ServiceForm

    def post(self, request: HttpRequest, *args, **kwargs):
        service = request.POST["service_pk"]
        name = request.POST["name"]
        phone_number = request.POST["phone_number"]
        description = request.POST["description"]
        ServiceRequest.objects.create(service_id=service,
                                      name=name,
                                      phone_number=phone_number,
                                      description=description)
        return redirect("services")
