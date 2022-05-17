import uuid
from django.db import models
from ..api.models.products import Product
from django.contrib.auth.models import User

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='details')
    address = models.CharField(max_length=250)
    favourite_products = models.ManyToManyField(Product, related_name='favourite_customers')

    def __str__(self):
        return str(self.user)

class Store(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='details')
    ntn = models.CharField(9)
    bank_account_number = models.CharField(16)
    address = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self):
        return str(self.user)

class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='details')
    address = models.CharField(max_length=250)

    def __str__(self):
        return str(self.user)