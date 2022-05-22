# Generated by Django 4.0.4 on 2022-05-22 02:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_product_store'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productcharacteristics',
            name='products',
        ),
        migrations.AddField(
            model_name='productcharacteristics',
            name='products',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='characteristics', to='api.product'),
            preserve_default=False,
        ),
    ]
