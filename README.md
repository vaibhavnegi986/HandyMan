# HandyMan

**HandyMan** is a hybrid mobile application built using the **Ionic** framework and **Angular**. It is a **hobby project** that provides a simple and intuitive way for users to connect with local service providers for various home maintenance and repair related tasks. The application consumes a **Node.js API** to perform all of its data-related operations.

To access this application: [https://anirudhsingh20.github.io/HandyMan](https://anirudhsingh20.github.io/HandyMan)

## Key Features

-   **CRUD** (Create, Read, Update, Delete) functionality for tasks and service providers
-   JSON Web Token (JWT) authentication for secure access to the API
-   Structured code for easy maintenance and scalability
-   Consumes a Node.js API for all data-related operations
-   Skeleton loading for a better user experience

## Authentication

Access to the HandyMan API is secured using **JSON Web Tokens (JWT)**. The application handles authentication automatically and will request a new JWT if necessary. The user is only required to log in once, and the application will securely store the JWT for future use.

## Code Structure

The code for the HandyMan application is structured in a modular and scalable manner. This makes it easier to maintain and add new features in the future. The code also adheres to best practices and follows the Angular style guide.

## Scripts

`npm install` // to install all the dependencies

`npm start` // to run the application

`npm run build` // to build and deploy project on github page

`ng build --base-href '/HandyMan/' --prod` // for production build

Note: Project was created using node v16.19.0


