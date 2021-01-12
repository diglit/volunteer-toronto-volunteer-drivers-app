from django.db import models


class ExampleDriver(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.TextField()

    class Meta:
        ordering = ["created"]
