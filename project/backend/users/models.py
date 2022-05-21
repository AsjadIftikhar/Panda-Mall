from django.db import models
from django.contrib.auth.models import AbstractUser


class BaseUser(AbstractUser):
    """Abstract User class"""
    address = models.CharField(max_length=255, null=True, blank=True)


class Customer(BaseUser):

    def __str__(self):
        return "{username}".format(username=self.username)

    class Meta:
        verbose_name = "Customer"


class Store(BaseUser):
    ntn = models.CharField(max_length=9)
    bank_account_number = models.CharField(max_length=16)
    description = models.TextField()

    def __str__(self):
        return "{username}".format(username=self.username)


class Admin(BaseUser):

    def __str__(self):
        return "{username}".format(username=self.username)

    class Meta:
        verbose_name = "Admin"
