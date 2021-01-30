# Vounteer Toronto Driving App

## General Principles

BEFORE YOU DO ANYTHING ELSE: Please read the README.md file in the root directory (../README.md) or https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/blob/develop/README.md

## Kanban Board
https://github.com/orgs/diglit/projects/1?card_filter_query=label%3Abackend

## Dev Setup

Make sure python, black and poetry are installed. Set up your text editor / IDE to run black on save for consistency, and set it up to work with poetry.

- `cd` into the project directory
- `poetry install  # This installs your poetry dependencies`
- `poetry shell  # This activates your virtualenv`
- `python manage.py migrate  # This will run the migrations and create your sqlite db if it doesn't already exist`
- `python manage.py runserver  # runs a local server for testing`

From here, you should be able to go to `http://127.0.0.1:8000/exampledrivers/` and view and create new drivers in a local DB

## Key Technologies

### Django

[Django](https://www.djangoproject.com/) is a very opinionated web framework.

### Django Rest Framework

[DRF](https://www.django-rest-framework.org/) Provides a lot of functionality that makes writing REST apps easier, like better auth, more flexible serialization/deserialization. If you're not sure how to do something, start with the DRF documentation.


## TODO

This is basic setup stuff, nothing app specific yet:

- Example test
- Dockerfile + dockercompose
- Switch this over to postgres or another "real" DB
- Document stuff better
- Finish this TODO, I'm probably missing all sorts of stuff
