# Generated by Django 4.0.4 on 2022-05-22 01:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('api', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='store',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='users.store'),
        ),
    ]
