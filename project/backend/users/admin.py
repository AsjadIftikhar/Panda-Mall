from django.contrib import admin

# Register your models here.

from .models import Customer
from .models import Store
from .models import Admin


admin.site.register(Customer)
admin.site.register(Store)
admin.site.register(Admin)
