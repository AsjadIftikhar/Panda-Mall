# Generated by Django 4.0.4 on 2022-06-23 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_product_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='purchasehistory',
            name='clicks',
        ),
        migrations.RemoveField(
            model_name='purchasehistory',
            name='quantity',
        ),
        migrations.AddField(
            model_name='purchasehistory',
            name='rating',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
