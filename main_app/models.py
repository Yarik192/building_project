from django.db import models


class Feedback(models.Model):
    name = models.CharField(max_length=256)
    phone_number = models.CharField(max_length=12)
    email = models.EmailField()
