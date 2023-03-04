# Test Project

A WIP repository containing a simple frontend and backend setup with the intention of demonstrating various different approaches to testing them. This isn't extensive, and there will certainly be overlap. It isn't strictly to demonstrate a better or worse approach, but to act as examples to particular approaches that may be fit for particular circumstances.

The aim is to cover:

* Unit tests (both UI and API)
* API component tests
* Integration tests (both UI and API)
  * Both offline test environments and consumer-driven contract approach
* System tests against a connected FE and BE
* UI visual testing

Consisting of tools such as:

* Jest
* React test library
* Pact
* Playwright
* BackstopJS

### Progress

| Type  ||
| ------------- | ------------- |
| API unit tests  | todo |
| API component tests | todo |
| API integration  | todo |
| UI component tests  | ✅ |
| UI integration tests  | todo |
| System tests | ✅ |
| UI Visual tests | todo |
| Contract tests | todo |

## Usage

```sh
# Run system tests
test-project $ docker-compose up

# Run FE unit tests
test-project/test-client $ npm test
```
