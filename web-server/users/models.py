from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    class Types(models.TextChoices):
        DRIVER = "DRIVER", "Driver"
        ORGMEMBER = "ORGMEMBER", "Org Member"
        ORGADMIN = "ORGADMIN", "Org Admin"
        VTOMEMBER = "VTOMEMBER", "Volunteer Toronto Member"
        VTOADMIN = "VTOADMIN", "Volunteer Toronto Admin"

    # Default to a Driver user
    base_type = Types.DRIVER
    user_type = models.CharField(
        _("Type"), max_length=20, choices=Types.choices, default=base_type
    )

    name = models.CharField(_("Name of User"), blank=True, max_length=255)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})

    # We shouldn't really be interacting with User directly, but if you try to
    # create a User it should still default to a driver
    def save(self, *args, **kwargs):
        if not self.id:
            self.type = self.base_type
        return super().save(*args, **kwargs)


def create_type_manager(user_type):
    class Manager(models.Manager):
        def get_queryset(self, *args, **kwargs):
            print(user_type)
            return super().get_queryset(*args, **kwargs).filter(user_type=user_type)

    return Manager()


class Driver(User):
    objects = create_type_manager(User.Types.DRIVER)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.user_type = User.Types.DRIVER
        return super().save(*args, **kwargs)

    class Meta:
        proxy = True


class OrgMember(User):
    objects = create_type_manager(User.Types.ORGMEMBER)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.user_type = User.Types.ORGMEMBER
        return super().save(*args, **kwargs)

    class Meta:
        proxy = True


class OrgAdmin(User):
    objects = create_type_manager(User.Types.ORGADMIN)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.user_type = User.Types.ORGADMIN
        return super().save(*args, **kwargs)

    class Meta:
        proxy = True


class VTOMember(User):
    objects = create_type_manager(User.Types.VTOMEMBER)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.user_type = User.Types.VTOMEMBER
        return super().save(*args, **kwargs)

    class Meta:
        proxy = True


class VTOAdmin(User):
    objects = create_type_manager(User.Types.VTOADMIN)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.user_type = User.Types.VTOADMIN
        return super().save(*args, **kwargs)

    class Meta:
        proxy = True
