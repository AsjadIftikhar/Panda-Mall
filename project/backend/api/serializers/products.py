from dataclasses import field
from pyexpat import model
from rest_framework import serializers

from api.models.products import Product, ProductCharacteristics, Favourite


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class ProductCharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCharacteristics
        fields = "__all__"


class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourite
        fields = "__all__"
