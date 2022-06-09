"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from rest_framework_swagger.views import get_swagger_view
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from users.views import (
    CustomerModelViewSet,
    StoreModelViewSet,
)

from .views import TokenObtainUserView
schema_view = get_swagger_view(title='Panda Mall API')

router = DefaultRouter()
router.register("Customer", CustomerModelViewSet, basename="customer")
router.register("store", StoreModelViewSet, basename="store")

urlpatterns = (
        [
            path('admin/', admin.site.urls),
            path('api/token/', TokenObtainUserView.as_view(), name='token_obtain_pair'),
            path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
            path('api/', include("api.urls")),
            path('', schema_view),
        ]
        + router.urls
)
