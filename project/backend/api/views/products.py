from math import prod
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from pprint import pp, pprint
from api.models.products import Product, ProductCharacteristics, Favourite
from api.serializers.products import ProductCharacteristicsSerializer, ProductSerializer, FavouriteSerializer
from django.core.exceptions import ObjectDoesNotExist

class ProductViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductCharacteristicsViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    serializer_class = ProductCharacteristicsSerializer
    
    def get_queryset(self):
        return ProductCharacteristics.objects.filter(products=self.kwargs["product_id"])

class FavoruiteViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    serializer_class = FavouriteSerializer
    
    def get_queryset(self):
        return Favourite.objects.filter(customer=self.kwargs["customer_id"])
    