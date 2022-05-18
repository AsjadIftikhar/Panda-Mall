from django.contrib import admin

# Register your models here.

from .models import Product
from .models import ProductHistory
from .models import ProductCharacteristics


admin.site.register(Product)
admin.site.register(ProductHistory)
admin.site.register(ProductCharacteristics)
