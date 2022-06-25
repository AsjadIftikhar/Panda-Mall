from rest_framework import serializers

from api.models.products import Product, ProductCharacteristics, Favourite
from users.serializers import StoreSerializer


class LatestUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    email = serializers.CharField(max_length=255)
    city = serializers.CharField(max_length=25)


class DashboadSerializer(serializers.Serializer):
    products_this_week = serializers.IntegerField(default=0)
    percentage_change_in_products = serializers.FloatField(default=0.0)

    visitors_this_week = serializers.IntegerField(default=0)
    percentage_change_in_visitors = serializers.FloatField(default=0.0)

    signups_this_week = serializers.IntegerField(default=0)
    percentage_change_in_signups = serializers.FloatField(default=0.0)

    latest_customers = LatestUserSerializer(many=True)
