from django.contrib import admin

# Register your models here.

from api.models.products import Product
from api.models.purchase_history import ProductHistory
from api.models.products import ProductCharacteristics


admin.site.register(Product)
admin.site.register(ProductHistory)
admin.site.register(ProductCharacteristics)
