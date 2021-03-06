from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from datetime import datetime, timedelta
from pandas_similarity.index_calculator import IndexCalculator
import pandas as pd

from api.models.products import Product
from api.models.purchase_history import PurchaseHistory

from api.serializers.dashboard import DashboadSerializer, SimilaritySerializer

from users.models import User, Customer


def get_times():
    current_time = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    one_week = current_time - timedelta(weeks=1)
    two_week = current_time - timedelta(weeks=2)

    return current_time, one_week, two_week


class DashboardViewSet(viewsets.ViewSet):
    """View Set for Dashboard Stats"""

    @action(detail=False, methods=['GET'], permission_classes=[IsAuthenticated])
    def get_similarity_list(self, request):
        matrix = []
        user_matrix = []

        all_brands = pd.DataFrame(list(Product.objects.filter(store=self.request.user.store)[:100].values()))

        user_history = PurchaseHistory.objects.all()
        user_products = []
        for history in user_history:
            user_products.append(Product.objects.filter(id=history.product.id).values())

        user_products = pd.DataFrame(user_products)
        # Data Cleaning

        # all_brands["discount"].fillna(0, inplace=True)
        # all_brands["rating"].fillna(0, inplace=True)
        # all_brands.fillna('Not Defined', inplace=True)
        # all_brands["collars_type"].replace(0, "Not Defined", regex=True, inplace=True)
        # all_brands = all_brands.reset_index(drop=True)

        # user_products["discount"].fillna(0, inplace=True)
        # user_products["rating"].fillna(0, inplace=True)
        # user_products.fillna('Not Defined', inplace=True)
        # user_products["collars_type"].replace(0, "Not Defined", regex=True, inplace=True)
        # user_products = all_brands.reset_index(drop=True)

        for i in range(0, len(all_brands)):
            a = []
            for j in range(0, len(all_brands)):
                df = pd.DataFrame(all_brands.loc[[i, j]])
                a.append(IndexCalculator(df).get_index())
            matrix.append(a)

        for i in range(0, len(user_products)):
            a = []
            for j in range(0, len(user_products)):
                df = pd.DataFrame(user_products.loc[[i, j]])
                a.append(IndexCalculator(df).get_index())
            user_matrix.append(a)

        print(matrix)
        print(user_matrix)

        data = {}

        objs = []
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                obj = {
                    "x": i,
                    "y": matrix[i][j],
                }
                objs.append(obj)
                j += 1
            i += 1

        user_objs = []
        for i in range(len(user_matrix)):
            for j in range(len(user_matrix[i])):
                obj = {
                    "x": i,
                    "y": user_matrix[i][j],
                }
                user_objs.append(obj)
                j += 1
            i += 1


        data['data'] = objs
        data['user'] = user_objs

        serializer = SimilaritySerializer(data)
        return Response(serializer.data)

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
        weekly_stats['percentage_change_in_products'] = float("{:.2f}".format(
            ((current_week_products - previous_week_products) / current_week_products) * 100
            if current_week_products > 0 and previous_week_products > 0 else 0
        ))

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
        weekly_stats['percentage_change_in_visitors'] = float("{:.2f}".format(
            ((current_week_visitors - previous_week_visitors) / current_week_visitors) * 100
            if current_week_visitors > 0 and previous_week_visitors > 0 else 0
        ))

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
        weekly_stats['percentage_change_in_signups'] = float("{:.2f}".format(
            ((current_week_signups - previous_week_signups) / current_week_signups) * 100
            if current_week_signups > 0 and previous_week_signups > 0 else 100
        ))

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
