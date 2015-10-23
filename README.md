Node.js Testing Examples
========================

As the name implies, this repository contains examples on how you can test 
Node.js codebases.

Each folder contains a README giving a quick overview of the different testing 
types and the tools they use, but a quick breakdown of this repo is provided 
below.

## Setup
Before you can use this be sure to _cd_ into this repo directory and run:

```
npm install
```

## Basic Module Testing
This demonstrates how you could setup your own test cases using Node.js without 
installing any test frameworks or dependencies. 

Run example tests using the command:

```
npm run basic-test
```

## Module Testing with Mocha and Chai
These tests are very similar to the _Basic Module Testing_, and even test the 
same module, but instead use Mocha as a test framework and Chai for assertions 
since these provide more expressive and easy to read tests.

Run example tests using the command:

```
npm run mocha-test
```

## Express Application Testing
Express is a popular web application framework for Node.js. Developers expose 
routes using Routers (express.Router instaces) mounted to an express instance. 
Testing these can be achieved using the supertest module without ever needing 
to actually have your express application bind to a port. 

Run example tests using the command:

```
npm run express-test
```