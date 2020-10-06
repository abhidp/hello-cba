### Instructions :

- clone this repo and cd to the root of the repo
- `yarn install`

### Web Tests

- `yarn cy:open` to open Cypress in UI mode and run tests in your browser of choice
- `yarn cy:chrome` to run all tests in Chrome headed mode
- `yarn cy:chrome:headless` to run all tests in Chrome headless mode

### Test Details :

Tests are inside `cypress/integration/specs` directory
Videos of successful test runs are present under `cypress/videos/specs`

### API :

API tests are under `api/specs` directory
To run api tests : `yarn api:test`
