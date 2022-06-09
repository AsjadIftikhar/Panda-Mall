from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.models import (
    Customer,
    Store,
)

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        exclude = ["password"]


class CustomerSerializer(UserSerializer):
    class Meta:
        model = Customer
        exclude = ["password"]


class StoreSerializer(UserSerializer):
    class Meta:
        model = Store
        exclude = ["password"]


class CustomerRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id", "email", "username", "first_name", "last_name", "password", "address", "cell_number", "city",
                  "gender", "role"]
        extra_kwargs = {
            "password": {"write_only": True},
        }


class StoreRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ["id", "email", "username", "password", "address", "cell_number", "city", "ntn",
                  "bank_account_number", "description", "role"]
        extra_kwargs = {
            "password": {"write_only": True},
        }


class CustomerMeSerializer(UserSerializer):
    class Meta:
        model = Customer
        exclude = ["password"]
