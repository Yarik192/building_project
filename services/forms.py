from django.forms import ModelForm

from services.models import ServiceRequest


class ServiceForm(ModelForm):
    class Meta:
        model = ServiceRequest
        exclude = ("service",)
