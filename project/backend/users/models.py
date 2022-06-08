from django.db import models
from enum import Enum
from django.contrib.auth.models import AbstractUser


class UserRoleEnum(Enum):
    """Enum representing User Types"""

    ADMIN = "ADMIN"
    STORE = "STORE"
    CUSTOMER = "CUSTOMER"


class BaseUser(AbstractUser):
    """Abstract User class"""

    address = models.CharField(max_length=255, null=True, blank=True)
    cell_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    role = models.CharField(max_length=20, choices=[(item.name, item.value) for item in UserRoleEnum])


class Customer(BaseUser):
    MALE = "MALE"
    FEMALE = "FEMALE"
    OTHER = "OTHER"

    GENDER_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other")
    ]

    gender = models.CharField(max_length=12, choices=GENDER_CHOICES, null=True, blank=True)

    def __str__(self):
        return "{username}".format(username=self.username)

    class Meta:
        verbose_name = "Customer"


class Store(BaseUser):
    ntn = models.CharField(max_length=9)
    bank_account_number = models.CharField(max_length=16)
    description = models.TextField()

    def __str__(self):
        return "{username}".format(username=self.username)

    class Meta:
        verbose_name = "Store"


class Admin(BaseUser):

    def __str__(self):
        return "{username}".format(username=self.username)

    class Meta:
        verbose_name = "Admin"
