from django.contrib import admin

# Register your models here.

from users.models import Customer
from users.models import Store
from users.models import Admin

admin.site.register(Customer)
admin.site.register(Store)
admin.site.register(Admin)
