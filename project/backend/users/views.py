from django.contrib.auth import get_user_model
from rest_framework import viewsets, exceptions
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from users.models import (
    UserRoleEnum,
    Customer,
    Store,
)
from users.serializers import (
    UserSerializer,
    CustomerSerializer,
    CustomerRegisterSerializer,
    StoreSerializer,
    StoreRegisterSerializer,
    CustomerMeSerializer
)

UserModel = get_user_model()


class UserModelViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class CustomerModelViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Customer.objects.all()

    method_serializer_classes = {
        ('GET',): CustomerSerializer,
        ('POST', 'PUT', 'PATCH'): CustomerRegisterSerializer,
    }

    def get_serializer_class(self):
        assert self.method_serializer_classes is not None, (
                'Expected view %s should contain method_serializer_classes '
                'to get right serializer class.' %
                (self.__class__.__name__,)
        )
        for methods, serializer_cls in self.method_serializer_classes.items():
            if self.request.method in methods:
                return serializer_cls

        raise exceptions.MethodNotAllowed(self.request.method)

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()


class StoreModelViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Store.objects.all()

    method_serializer_classes = {
        ('GET',): StoreSerializer,
        ('POST', 'PUT', 'PATCH'): StoreRegisterSerializer,
    }

    def get_serializer_class(self):
        assert self.method_serializer_classes is not None, (
                'Expected view %s should contain method_serializer_classes '
                'to get right serializer class.' %
                (self.__class__.__name__,)
        )
        for methods, serializer_cls in self.method_serializer_classes.items():
            if self.request.method in methods:
                return serializer_cls

        raise exceptions.MethodNotAllowed(self.request.method)

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()
