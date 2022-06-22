# Generated by Django 4.0.5 on 2022-06-18 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_admin_role_alter_customer_role_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='brand_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='store',
            name='company_website',
            field=models.URLField(blank=True, null=True),
        ),
    ]