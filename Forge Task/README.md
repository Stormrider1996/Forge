# Laravel - Forge task - News portal

## Description

This application is based on a NewsAPI made by News-API-gh. It is a portal for searching the news based on the users criteria. The user can favourite the news, also comment on them, etc. It uses breeze scaffolding for authentication and profile editing. Also if you wish to create an admin account with predefined credentials, you can do so with a command (details in usage). The admin has his own backoffice for managing users and a log history page.  

## Installation

Make sure you have this installed:
- composer for dependency managment: https://getcomposer.org/doc/00-intro.md
- PHP: https://www.php.net/manual/en/install.php
- node: https://nodejs.org/en

Optional
- if you are going to use docker with sail: https://www.docker.com/products/docker-desktop/

For more information on installation check the official laravel documentation: https://laravel.com/docs/10.x/installation

## Usage

- once you have everything installed, make sure to get your API key at: https://newsapi.org/
- in the project you need to make a .env file to setup your environment variables (there is a .env.example file in the project). In here you will put your API key
- open the terminal make sure you are in the project directory
- run this command to install the NewsAPI package `composer require jcobhams/newsapi`
- to install needed modules run `npm install`
- run the migrations to the database `php artisan migrate`
- run the tests to see if everything is working correctly `php artisan test`
- to serve your application run `php artisan serve` if you are using sail https://laravel.com/docs/10.x/sail#main-content (in the terminal you should see a link for the homepage)
- run the development server with `npm run dev`

FOR THE ADMIN
- run command to seed admin user to the database `php artisan db:seed --class=AdminSeeder`
- credentials: email:admin@admin.news password:password
