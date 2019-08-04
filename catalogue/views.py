from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from catalogue.serializers import GenreSerializer, MovieSerializer, UserSerializer
from catalogue.models import Genre, Movie

class MovieViewSet(viewsets.ModelViewSet):
    """Views for accessing and editing movies."""
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class GenreViewSet(viewsets.ModelViewSet):
    """Viewset for genres and movies within genres."""
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

@api_view(['POST'])
@permission_classes((AllowAny, ))
def sign_up(request):
    """View for signing a new user."""
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)