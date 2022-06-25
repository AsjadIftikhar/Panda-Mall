from rest_framework import serializers

from api.models.products import Product, ProductCharacteristics, Favourite
from users.serializers import StoreSerializer


class ProductSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)
    combos = serializers.SerializerMethodField(method_name="get_combos")

    def get_combos(self, product: Product):
        combos_queryset = ProductCharacteristics.objects.filter(product=product)
        return ProductCharacteristicsSerializer(combos_queryset, many=True).data

    class Meta:
        model = Product
        fields = ["id", "sku", "title", "fabric", "fit", "collars_type", "sleeves", "cuff_style", "product_url",
                  "image_url", "category", "status", "price", "discount", "quantity", "rating", "store", "combos"]
        extra_kwargs = {
            "status": {"read_only": True},
            "rating": {"read_only": True}
        }

    def create(self, validated_data):
        validated_data['store'] = self.context['request'].user.store
        return super(ProductSerializer, self).create(validated_data)


class ProductCharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCharacteristics
        fields = ["id", "color", "size", "product"]


class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourite
        fields = "__all__"
