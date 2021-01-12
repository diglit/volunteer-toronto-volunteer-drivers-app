# Vounteer Toronto Driving App

## Dev Setup

Make sure python and poetry are installed.

- `cd` into the project directory
- `poetry install`
- `poetry shell  # This activates your virtualenv`
- `python manage.py migrate  # This will run the migrations and create your sqlite db if it doesn't already exist`
- `python manage.py runserver`

From here, you should be able to go to `http://127.0.0.1:8000/exampledrivers/` and view and create new drivers in a local DB

## TODO

This is basic setup stuff, nothing app specific yet:

- Example test
- Dockerfile + dockercompose
- Switch this over to postgres or another "real" DB
- Document stuff better
- Finish this TODO, I'm probably missing all sorts of stuff

Possibly app specific stuff:
- Auth? What are we even doing here, JWT? Boring ol' cookies? something even more horrible? Do we need 2FA?
