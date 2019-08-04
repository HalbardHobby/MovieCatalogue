from django.test import TestCase
from django.core.exceptions import ValidationError
from catalogue.models import Genre, Movie

class MovieTestCase(TestCase):
    def setUp(self):
        self.genre = Genre.objects.create(name='Comic')


    def test_runtime_validation(self):
        with self.assertRaises(ValidationError):
            m = Movie.objects.create(primary_title='Iron Man',
                                     original_title='Iron Man',
                                     year=2008,
                                     runtime_minutes=-15
                                     )
            m.full_clean()


    def test_year_validation(self):
        with self.assertRaises(ValidationError):
            m = Movie.objects.create(primary_title='Iron Man',
                                     original_title='Iron Man',
                                     year=1785,
                                     runtime_minutes=124
                                     )
            m.full_clean()

        with self.assertRaises(ValidationError):
            m = Movie.objects.create(primary_title='Iron Man',
                                     original_title='Iron Man',
                                     year=2950,
                                     runtime_minutes=124
                                     )
            m.full_clean()