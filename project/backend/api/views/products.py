from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from api.models.products import Product, ProductCharacteristics, Favourite
from api.serializers.products import ProductCharacteristicsSerializer, ProductSerializer, FavouriteSerializer


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializer

    def get_queryset(self):
        try:
            return Product.objects.select_related("store").filter(store=self.request.user.store)
        except:
            return Product.objects.select_related('store').all()


class ProductCharacteristicsViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductCharacteristicsSerializer

    def get_queryset(self):
        return ProductCharacteristics.objects.all()


class FavouriteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = FavouriteSerializer

    def get_queryset(self):
        return Favourite.objects.all()
