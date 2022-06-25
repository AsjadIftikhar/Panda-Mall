from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from datetime import datetime, timedelta

from api.models.products import Product
from api.models.purchase_history import PurchaseHistory

from api.serializers.dashboard import DashboadSerializer

from users.models import User, Customer


def get_times():
    current_time = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    one_week = current_time - timedelta(weeks=1)
    two_week = current_time - timedelta(weeks=2)

    return current_time, one_week, two_week


class DashboardViewSet(viewsets.ViewSet):
    """View Set for Dashboard Stat"""

    @action(detail=False, methods=['GET'], permission_classes=[IsAuthenticated])
    def weekly_stats(self, request):
        current_time, _7days, _14days = get_times()
        weekly_stats = {}

        # Products
        current_week_products = Product.objects.filter(
            store=self.request.user.store,
            created_at__lt=current_time,
            created_at__gt=_7days
        ).count()
        previous_week_products = Product.objects.filter(
            store=self.request.user.store,
            created_at__lt=_7days,
            created_at__gt=_14days
        ).count()

        weekly_stats['products_this_week'] = current_week_products
        weekly_stats['percentage_change_in_products'] = (
            (current_week_products - previous_week_products / current_week_products) * 100
            if current_week_products > 0 and previous_week_products > 0 else 0
        )

        # Visitors
        current_week_visitors = PurchaseHistory.objects.filter(
            product__store=self.request.user.store,
            created_at__lt=current_time,
            created_at__gt=_7days
        ).count()
        previous_week_visitors = PurchaseHistory.objects.filter(
            product__store=self.request.user.store,
            created_at__lt=_7days,
            created_at__gt=_14days
        ).count()

        weekly_stats['visitors_this_week'] = current_week_visitors
        weekly_stats['percentage_change_in_visitors'] = (
            (current_week_visitors - previous_week_visitors / current_week_visitors) * 100
            if current_week_visitors > 0 and previous_week_visitors > 0 else 0
        )

        # Signups
        current_week_signups = User.objects.filter(
            date_joined__lt=current_time,
            date_joined__gt=_7days
        ).count()
        previous_week_signups = User.objects.filter(
            date_joined__lt=_7days,
            date_joined__gt=_14days
        ).count()

        weekly_stats['signups_this_week'] = current_week_signups
        weekly_stats['percentage_change_in_signups'] = (
            (current_week_signups - previous_week_signups / current_week_signups) * 100
            if current_week_signups > 0 and previous_week_signups > 0 else 100
        )

        # Latest Users
        latest_customers = []
        latest_users = Customer.objects.all().order_by("-user__date_joined")[:5]

        for user in latest_users:
            customer = {
                'username': user.user.username,
                'email': user.user.email,
                'city': user.city
            }

            latest_customers.append(customer)
        weekly_stats["latest_customers"] = latest_customers

        serializer = DashboadSerializer(weekly_stats)
        return Response(serializer.data)
