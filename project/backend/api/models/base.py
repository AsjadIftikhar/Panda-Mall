from django.db import models


class BaseTimeStampedModel(models.Model):
    """Abstract Class for time stamping"""

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
