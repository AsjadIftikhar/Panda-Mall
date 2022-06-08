from django.contrib import admin

# Register your models here.

from api.models.products import (
    Product,
    Favourite,
    ProductCharacteristics
)
from api.models.purchase_history import PurchaseHistory

admin.site.register(Product)
admin.site.register(PurchaseHistory)
admin.site.register(ProductCharacteristics)
admin.site.register(Favourite)
