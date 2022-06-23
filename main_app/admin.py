from django.contrib import admin

# Register your models here.
from main_app.models import Feedback


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    pass
