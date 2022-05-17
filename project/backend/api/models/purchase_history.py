from django.db import models
from ..models.products import Product
from ....backend.users.models import Customer

class ProductHistory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete==models.DO_NOTHING)
    clicks = models.FloatField()
    time_stamp = models.DateTimeField()
    quantity = models.FloatField()
    
    class Meta:
        unique_together = (('product', 'customer'),)

    def __str__(self):
        return (self.product + " Bought By " + self.customer)