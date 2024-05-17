# Node Auth

## Introduction
This project is a Node.js application that demonstrates how to set up authentication. Follow the steps below to get the project running on your local machine.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Steps to Run the Project

1. **Install Dependencies**
   ```sh
   npm install

2. **Configure Environment Variables**
Create a .env file in the root of the project and add the required variables:

```
- PORT = 3000
- JWKS_URI = <JWKS_URI>;
- AUDIENCE = <AUDIENCE>;
- ISSUER = <ISSUER>;
```
PORT: The port number on which the server will run (default is 3000).
JWKS_URI: The URI for the JSON Web Key Set (JWKS).
AUDIENCE: The audience for the JWT token.
ISSUER: The issuer of the JWT token.

3 **Start the Application**
```sh
npm start

Additional InformationScriptsnpm start: Starts the application.npm install: Installs all dependencies listed in package.json.Dependencies
This project relies on various Node.js packages, which are listed in the package.json file. Make sure to install them using npm install before starting the application.
