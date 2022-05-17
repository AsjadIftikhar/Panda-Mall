from turtle import title
import uuid
from django.db import models
from ...users.models import Store

class Product(models.Model): 
    sku = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField(max_length=10)
    product_url = models.URLField()
    image_url = models.URLField()
    category = models.CharField(100)
    approved = models.BooleanField()
    suspended = models.BooleanField()
    time_stamp = models.DateTimeField()
    discount = models.FloatField() # Discount Percentage in Float
    quantity = models.FloatField(max_length=7)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return (self.title + " By " + self.store)

class ProductCharacteristics(models.Model):
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=100)
    products = models.ManyToManyField(Product, related_name='characteristics')

    def __str__(self):
        return (self.color + " : " + self.size)