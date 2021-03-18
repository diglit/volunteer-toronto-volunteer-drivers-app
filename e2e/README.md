# Volunteer Drivers App - Front-End

## General Principles

BEFORE YOU DO ANYTHING ELSE: Please read the README.md file in the root directory (../README.md) or https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/blob/develop/README.md and  https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/web-client/blob/develop/README.md

## Kanban Board
https://github.com/diglit/volunteer-toronto-volunteer-drivers-app/projects/1?card_filter_query=label%3Aqa

## Technologies

1) git
2) node
3) npm
4) Cypress

## Cypress Tests

https://docs.cypress.io/guides/getting-started/writing-your-first-test.html

For testing, we would like as much as possible to use cypress testing-library (https://github.com/testing-library/cypress-testing-library). Unlike other testing libraries, it's very opinionated. 

https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
https://testing-library.com/docs/react-testing-library/cheatsheet/
https://testing-library.com/docs/guide-which-query/

Please use CYPRESS_BASE_URL when running your cypress commands. We want to load the base url dynamically.

### Pretests (experimental)

Pretests are tests that are written before the code that it's intended before. It's like test driven development (TDD), but applied at the cypress level.

Tips: Create a temp directory on your system and start up a fake service using the serve library (https://www.npmjs.com/package/serve) and populate files with the absolute most basic data to get the tests working. 

### Getting Started

TBC
