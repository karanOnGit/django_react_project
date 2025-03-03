from django.db import models
from django.utils import timezone


class React(models.Model):
    name = models.CharField(max_length=25)
    detail = models.CharField(max_length=500)
    created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
