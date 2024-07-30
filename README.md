# Book Library Challenge Tracker

## Table of Contents
*  [Description](#Description)
*  [Links](#Links)
*  [Installation](#Installation)
*  [Usage-Information](#Usage-Information)

##  Description 
This application provides an integrated Postgres database and Sequelize for the efficient management of a library, reading list, and reading challenge tracker. Sequelize serves as an ORM, enhancing code readability and reusability. Users can interact with the database through a user interface. 

Similar to GoodRead, but with addition support for tracking audiobook hours and specific reading challenges, such as reading books set in specific US states or countries.

## Installation

1. Clone the repo: `git clone git@github.com:Nettlette/BookLibraryChallenge.git`

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, `npm install node.js`. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js is installed, in the terminal, utilize the command `npm init -y` to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the following commands to install the dependencies associated with this application.

* `npm install express`
* `npm install express-session`
* `npm install express-handlebars`
* `npm install sequelize`
* `npm install pg`
* `npm install dotenv`
* `npm install bcrypt`
* `npm install connect-session-sequelize`

6. Install PostgreSQL, if it is not already. https://www.postgresql.org/download/

7. In the terminal, navigate to the directory of the project.

8. Enter the PostgreSQL shell, using `psql`, and run the `schema.sql` file (`\i schema.sql`).

9. In the VS Code terminal, run the command `npm run seed` to seed the database with initial data.

10. To run the program, within the terminal, type the command `node server.js`.

11. Once the server is running, users can then access the front end of the application within the browser to observe the full functionality of the site.

## Usage Information
This application requires a server running in the background, which is powered by Express. To start the server, follow these steps:

1. Navigate to the application's directory.

2. Install all dependencies by running the command `npm i`.

3. Start the server by typing `node server.js`.

4. The command line will display a message: "App listening at http://localhost:3001".

5. Once the server is running, access the application's front end directly from the command line by holding the command key and clicking on the link http://localhost:3001.