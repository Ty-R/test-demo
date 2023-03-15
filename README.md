# Test Playground

![example workflow](https://github.com/Ty-R/test-demo/actions/workflows/build-and-test.yaml/badge.svg)

This project exists primarily for me to tinker and experiment with different approaches to automated testing/QA. The main application is a simple NextJS frontend, an Express API, and a Mongo DB.

> **Note**
> This is an ongoing project. The application, and tests, will certainly evolve as I learn more about best practices, or think of different challenges that I want to tackle.

* [The Application](#the-application)
* [Testing](#testing)
  * [Usage](#usage)

## The Application

The app is quite simple - it will display 3 refreshable animal facts to the user. The plan is to also create an interface for managing facts.

> **Note**
> To spin up the UI and API for local development, or for exploring the app, run: `npm start` and navigate to http://localhost:3000 in the browser.

## Testing

The aim is to test this UI and API using a variety of different tools and techniques. It's worth bearing in mind that is will be an ongoing project to explore different approaches to testing, so some tests may overlap, and some areas may not yet be covered.

### Usage

Both the UI and API have their own respective tests, and in order to run those, you need to `cd` to their corresponding directories.

```sh
# Run system tests
test-project $ npm test

# Run API schema tests
test-project/test-api $ npm test database/animal-facts.test.ts

# Run API component tests
test-project/test-api $ npm test tests/component.test.ts

# Run FE unit tests
test-project/test-client $ npm test

# Run FE visual tests
test-project/test-client $ npm bitmaps:test
```
