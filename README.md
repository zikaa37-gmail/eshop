# ECommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Server
User Json server [Reference](https://www.npmjs.com/package/json-server)
Created mocks using Faker library [Reference](https://fakerjs.dev/guide/)
Added separate files for each API (e.g. products.json etc) to './server/mocks' folder
Joined all APIs in './server/db.js' file
To run server with APIs, open another instance of terminal, and in the root folder run command [command]('json-server --watch ./server/db.js') or [command]('npm run server')
