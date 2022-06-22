from rest_framework import serializers

from api.models.products import Product, ProductCharacteristics, Favourite
from users.serializers import StoreSerializer


class ProductSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)

    class Meta:
        model = Product
        fields = ["id", "sku", "title", "description", "price", "product_url", "image_url", "category", "status",
                  "discount", "quantity", "store"]

    def create(self, validated_data):
        validated_data['store'] = self.context['request'].user.store
        return super(ProductSerializer, self).create(validated_data)


class ProductCharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCharacteristics
        fields = "__all__"


class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourite
        fields = "__all__"
