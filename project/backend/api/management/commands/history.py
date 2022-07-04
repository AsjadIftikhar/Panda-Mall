from datetime import datetime, timedelta
import random

from django.core.management.base import BaseCommand

from api.models.products import Product
from api.models.purchase_history import PurchaseHistory
from users.models import Customer


class Command(BaseCommand):
    help = 'Generate Fake Product History Objects'

    def handle(self, *args, **options):
        products = Product.objects.all()
        customers = Customer.objects.all()

        for i in range(100):
            p = random.randint(0, len(products) - 1)
            c = random.randint(0, len(customers) - 1)
            cl = random.randint(1, 5)
            q = random.randint(1, 5)
            d = random.randint(0, 14)

            print(p, c)
            print(products[p], customers[c])
            ph = PurchaseHistory.objects.create(
                product=products[p],
                customer=customers[c],
                clicks=cl,
                quantity=q,
            )
            ph.save()

            ph.created_at = datetime.now() - timedelta(days=d)
            ph.save()
