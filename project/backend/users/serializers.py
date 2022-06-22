from rest_framework.serializers import ModelSerializer
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer

from users.models import (
    UserRoleEnum,
    User,
    Customer,
    Store,
)


class CustomerSerializer(ModelSerializer):
    """Serializer To Register a Customer Type User"""

    class Meta:
        model = Customer
        fields = ["id", "user_id", "address", "cell_number", "role", "city", "gender"]

        extra_kwargs = {
            "role": {"read_only": True},
            "user_id": {"read_only": True}

        }

    def create(self, validated_data):
        validated_data["user_id"] = self.context['request'].user.id
        validated_data["role"] = UserRoleEnum.CUSTOMER.value

        logged_in_user = User.objects.get(id=self.context['request'].user.id)
        logged_in_user.role = UserRoleEnum.CUSTOMER.value
        logged_in_user.save()

        return super(CustomerSerializer, self).create(validated_data)


class StoreSerializer(ModelSerializer):
    """Serializer To Register a Store Type User"""

    class Meta:
        model = Store
        fields = ["id", "brand_name", "company_website", "address", "user_id", "cell_number", "city", "ntn",
                  "bank_account_number", "description"]

    extra_kwargs = {
        "role": {"read_only": True},
        "user_id": {"read_only": True}

    }

    def create(self, validated_data):
        validated_data["user_id"] = self.context['request'].user.id
        validated_data["role"] = UserRoleEnum.STORE.value

        logged_in_user = User.objects.get(id=self.context['request'].user.id)
        logged_in_user.role = UserRoleEnum.STORE.value
        logged_in_user.save()

        return super(StoreSerializer, self).create(validated_data)


class UserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password']
