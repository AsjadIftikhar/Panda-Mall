from django.db import models
# from backend.settings import AUTH_USER_MODEL
from enum import Enum
from django.contrib.auth.models import AbstractUser


class UserRoleEnum(Enum):
    """Enum representing User Types"""

    STORE = "STORE"
    CUSTOMER = "CUSTOMER"


class User(AbstractUser):
    """BASE User Model"""
    email = models.EmailField(unique=True)


class Customer(models.Model):
    """Customer Model with OneToOne Association with User"""

    MALE = "MALE"
    FEMALE = "FEMALE"
    OTHER = "OTHER"

    GENDER_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other")
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255, null=True, blank=True)
    cell_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    role = models.CharField(max_length=20, choices=[(item.name, item.value) for item in UserRoleEnum])
    gender = models.CharField(max_length=12, choices=GENDER_CHOICES, null=True, blank=True)

    def __str__(self):
        return "{username}".format(username=self.user.username)

    class Meta:
        verbose_name = "Customer"


class Store(models.Model):
    """Store Model with OneToOne Association with User"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255, null=True, blank=True)
    cell_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    role = models.CharField(max_length=20, choices=[(item.name, item.value) for item in UserRoleEnum])
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
    role = models.CharField(max_length=20, choices=[(item.name, item.value) for item in UserRoleEnum])

    def __str__(self):
        return "{username}".format(username=self.user.username)

    class Meta:
        verbose_name = "Admin"
