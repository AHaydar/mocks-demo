# Marvel Client
This project enables the user to interact with Marvel functionality through APIs, and aims to provide a simple demo about mocking.

## Pre-requisites
* Install Node.js and npm (https://www.npmjs.com/get-npm)
* Install Docker (https://docs.docker.com/install/) - will be needed for mock-server

## Installation
### api
* Navigate to the api folder and install the dependencies: `npm install`
* Start the graphql server by running: `npm start`. Open the GraphQL editor on: http://localhost:4000/
* To connect to the Marvel API, create a new file `keys.ts` under `api/config` file and add:
```
export const publicKey = 'public-key';
export const privateKey = 'private-key';
```
#### mockserver
* Navigate to the mockserver folder and install the dependencies: `npm install`
* To start the mockserver, run the following command in your terminal: `docker-compose up`
#### ui
* Navigate to the ui folder and install the dependencies: `npm install` 
* Run the app in development mode: `npm start`
* Open http://localhost:3000 to view the apps in the browser
#### e2e
* Navigate to the e2e folder and install the dependencies: `npm install`
* To run the tests: `npm test`
* To create mocks to be used for the local development environment, navigate to mockserver > setupLocalMocks, and run: `ts-node runner.ts`

## Project structure
Below is the structure of the code:
    
    api
    |----config
    |----mappings - Functions that glue our project to the marvel APIs
    |----index.ts - Entry point, runner of the graphql server
    ui
    |----components - React components
    |----index.js - Entry point to the application - Renders the App component, which is the container of the graphql ApolloProvider
    e2e
    |----Feature
    |----Steps
    |----support/mockserver
        |----endpoints - Functions that mock the marvel endpoints we're interacting with
        |----setupLocalMocks - The mock data creation happens in this folder for local data usage
        |----createMockExpectations.ts - Generic function that is called to create mocks, usually called from the endpoints folder; this function cleans the expectation if it  already exists, then creates a new one
