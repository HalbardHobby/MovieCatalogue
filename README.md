# Movie Catalogue
> A Django implementation of a ToDo app with a cinematic twist.

## [Visit the App Live NOW](https://movie-catalogue-248623.appspot.com/)

## Project Structure

The project is divided into three different components:

- `frontend`: This contains a Single page application built with React, which binds the REST API into a nice interface.
- `moviecatalogue`: This contains the main configuration for the web app.
- `catalogue`: Here is where the API itself lives, contains the views, models and tests.

## API

The REST API contains multiple endopoints for public use and administration. The app is deployed with the `DEBUG` flag set to true to access the different endpoints. The endpoints are listed below:

- [`/api/`](https://movie-catalogue-248623.appspot.com/api/): This is the API root.
- [`/api/movies/`](https://movie-catalogue-248623.appspot.com/api/movies/): Here the user can list all the movies. It is also possible to append `/<id>/` to lookup for a specific title. (Authenticated users can edit, add or delete movies)
- [`/api/genres/`](https://movie-catalogue-248623.appspot.com/api/genres/): Here the user can list movies by genre. The user can also append `/<Genre>/` to lookup for a specific genre and its movies.
- [`/api/signup/`](https://movie-catalogue-248623.appspot.com/api/signup/): It is possible to signup a new user using the `POST` method with a message with the format `{username, email, password}`
- [`/api/login/`](https://movie-catalogue-248623.appspot.com/api/login/): Similarly it is also possible to obtain an authorization token with the `POST` method and a message with the format `{username, password}`. This token is used for all authenticated actions. The Token must be included in the `Authorization` header.

```html
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```

## Deployment

To deploy this application it is mandatory to have a Google Cloud Account and Gcloud SDK configured in your local machine. For simplicity sake, it would be better to to use virtualenv.

Firstly it is needed to configure the bucket used for static assets. To configure it just follow [this tutorial](https://django-storages.readthedocs.io/en/latest/backends/gcloud.html).

Before deploying the application, it is needed to compile and collect the frontend data. To achieve this execute:

```bash
cd frontend
npm install
npm run collect
```

Finally to deploy the application follow the [Google App Engine tutorial](https://cloud.google.com/python/django/appengine)

## TODO

- Complete CreateMovie interface binding.
- Complete EditMovie interface binding.
- Complete Login/Signup interface binding.

## Author

- **Alejandro Espinosa**
