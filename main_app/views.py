from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

# Create your views here.
from main_app.models import Feedback


def homepage(request: HttpRequest) -> HttpResponse:
    if request.method == "POST":
        name = request.POST["name"]
        phone_number = request.POST["phone_number"]
        email = request.POST["email"]
        Feedback.objects.create(name=name,
                                phone_number=phone_number,
                                email=email)
    return render(request, "main_app/landing.html")


def mappage(request: HttpRequest) -> HttpResponse:
    return render(request, "main_app/map.html")
