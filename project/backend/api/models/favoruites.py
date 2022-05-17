from django.db import models
from ..models.products import Product
from ....backend.users.models import Customer

class Favourite(models.Model):
    product = models.ForeignKey(Product)
    customer = models.ForeignKey(Customer)
    time_stamp = models.DateTimeField()
    
    class Meta:
        unique_together = (('product', 'customer'),)