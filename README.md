# Test Playground

![example workflow](https://github.com/Ty-R/test-demo/actions/workflows/build-and-test.yaml/badge.svg)

A repository containing a simple NextJS frontend and Express API with the intention of testing them with a variety of approaches.

> **Note**
> This is an ongoing project. The application and tests within will certainly evolve as I learn more about best practices, or think of different challenges that I want to tackle.

## The Application

The frontend (`test-client/`) is driven by NextJS/React, and currently consists of a single component for fetching a random fact about an animal and renders that fact alongside an image of the animal. The Express-driven API (`test-api/`) is responsible for returning a random animal fact.

> **Note**
> To spin up the UI and API for local development, run: `docker-compose --profile local up`

## Testing

The aim is to test this UI and API using a variety of different tools and techniques. It's worth bearing in mind that is will be an ongoing project to explore different approaches to testing, so some tests may overlap, and some areas may not yet be covered.

| Service | Type of Testing | Tools/Techniques | Status |
| - | - | - | - |
| UI | Unit tests | • React test lib<br>• Jest | Started |
| UI | Integration tests | • Pact<br>• Jest<br>• Axios | -- |
| UI | System tests | • Playwright | Started |
| UI | Visual tests | • BackstopJS | -- |
| API | Unit tests | • Jest | -- |
| API | Component tests | • Jest<br>• Supertest | Started |
| API | Integration tests | • Pact<br>• Jest<br>• Axios | -- |

## Usage

```sh
# Run system tests
test-project $ docker-compose --profile test up --abort-on-container-exit

# Run API component tests
test-project/test-api $ npm test

# Run FE unit tests
test-project/test-client $ npm test
```
