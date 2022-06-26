from django.contrib import admin

# Register your models here.

from api.models.products import (
    Product,
    Favourite,
    ProductCharacteristics
)
from api.models.purchase_history import PurchaseHistory


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["sku", "title", "status", "store", "price", "rating"]
    list_editable = ["status"]
    list_select_related = ["store"]
    list_per_page = 12
    search_fields = ["sku", "title", "price"]


admin.site.register(PurchaseHistory)
admin.site.register(ProductCharacteristics)
admin.site.register(Favourite)
