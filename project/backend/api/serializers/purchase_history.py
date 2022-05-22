from dataclasses import field
from pyexpat import model
from rest_framework import serializers

from api.models.purchase_history import PurchaseHistory

class PurchaseHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseHistory
        fields = "__all__"