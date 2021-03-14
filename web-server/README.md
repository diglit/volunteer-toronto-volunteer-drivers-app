# Vounteer Toronto Driving App

## General Principles

BEFORE YOU DO ANYTHING ELSE: Please read the README.md file in the root directory (../README.md) or https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/blob/develop/README.md

## Kanban Board
https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/projects/1?card_filter_query=label%3Abackend

## Dev Setup

Make sure python, black and poetry are installed. Set up your text editor / IDE to run black on save for consistency, and set it up to work with poetry.

- `cd` into the project directory
- `poetry install  # This installs your poetry dependencies`
- `poetry shell  # This activates your virtualenv`
- `python manage.py migrate  # This will run the migrations and create your sqlite db if it doesn't already exist`
- `python manage.py runserver  # runs a local server for testing`

From here, you should be able to go to `http://127.0.0.1:8000/exampledrivers/` and view and create new drivers in a local DB

### Loading in Test Data

```
./manage.py populate_driver driving/management/commands/populate_drivers.csv
```

This will run a management command to populate the DB with our test CSV. If you'd like to clear out any existing driver data you have, you can run

```
./manage.py populate_driver driving/management/commands/populate_drivers.csv --delete-data
```
(note the `--delete-data` flag at the end)


## Key Technologies

### Django

[Django](https://www.djangoproject.com/) is a very opinionated web framework.

### Django Rest Framework

[DRF](https://www.django-rest-framework.org/) Provides a lot of functionality that makes writing REST apps easier, like better auth, more flexible serialization/deserialization. If you're not sure how to do something, start with the DRF documentation.

### Swagger

"_Swagger is a tool used to understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. In simple terms, with swagger you can see what all API end points are available for a web application. You can use swagger for testing the requests and responses of the API endpoints._"

Swagger will allow us to see, use, test and understand all our API endpoints (their requests and responses). It provides a Web UI for us to navigate between end points for ease of use.

#### Access
    [YOUR_ALLOWED_HOST]/swagger
    ex: http://192.168.2.26:8000/swagger/

### Docker

rename temp.env.dev .env.dev ( `mv temp.env.dev .env.dev` )
docker-compose build
docker-compose up

go to localhost:8000
