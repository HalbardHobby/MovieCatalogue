from django.contrib.auth.models import User, Group
from rest_framework import serializers
from catalogue.models import Genre, Movie


class UserSerializer(serializers.HyperlinkedModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class MovieSerializer(serializers.ModelSerializer):
    """Serializes a movie, having into account genre hyperlink."""
    class Meta:
        model = Movie
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):
    """Serializes a genre with its movies."""
    class Meta:
        model = Genre
        fields = ('name', 'movie_set')
        depth = 1