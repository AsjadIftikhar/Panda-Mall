from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from api.models.purchase_history import PurchaseHistory
from api.serializers.purchase_history import PurchaseHistorySerializer
from django.core.exceptions import ObjectDoesNotExist


class PurchaseHistoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PurchaseHistorySerializer

    def get_queryset(self):
        return PurchaseHistory.objects.all()
