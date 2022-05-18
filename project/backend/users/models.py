from django.db import models
from api.models.products import Product
from django.contrib.auth.models import AbstractUser


class BaseUser(AbstractUser):
    """Abstract User class"""
    address = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        abstract = True


class Customer(BaseUser):
    favourite_products = models.ManyToManyField(Product, related_name='favourite_customers')

    def __str__(self):
        return "{username}".format(username = self.username)


class Store(BaseUser):
    ntn = models.CharField(9)
    bank_account_number = models.CharField(16)
    description = models.TextField()

    def __str__(self):
        return "{username}".format(username=self.username)


class Admin(BaseUser):

    def __str__(self):
        return "{username}".format(username=self.username)

