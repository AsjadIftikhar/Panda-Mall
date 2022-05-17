from django.db import models
from ..models.products import Product
from ....backend.users.models import Customer

class ProductHistory(models.Model):
    product = models.ForeignKey(Product)
    customer = models.ForeignKey(Customer)
    clicks = models.FloatField()
    time_stamp = models.DateTimeField()
    quantity = models.FloatField()
    
    class Meta:
        unique_together = (('product', 'customer'),)
