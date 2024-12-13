# Google Search Playwright Tests

This project contains automated tests for Google Search using Playwright. The tests cover basic search functionality and navigation to search results.

## Project Structure

- **package.json**: Project dependencies and scripts.
- **playwright.config.ts**: Playwright configuration file.
- **pages/**: Contains page object models for the search and results pages.
  - `search.page.ts`: Page object for the Google search page.
  - `results.page.ts`: Page object for the Google search results page.
- **tests/**: Contains the test specifications.
  - `google.spec.ts`: Test cases for Google search functionality.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JoaoPDias/beontech-challenge
   cd <repository-directory>
2. Install the dependencies:
    ```sh
    npm install
    ```

## Running Tests
To run the tests, use the following command:
```sh
npx playwright test
```

## Configuration
The Playwright configuration is defined in `playwright.config.ts`. You can modify this file to change settings such as the base URL, test directory, and browser configurations.

## Writing Tests
Tests are written using the Playwright test runner. The `google.spec.ts` file contains example tests for Google search functionality.