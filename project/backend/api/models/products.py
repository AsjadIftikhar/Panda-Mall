from ast import Try
from pyexpat import model
import uuid
from xml.dom.minidom import CharacterData
from django.db import models

class Product(models.Model): 
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
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
    quantity = models.FloatField(max_length=7)
    
class ProductCharacteristics(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=100)
    products = models.ManyToManyField(Product)