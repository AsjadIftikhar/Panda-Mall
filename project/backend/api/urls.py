from rest_framework.routers import SimpleRouter

from api.views.products import (
    ProductViewSet,
    ProductCharacteristicsViewSet,
    FavouriteViewSet,
)

from api.views.product_history import PurchaseHistoryViewSet

router = SimpleRouter()
router.register("product", ProductViewSet, basename="product")
router.register("productCharacteristic", ProductCharacteristicsViewSet, basename="product-characteristic")
router.register("favourite", FavouriteViewSet, basename="favourite")
router.register("purchasehistory", PurchaseHistoryViewSet, basename="purchase-history")

urlpatterns = [] + router.urls
