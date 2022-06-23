from django.contrib import admin

# Register your models here.
from projects.models import Projects


@admin.register(Projects)
class Project(admin.ModelAdmin):
    list_display = ("name", "completed")
