from django.db import models


class Services(models.Model):
    name = models.CharField(max_length=256, verbose_name="Имя услуги")
    description = models.TextField(verbose_name="Описание услуги")
    image = models.ImageField(verbose_name="Фото")

    def __str__(self):
        return f"{self.name}"


class ServiceRequest(models.Model):
    service = models.ForeignKey(Services, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    phone_number = models.CharField(max_length=12)
    description = models.TextField()

    def __str__(self):
        return f"{self.service} - {self.name}"
