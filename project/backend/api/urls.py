from rest_framework.routers import DefaultRouter

from api.views.products import (
    ProductViewSet,
    ProductCharacteristicsViewSet,
    FavouriteViewSet,
)

from api.views.product_history import PurchaseHistoryViewSet

router = DefaultRouter()
router.register("product", ProductViewSet, basename="product")
router.register("productCharacteristic", ProductCharacteristicsViewSet, basename="product-characteristic")
router.register("favourite", FavouriteViewSet, basename="favourite")
router.register("purchasehistory", PurchaseHistoryViewSet, basename="purchase-history")

urlpatterns = [] + router.urls
