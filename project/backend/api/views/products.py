from jinja2 import Undefined
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from api.models.products import Product, ProductCharacteristics, Favourite
from api.serializers.products import ProductCharacteristicsSerializer, ProductSerializer, FavouriteSerializer
from users.models import UserRoleEnum


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Product.objects.select_related('store').all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        if self.request.user.role == UserRoleEnum.STORE.value:
            return Product.objects.select_related("store").filter(store=self.request.user.store)
        else:
            return Product.objects.select_related('store').all()


class ProductCharacteristicsViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductCharacteristicsSerializer

    def get_queryset(self):
        # return ProductCharacteristics.objects.filter(products=self.request.GET["product_id"])
        return ProductCharacteristics.objects.all()


class FavouriteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = FavouriteSerializer

    def get_queryset(self):
        return Favourite.objects.all()
        
        # return Favourite.objects.filter(customer=self.request.GET["customer_id"])
        # return Favourite.objects.all()
