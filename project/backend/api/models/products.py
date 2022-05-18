from django.db import models
from users.models import Store
from api.models.base import BaseTimeStampedModel


class Product(BaseTimeStampedModel):
    APPROVED = "Approved"
    SUSPENDED = "Suspended"
    FORMAL_SHIRTS = "Formal Shirts"
    CASUAL_SHIRTS = "Casual Shirts"
    DRESS_PANTS = "Dress Pants"

    CATEGORY_CHOICES = ((FORMAL_SHIRTS,"Formal Shirts"),(CASUAL_SHIRTS,"Casual Shirts"),(DRESS_PANTS,"Dress Pants"))
    STATUS_CHOICES = ((APPROVED, "Approved"), (SUSPENDED, "Suspended"))

    sku = models.CharField(max_length=100)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField(max_length=10)
    product_url = models.URLField()
    image_url = models.URLField()

    category = models.CharField(max_length=100, choices=CATEGORY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=SUSPENDED)

    discount = models.FloatField(max_length=2, null=True, blank=True)
    quantity = models.FloatField(max_length=7)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return "{title} By {store}".format(title = self.title, store = self.store)


class ProductCharacteristics(BaseTimeStampedModel):
    color = models.CharField(max_length=50)
    size = models.CharField(max_length=100)
    products = models.ManyToManyField(Product, related_name='characteristics')

    def __str__(self):
        return "{color} and {size}".format(color = self.color, size = self.size)
