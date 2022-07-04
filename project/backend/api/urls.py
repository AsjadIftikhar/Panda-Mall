from rest_framework.routers import DefaultRouter
from django.urls import path

from api.views.products import (
    ProductViewSet,
    ProductCharacteristicsViewSet,
    FavouriteViewSet
)
from api.views.dashboard import DashboardViewSet

from api.views.product_history import PurchaseHistoryViewSet

router = DefaultRouter()
router.register("product", ProductViewSet, basename="product")
router.register("productCharacteristic", ProductCharacteristicsViewSet, basename="product-characteristic")
router.register("favourite", FavouriteViewSet, basename="favourite")
router.register("purchasehistory", PurchaseHistoryViewSet, basename="purchase-history")
router.register("dashboard", DashboardViewSet, basename="dashboard-stats")

urlpatterns = [] + router.urls
