from django.core.management.base import BaseCommand, CommandError
import json

from api.models.products import Product, ProductCharacteristics
from users.models import Store


class Command(BaseCommand):
    help = 'Loads JSON data in Data Base'

    def add_arguments(self, parser):
        parser.add_argument('filename')
        parser.add_argument('store_id', type=int)

    def handle(self, *args, **options):
        store_id = options['store_id']
        store = Store.objects.get(id=store_id)

        file = open(options['filename'])
        data = json.load(file)

        for product in data:
            p = Product.objects.create(
                sku=product['SKU'],
                title=product['Product_Title'],
                fabric=product['Fabric'],
                fit=product['Fit'],
                collars_type=product['Collars_Type'],
                sleeves=product['Sleeves'],
                cuff_style=product['Cuff_Style'],
                product_url=product['Product_Url'],
                image_url=product['Image_Url'],
                category=product['Type'],
                price=product['Selling_Price'],
                discount=product['Discount'],
                rating=product['Original_Rating'],
                store=store

            )
            p.save()

            color_size = product['Color_Size'].split(';')
            for combination in color_size:
                color = combination.split(',')[0]
                size = combination.split(',')[1]
                pc = ProductCharacteristics.objects.create(
                    color=color,
                    size=size,
                    product=p

                )
                pc.save()

        file.close()
