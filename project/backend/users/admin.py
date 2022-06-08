from django.contrib import admin

# Register your models here.

from users.models import (
    BaseUser,
    Customer,
    Store,
    Admin
)

admin.site.register(BaseUser)
admin.site.register(Customer)
admin.site.register(Store)
admin.site.register(Admin)
