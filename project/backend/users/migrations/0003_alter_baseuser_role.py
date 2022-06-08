# Generated by Django 4.0.4 on 2022-06-08 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_baseuser_cell_number_baseuser_city_baseuser_role_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='baseuser',
            name='role',
            field=models.CharField(choices=[('ADMIN', 'ADMIN'), ('STORE', 'STORE'), ('CUSTOMER', 'CUSTOMER')], max_length=20),
        ),
    ]
