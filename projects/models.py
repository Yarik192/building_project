from django.db import models

# Create your models here.


class Projects(models.Model):
    name = models.CharField(max_length=256, verbose_name="Название проекта")
    description = models.TextField(verbose_name="Описание проекта")
    image = models.ImageField(verbose_name="Фото")
    completed = models.BooleanField(default=False, verbose_name="Проект завершен")

    def __str__(self):
        return f"{self.name}"
