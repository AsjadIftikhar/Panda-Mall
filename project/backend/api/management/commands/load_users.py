import json
from datetime import datetime

from django.core.management.base import BaseCommand

from users.models import User, Customer


class Command(BaseCommand):
    help = 'Loads USERs JSON Data in Data Base'

    def add_arguments(self, parser):
        parser.add_argument('filename')

    def handle(self, *args, **options):
        file = open(options['filename'])
        data = json.load(file)

        for product in data:
            date_joined = datetime.strptime(product['date_joined'], "%Y/%m/%d")

            u = User.objects.create(
                first_name=product['first_name'],
                last_name=product['last_name'],
                username=product['username'],
                email=product['email'],
                date_joined=date_joined,
            )
            u.save()

            c = Customer.objects.create(
                address=product["address"],
                cell_number=product["cell_number"],
                city=product["city"],
                gender=product["gender"],
                user=u

            )
            c.save()

        file.close()
