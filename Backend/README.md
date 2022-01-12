# credit-mountain
Development is completed for building APIs with sequelize using postgres as the database and http as the communication protocol.

## Database
Create database named credit_mountain
Migration: npx sequelize-cli db:migrate
Seeder: npx sequelize-cli db:seed:all

Admin User Login Details:
    email: admin@mailinator.com
    password: 12345

## Description
This project covers basic necessities of most APIs.
* Authentication (jwt)
* Database (postgres)
* http support for websites and apis

Please note, if you are planning to use  web application then the 'http' protocol should be used to access its pages.

Visit `http://localhost:3000/` to access the root page.

## Requirements
* node = v17.3.0
* postgres

## .env Configuration
Rename .env.local to .env

## Usage
* `npm start` Start server on development mode with Nodemon
