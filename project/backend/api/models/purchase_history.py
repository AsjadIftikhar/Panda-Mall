from django.db import models

from api.models.base import BaseTimeStampedModel
from api.models.products import Product
from users.models import Customer


class ProductHistory(BaseTimeStampedModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_history')
    customer = models.ForeignKey(Customer, on_delete=models.DO_NOTHING, related_name='product_history')
    clicks = models.FloatField()
    quantity = models.FloatField()

    class Meta:
        unique_together = (('product', 'customer'),)

    def __str__(self):
        return (self.product + " Bought By " + self.customer)
