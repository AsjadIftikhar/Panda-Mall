from django.contrib import admin

# Register your models here.

from users.models import (
    User,
    Customer,
    Store,
    Admin
)

admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Store)
admin.site.register(Admin)
