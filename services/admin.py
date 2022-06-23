from django.contrib import admin

# Register your models here.
from services.models import Services, ServiceRequest


@admin.register(Services)
class ServicesAdmin(admin.ModelAdmin):
    pass


@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    pass
