from datetime import datetime, timedelta
import random

from django.core.management.base import BaseCommand

from api.models.products import Product


class Command(BaseCommand):
    help = 'Randomize Product Data'

    def handle(self, *args, **options):
        products = Product.objects.all()
        for product in products:

            status = random.randint(0, 4)
            rating = random.randint(0, 500) / 100

            print(status, rating)
            if status == 3:
                product.status = "Suspended"
            else:
                product.status = "Approved"
            product.rating = rating
            if status == 4:
                product.created_at = datetime.now() - timedelta(days=10)
            product.save()
