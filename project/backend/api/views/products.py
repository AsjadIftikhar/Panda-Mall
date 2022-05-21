from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from api.models.products import Product
from api.serializers.products import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
