from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users.views import (
    CustomerModelViewSet,
    StoreModelViewSet,
)

router = DefaultRouter()
router.register("Customer", CustomerModelViewSet, basename="customer")
router.register("store", StoreModelViewSet, basename="store")

urlpatterns = (
        [
            path('admin/', admin.site.urls),
            path('api/', include("api.urls")),
            path('auth/', include("djoser.urls")),
            path('auth/', include("djoser.urls.jwt")), 
        ]
        + router.urls
)
