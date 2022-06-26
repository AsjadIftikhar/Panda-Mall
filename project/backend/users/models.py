from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """BASE User Model"""
    email = models.EmailField(unique=True)


class Customer(models.Model):
    """Customer Model with OneToOne Association with User"""

    MALE = "Male"
    FEMALE = "Female"
    OTHER = "Other"

    GENDER_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other")
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255, null=True, blank=True)
    cell_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    gender = models.CharField(max_length=12, choices=GENDER_CHOICES, null=True, blank=True)

    def __str__(self):
        return "{username}".format(username=self.user.username)

    class Meta:
        verbose_name = "Customer"


class Store(models.Model):
    """Store Model with OneToOne Association with User"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    brand_name = models.CharField(max_length=255, null=True, blank=True)
    company_website = models.URLField(null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    cell_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    ntn = models.CharField(max_length=9)
    bank_account_number = models.CharField(max_length=16)
    description = models.TextField()

    def __str__(self):
        return "{username}".format(username=self.user.username)

    class Meta:
        verbose_name = "Store"


class Admin(models.Model):
    """Admin Model with OneToOne Association with User"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255, null=True, blank=True)
    cell_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return "{username}".format(username=self.user.username)

    class Meta:
        verbose_name = "Admin"
