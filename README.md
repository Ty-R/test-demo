# Test Playground

![example workflow](https://github.com/Ty-R/test-demo/actions/workflows/build-and-test.yaml/badge.svg)

A repository containing a simple NextJS frontend and Express API with the intention of testing them with a variety of approaches.

> **Note**
> This is an ongoing project. The application and tests within will certainly evolve as I learn more about best practices, or think of different challenges that I want to tackle.

## The Application

The frontend (`test-client/`) is driven by NextJS/React, and it is designed to fetch random animal facts and render them. The Express-driven API (`test-api/`) is responsible for returning these facts.

The facts themselves are held in a Mongo DB.

> **Note**
> To spin up the UI and API for local development, or for exploring the app, run: `docker-compose --profile local up` and navigate to http://localhost:3000 in the browser.

## Testing

The aim is to test this UI and API using a variety of different tools and techniques. It's worth bearing in mind that is will be an ongoing project to explore different approaches to testing, so some tests may overlap, and some areas may not yet be covered.

### Usage

```sh
# Run system tests
test-project $ npm test

# Run API schema tests
test-project/test-api $ npm test database/animal-facts.test.ts

# Run API component tests
test-project/test-api $ npm test tests/component.test.ts

# Run FE unit tests
test-project/test-client $ npm test
```
