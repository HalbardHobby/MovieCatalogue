from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    """Creates a token on user creation."""
    if created:
        Token.objects.create(user=instance)


class Genre(models.Model):
    """Category of expected content that a movie has."""
    name = models.CharField(max_length=50, primary_key=True)


class Movie(models.Model):
    """Defines a movie with its basic characteristics."""
    primary_title  = models.CharField(max_length=250)
    synopsis       = models.TextField(blank=True)
    year           = models.IntegerField(validators=[MinValueValidator(1800, 
                                                     'Movies didn\'t exist back then.'),
                                                     MaxValueValidator(2050,
                                                     'You\'re way in the future.')])
    runtime_minutes = models.IntegerField(validators=[MinValueValidator(0, 
                                                     'Movies last at least a minute.')])
    genres         = models.ManyToManyField(Genre, blank=True)
    cover_art      = models.ImageField(blank=True)