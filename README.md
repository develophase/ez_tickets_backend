# EZ Tickets Rest API built with NodeJs, Express and MySql
[![Node Build, Test And Lint CI](https://github.com/arafaysaleem/ez_tickets_backend/actions/workflows/build-test.yml/badge.svg)](https://github.com/arafaysaleem/ez_tickets_backend/actions/workflows/build-test.yml) [![Deploy To Heroku](https://github.com/arafaysaleem/ez_tickets_backend/actions/workflows/deploy.yml/badge.svg)](https://github.com/arafaysaleem/ez_tickets_backend/actions/workflows/deploy.yml) ![API Version](https://img.shields.io/badge/api--version-v1-orange) [![GitHub issues](https://img.shields.io/github/issues/arafaysaleem/ez_tickets_backend)](https://github.com/arafaysaleem/ez_tickets_backend/issues) [![GitHub forks](https://img.shields.io/github/forks/arafaysaleem/ez_tickets_backend)](https://github.com/arafaysaleem/ez_tickets_backend/network) [![GitHub stars](https://img.shields.io/github/stars/arafaysaleem/ez_tickets_backend)](https://github.com/arafaysaleem/ez_tickets_backend/stargazers) [![GitHub license](https://img.shields.io/github/license/arafaysaleem/ez_tickets_backend)](https://github.com/arafaysaleem/ez_tickets_backend) [![Docs badge](https://img.shields.io/badge/docs-active-yellow.svg)](https://shields.io/)
![BadgeNodeJS] ![BadgeExpress] ![BadgeMySQL] ![BadgeAWS] ![BadgeHeroku]


### :memo: Documentation

The documentation was generated using Postman and is divided into collections at the following URLs:

- Auth - https://documenter.getpostman.com/view/13348269/TzRa6443
- Movies - https://documenter.getpostman.com/view/13348269/TzRa63yg
- Roles - https://documenter.getpostman.com/view/13348269/TzRa63yh
- Genres - https://documenter.getpostman.com/view/13348269/TzRa63yf
- Shows - https://documenter.getpostman.com/view/13348269/TzRa643z
- Theaters - https://documenter.getpostman.com/view/13348269/TzRa6441
- Bookings - https://documenter.getpostman.com/view/13348269/TzRa63ye
- Payments - https://documenter.getpostman.com/view/13348269/TzRa63yi

### :rocket: Deployement

- The database for this API is hosted using AWS RDS
- The Production API is deployed using Heroku

The URLs for both of these deployments is kept private due to security reasons. You can use any services out there for your own hosting requirements.

### :wrench: Tech

This example uses a number of open source projects to work properly:

* [node.js]
* [Express]
* [@sendgrid/mail]
* [bcryptjs]
* [cors]
* [cross-env]
* [deep-email-validator]
* [dotenv-flow]
* [express-validator]
* [jsonwebtoken]
* [mysql2]
* [otp-generator]
* [babel-eslint]
* [mocha]
* [eslint-config-strongloop]

### :dvd: Installation
#### 1. Getting Started

``` sh
# Clone this repo to your local machine using
git clone https://github.com/arafaysaleem/ez_tickets_backend

# Get into the directory
cd ez_tickets_backend

# Make it your own
rm -rf .git && git init

# Copy example.env and create your own .env file in configs folder
cp .env.example configs/.env

# Move into the configs dir
cd configs

# Edit .env file and add your mysql username, password and db name, host,
# port, jwt_secret, sendgrid api key and sender email
vscode .env

# Create different .env.{NODE_ENV} file for each environment and override only your
# required variables. The missing ones will be loaded from .env by default.
# For example if you want dev and prod environments:
cp .env .env.dev
cp .env.dev .env.prod

# When the NODE_ENV variable is set while running, the correct .env loads automatically.
# e.g. Setting NODE_ENV=prod is going to load the .env.prod file

# Add a gitignore to ignore node_modules and your .env file
echo -e 'node_modules \n configs \n' >> .gitignore
```

#### 2. Setup MySQL database

Import the ez_ticket.sql using your sql workbench to create the database.

#### 3. Setting up node js

``` sh
# Install dependencies
npm install

# Run the server locally with default .env file
npm start

# Run the server in dev mode with nodemon with .env.dev file
npm run dev

# While deploying to production with .env.prod file
npm run prod
```

#### (Optional) Setup Postman API

If you want to quickly setup the endpoints for testing:

* Go to Postman to import backup
* Upload the schema_backup or unzip postman_collections_backup.zip and upload the folder

**Enjoy :)**

#### :bookmark_tabs: License
EZ Tickets Backend © 2021 by Abdur Rafay Saleem is licensed under CC BY 4.0 

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [git-repo-url]: <https://github.com/arafaysaleem/ez_tickets_backend>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [@sendgrid/mail]: <https://github.com/sendgrid/sendgrid-nodejs>
   [bcryptjs]: <https://github.com/dcodeIO/bcrypt.js#readme>
   [cors]: <https://github.com/expressjs/cors#readme>
   [cross-env]: <https://github.com/kentcdodds/cross-env>
   [deep-email-validator]: <https://github.com/mfbx9da4/deep-email-validator>
   [dotenv-flow]: <https://github.com/kerimdzhanov/dotenv-flow>
   [express-validator]: <https://express-validator.github.io/docs/>
   [jsonwebtoken]: <https://github.com/auth0/node-jsonwebtoken#readme>
   [mysql2]: <https://github.com/sidorares/node-mysql2#readme>
   [otp-generator]: <https://github.com/Maheshkumar-Kakade/otp-generator#readme>
   [babel-eslint]: <https://github.com/babel/babel-eslint>
   [mocha]: <https://github.com/mochajs/mocha>
   [eslint-config-strongloop]: <https://github.com/strongloop/eslint-config-strongloop>
   [BadgeNodeJS]: <data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTQuODUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMTQuODUgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMTUuMzEiIGhlaWdodD0iMzUiIGZpbGw9IiM0MDQwNDAiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMTMuMzEiIHk9IjAiIHdpZHRoPSIxMDEuNTM5OTk5OTk5OTk5OTkiIGhlaWdodD0iMzUiIGZpbGw9IiMwMEMyMTMiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTUuNjkgMjJMMTQuMjIgMjJMMTQuMjIgMTMuNDdMMTYuMTQgMTMuNDdMMTguNjAgMjAuMDFMMjEuMDYgMTMuNDdMMjIuOTcgMTMuNDdMMjIuOTcgMjJMMjEuNDkgMjJMMjEuNDkgMTkuMTlMMjEuNjQgMTUuNDNMMTkuMTIgMjJMMTguMDYgMjJMMTUuNTUgMTUuNDNMMTUuNjkgMTkuMTlMMTUuNjkgMjJaTTI4LjQ5IDIyTDI2Ljk1IDIyTDMwLjE3IDEzLjQ3TDMxLjUwIDEzLjQ3TDM0LjczIDIyTDMzLjE4IDIyTDMyLjQ5IDIwLjAxTDI5LjE4IDIwLjAxTDI4LjQ5IDIyWk0zMC44MyAxNS4yOEwyOS42MCAxOC44MkwzMi4wNyAxOC44MkwzMC44MyAxNS4yOFpNNDEuMTQgMjJMMzguNjkgMjJMMzguNjkgMTMuNDdMNDEuMjEgMTMuNDdRNDIuMzQgMTMuNDcgNDMuMjEgMTMuOTdRNDQuMDkgMTQuNDggNDQuNTcgMTUuNDBRNDUuMDUgMTYuMzMgNDUuMDUgMTcuNTJMNDUuMDUgMTcuNTJMNDUuMDUgMTcuOTVRNDUuMDUgMTkuMTYgNDQuNTcgMjAuMDhRNDQuMDggMjEuMDAgNDMuMTkgMjEuNTBRNDIuMzAgMjIgNDEuMTQgMjJMNDEuMTQgMjJaTTQwLjE3IDE0LjY2TDQwLjE3IDIwLjgyTDQxLjE0IDIwLjgyUTQyLjMwIDIwLjgyIDQyLjkzIDIwLjA5UTQzLjU1IDE5LjM2IDQzLjU2IDE3Ljk5TDQzLjU2IDE3Ljk5TDQzLjU2IDE3LjUyUTQzLjU2IDE2LjEzIDQyLjk2IDE1LjQwUTQyLjM1IDE0LjY2IDQxLjIxIDE0LjY2TDQxLjIxIDE0LjY2TDQwLjE3IDE0LjY2Wk01NS4wOSAyMkw0OS41MSAyMkw0OS41MSAxMy40N0w1NS4wNSAxMy40N0w1NS4wNSAxNC42Nkw1MS4wMCAxNC42Nkw1MS4wMCAxNy4wMkw1NC41MCAxNy4wMkw1NC41MCAxOC4xOUw1MS4wMCAxOC4xOUw1MS4wMCAyMC44Mkw1NS4wOSAyMC44Mkw1NS4wOSAyMlpNNjYuNjUgMjJMNjQuNjggMTMuNDdMNjYuMTUgMTMuNDdMNjcuNDcgMTkuODhMNjkuMTAgMTMuNDdMNzAuMzQgMTMuNDdMNzEuOTYgMTkuODlMNzMuMjcgMTMuNDdMNzQuNzQgMTMuNDdMNzIuNzcgMjJMNzEuMzUgMjJMNjkuNzMgMTUuNzdMNjguMDcgMjJMNjYuNjUgMjJaTTgwLjM4IDIyTDc4LjkwIDIyTDc4LjkwIDEzLjQ3TDgwLjM4IDEzLjQ3TDgwLjM4IDIyWk04Ni44NyAxNC42Nkw4NC4yMyAxNC42Nkw4NC4yMyAxMy40N0w5MS4wMCAxMy40N0w5MS4wMCAxNC42Nkw4OC4zNCAxNC42Nkw4OC4zNCAyMkw4Ni44NyAyMkw4Ni44NyAxNC42NlpNOTYuMjQgMjJMOTQuNzUgMjJMOTQuNzUgMTMuNDdMOTYuMjQgMTMuNDdMOTYuMjQgMTcuMDJMMTAwLjA1IDE3LjAyTDEwMC4wNSAxMy40N0wxMDEuNTMgMTMuNDdMMTAxLjUzIDIyTDEwMC4wNSAyMkwxMDAuMDUgMTguMjFMOTYuMjQgMTguMjFMOTYuMjQgMjJaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTEyOS44MyAyMkwxMjcuNTAgMjJMMTI3LjUwIDEzLjYwTDEyOS40NSAxMy42MEwxMzMuMTYgMTguMDdMMTMzLjE2IDEzLjYwTDEzNS40OSAxMy42MEwxMzUuNDkgMjJMMTMzLjU0IDIyTDEyOS44MyAxNy41MkwxMjkuODMgMjJaTTE0MC4yMiAxNy44MEwxNDAuMjIgMTcuODBRMTQwLjIyIDE2LjU1IDE0MC44MyAxNS41NVExNDEuNDMgMTQuNTYgMTQyLjQ5IDE0LjAwUTE0My41NiAxMy40MyAxNDQuODkgMTMuNDNMMTQ0Ljg5IDEzLjQzUTE0Ni4yMiAxMy40MyAxNDcuMjggMTQuMDBRMTQ4LjM1IDE0LjU2IDE0OC45NSAxNS41NVExNDkuNTYgMTYuNTUgMTQ5LjU2IDE3LjgwTDE0OS41NiAxNy44MFExNDkuNTYgMTkuMDUgMTQ4Ljk1IDIwLjA0UTE0OC4zNSAyMS4wNCAxNDcuMjggMjEuNjBRMTQ2LjIyIDIyLjE3IDE0NC44OSAyMi4xN0wxNDQuODkgMjIuMTdRMTQzLjU2IDIyLjE3IDE0Mi40OSAyMS42MFExNDEuNDMgMjEuMDQgMTQwLjgzIDIwLjA0UTE0MC4yMiAxOS4wNSAxNDAuMjIgMTcuODBaTTE0Mi42MiAxNy44MEwxNDIuNjIgMTcuODBRMTQyLjYyIDE4LjUxIDE0Mi45MiAxOS4wNVExNDMuMjIgMTkuNjAgMTQzLjc0IDE5LjkwUTE0NC4yNiAyMC4yMCAxNDQuODkgMjAuMjBMMTQ0Ljg5IDIwLjIwUTE0NS41MyAyMC4yMCAxNDYuMDQgMTkuOTBRMTQ2LjU2IDE5LjYwIDE0Ni44NiAxOS4wNVExNDcuMTYgMTguNTEgMTQ3LjE2IDE3LjgwTDE0Ny4xNiAxNy44MFExNDcuMTYgMTcuMDkgMTQ2Ljg2IDE2LjU0UTE0Ni41NiAxNiAxNDYuMDQgMTUuNzBRMTQ1LjUzIDE1LjQwIDE0NC44OSAxNS40MEwxNDQuODkgMTUuNDBRMTQ0LjI1IDE1LjQwIDE0My43NCAxNS43MFExNDMuMjIgMTYgMTQyLjkyIDE2LjU0UTE0Mi42MiAxNy4wOSAxNDIuNjIgMTcuODBaTTE1OC4yNiAyMkwxNTQuMjkgMjJMMTU0LjI5IDEzLjYwTDE1OC4yNiAxMy42MFExNTkuNjQgMTMuNjAgMTYwLjcxIDE0LjEyUTE2MS43OCAxNC42MyAxNjIuMzYgMTUuNThRMTYyLjk1IDE2LjUzIDE2Mi45NSAxNy44MEwxNjIuOTUgMTcuODBRMTYyLjk1IDE5LjA3IDE2Mi4zNiAyMC4wMlExNjEuNzggMjAuOTcgMTYwLjcxIDIxLjQ4UTE1OS42NCAyMiAxNTguMjYgMjJMMTU4LjI2IDIyWk0xNTYuNjcgMTUuNTBMMTU2LjY3IDIwLjEwTDE1OC4xNyAyMC4xMFExNTkuMjQgMjAuMTAgMTU5LjkwIDE5LjQ5UTE2MC41NSAxOC44OCAxNjAuNTUgMTcuODBMMTYwLjU1IDE3LjgwUTE2MC41NSAxNi43MiAxNTkuOTAgMTYuMTFRMTU5LjI0IDE1LjUwIDE1OC4xNyAxNS41MEwxNTguMTcgMTUuNTBMMTU2LjY3IDE1LjUwWk0xNzQuNDMgMjJMMTY3LjY4IDIyTDE2Ny42OCAxMy42MEwxNzQuMjcgMTMuNjBMMTc0LjI3IDE1LjQ0TDE3MC4wNCAxNS40NEwxNzAuMDQgMTYuODVMMTczLjc3IDE2Ljg1TDE3My43NyAxOC42M0wxNzAuMDQgMTguNjNMMTcwLjA0IDIwLjE3TDE3NC40MyAyMC4xN0wxNzQuNDMgMjJaTTE4NS4xMiAyMC45M0wxODUuMTIgMjAuOTNMMTg2LjQyIDE5LjQwUTE4Ny4wOSAyMC4yNyAxODcuODYgMjAuMjdMMTg3Ljg2IDIwLjI3UTE4Ny44NyAyMC4yNyAxODcuODcgMjAuMjdMMTg3Ljg3IDIwLjI3UTE4OC4zOSAyMC4yNyAxODguNjYgMTkuOTZRMTg4LjkzIDE5LjY1IDE4OC45MyAxOS4wNUwxODguOTMgMTkuMDVMMTg4LjkzIDE1LjQ0TDE4Ni4wMyAxNS40NEwxODYuMDMgMTMuNjBMMTkxLjI4IDEzLjYwTDE5MS4yOCAxOC45MVExOTEuMjggMjAuNTQgMTkwLjQ2IDIxLjM2UTE4OS42NCAyMi4xNyAxODguMDQgMjIuMTdMMTg4LjA0IDIyLjE3UTE4Ny4xMiAyMi4xNyAxODYuMzYgMjEuODVRMTg1LjYxIDIxLjUzIDE4NS4xMiAyMC45M1pNMTk1Ljc4IDIxLjI0TDE5NS43OCAyMS4yNEwxOTYuNTYgMTkuNDlRMTk3LjEyIDE5Ljg2IDE5Ny44NyAyMC4wOVExOTguNjEgMjAuMzIgMTk5LjMzIDIwLjMyTDE5OS4zMyAyMC4zMlEyMDAuNzAgMjAuMzIgMjAwLjcwIDE5LjY0TDIwMC43MCAxOS42NFEyMDAuNzAgMTkuMjggMjAwLjMyIDE5LjExUTE5OS45MyAxOC45MyAxOTkuMDYgMTguNzRMMTk5LjA2IDE4Ljc0UTE5OC4xMSAxOC41MyAxOTcuNDcgMTguMzBRMTk2Ljg0IDE4LjA2IDE5Ni4zOCAxNy41NVExOTUuOTMgMTcuMDMgMTk1LjkzIDE2LjE2TDE5NS45MyAxNi4xNlExOTUuOTMgMTUuMzkgMTk2LjM1IDE0Ljc3UTE5Ni43NyAxNC4xNSAxOTcuNjAgMTMuNzlRMTk4LjQ0IDEzLjQzIDE5OS42NCAxMy40M0wxOTkuNjQgMTMuNDNRMjAwLjQ3IDEzLjQzIDIwMS4yOCAxMy42MlEyMDIuMDggMTMuODAgMjAyLjcwIDE0LjE3TDIwMi43MCAxNC4xN0wyMDEuOTYgMTUuOTNRMjAwLjc2IDE1LjI4IDE5OS42MyAxNS4yOEwxOTkuNjMgMTUuMjhRMTk4LjkyIDE1LjI4IDE5OC42MCAxNS40OVExOTguMjggMTUuNzAgMTk4LjI4IDE2LjA0TDE5OC4yOCAxNi4wNFExOTguMjggMTYuMzcgMTk4LjY2IDE2LjU0UTE5OS4wNSAxNi43MSAxOTkuOTAgMTYuODlMMTk5LjkwIDE2Ljg5UTIwMC44NiAxNy4xMCAyMDEuNDkgMTcuMzNRMjAyLjEyIDE3LjU2IDIwMi41OCAxOC4wN1EyMDMuMDQgMTguNTggMjAzLjA0IDE5LjQ2TDIwMy4wNCAxOS40NlEyMDMuMDQgMjAuMjEgMjAyLjYyIDIwLjgzUTIwMi4yMCAyMS40NCAyMDEuMzYgMjEuODBRMjAwLjUyIDIyLjE3IDE5OS4zMiAyMi4xN0wxOTkuMzIgMjIuMTdRMTk4LjMwIDIyLjE3IDE5Ny4zNCAyMS45MlExOTYuMzggMjEuNjcgMTk1Ljc4IDIxLjI0WiIgZmlsbD0iI0ZGRkZGRiIgeD0iMTI2LjMxIi8+PC9zdmc+>
   [BadgeExpress]: <data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjYuOTMiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxNjYuOTMgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NC44OSIgaGVpZ2h0PSIzNSIgZmlsbD0iIzQwNDA0MCIvPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjYyLjg5IiB5PSIwIiB3aWR0aD0iMTA0LjA0IiBoZWlnaHQ9IjM1IiBmaWxsPSIjRDkyMTFGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTE0LjA4IDE5LjE2TDE0LjA4IDE5LjE2TDE0LjA4IDEzLjQ3TDE1LjU2IDEzLjQ3TDE1LjU2IDE5LjE4UTE1LjU2IDIwLjAzIDE1Ljk5IDIwLjQ4UTE2LjQzIDIwLjkzIDE3LjI3IDIwLjkzTDE3LjI3IDIwLjkzUTE4Ljk4IDIwLjkzIDE4Ljk4IDE5LjEzTDE4Ljk4IDE5LjEzTDE4Ljk4IDEzLjQ3TDIwLjQ2IDEzLjQ3TDIwLjQ2IDE5LjE3UTIwLjQ2IDIwLjUzIDE5LjU5IDIxLjMyUTE4LjcyIDIyLjEyIDE3LjI3IDIyLjEyTDE3LjI3IDIyLjEyUTE1LjgxIDIyLjEyIDE0Ljk0IDIxLjMzUTE0LjA4IDIwLjU1IDE0LjA4IDE5LjE2Wk0yNC41OSAxOS40MkwyNC41OSAxOS40MkwyNi4wOCAxOS40MlEyNi4wOCAyMC4xNSAyNi41NiAyMC41NVEyNy4wNCAyMC45NSAyNy45MyAyMC45NUwyNy45MyAyMC45NVEyOC43MSAyMC45NSAyOS4xMCAyMC42M1EyOS40OSAyMC4zMiAyOS40OSAxOS44MEwyOS40OSAxOS44MFEyOS40OSAxOS4yNCAyOS4wOSAxOC45NFEyOC43MCAxOC42MyAyNy42NiAxOC4zMlEyNi42MyAxOC4wMSAyNi4wMiAxNy42M0wyNi4wMiAxNy42M1EyNC44NiAxNi45MCAyNC44NiAxNS43MkwyNC44NiAxNS43MlEyNC44NiAxNC42OSAyNS43MCAxNC4wMlEyNi41NCAxMy4zNSAyNy44OCAxMy4zNUwyNy44OCAxMy4zNVEyOC43NyAxMy4zNSAyOS40NyAxMy42OFEzMC4xNyAxNC4wMSAzMC41NiAxNC42MVEzMC45NiAxNS4yMiAzMC45NiAxNS45NkwzMC45NiAxNS45NkwyOS40OSAxNS45NlEyOS40OSAxNS4yOSAyOS4wNyAxNC45MVEyOC42NSAxNC41NCAyNy44NyAxNC41NEwyNy44NyAxNC41NFEyNy4xNCAxNC41NCAyNi43NCAxNC44NVEyNi4zNCAxNS4xNiAyNi4zNCAxNS43MUwyNi4zNCAxNS43MVEyNi4zNCAxNi4xOCAyNi43NyAxNi41MFEyNy4yMSAxNi44MSAyOC4yMCAxNy4xMFEyOS4yMCAxNy40MCAyOS44MCAxNy43OFEzMC40MSAxOC4xNiAzMC42OSAxOC42NVEzMC45NyAxOS4xMyAzMC45NyAxOS43OUwzMC45NyAxOS43OVEzMC45NyAyMC44NiAzMC4xNSAyMS40OVEyOS4zMyAyMi4xMiAyNy45MyAyMi4xMkwyNy45MyAyMi4xMlEyNy4wMSAyMi4xMiAyNi4yMyAyMS43N1EyNS40NiAyMS40MyAyNS4wMiAyMC44M1EyNC41OSAyMC4yMiAyNC41OSAxOS40MlpNNDAuODQgMjJMMzUuMjYgMjJMMzUuMjYgMTMuNDdMNDAuODAgMTMuNDdMNDAuODAgMTQuNjZMMzYuNzQgMTQuNjZMMzYuNzQgMTcuMDJMNDAuMjQgMTcuMDJMNDAuMjQgMTguMTlMMzYuNzQgMTguMTlMMzYuNzQgMjAuODJMNDAuODQgMjAuODJMNDAuODQgMjJaTTQ0LjYwIDE5LjQyTDQ0LjYwIDE5LjQyTDQ2LjA4IDE5LjQyUTQ2LjA4IDIwLjE1IDQ2LjU2IDIwLjU1UTQ3LjA0IDIwLjk1IDQ3Ljk0IDIwLjk1TDQ3Ljk0IDIwLjk1UTQ4LjcxIDIwLjk1IDQ5LjEwIDIwLjYzUTQ5LjQ5IDIwLjMyIDQ5LjQ5IDE5LjgwTDQ5LjQ5IDE5LjgwUTQ5LjQ5IDE5LjI0IDQ5LjEwIDE4Ljk0UTQ4LjcwIDE4LjYzIDQ3LjY3IDE4LjMyUTQ2LjY0IDE4LjAxIDQ2LjAzIDE3LjYzTDQ2LjAzIDE3LjYzUTQ0Ljg2IDE2LjkwIDQ0Ljg2IDE1LjcyTDQ0Ljg2IDE1LjcyUTQ0Ljg2IDE0LjY5IDQ1LjcwIDE0LjAyUTQ2LjU0IDEzLjM1IDQ3Ljg5IDEzLjM1TDQ3Ljg5IDEzLjM1UTQ4Ljc4IDEzLjM1IDQ5LjQ3IDEzLjY4UTUwLjE3IDE0LjAxIDUwLjU3IDE0LjYxUTUwLjk3IDE1LjIyIDUwLjk3IDE1Ljk2TDUwLjk3IDE1Ljk2TDQ5LjQ5IDE1Ljk2UTQ5LjQ5IDE1LjI5IDQ5LjA3IDE0LjkxUTQ4LjY1IDE0LjU0IDQ3Ljg3IDE0LjU0TDQ3Ljg3IDE0LjU0UTQ3LjE1IDE0LjU0IDQ2Ljc1IDE0Ljg1UTQ2LjM0IDE1LjE2IDQ2LjM0IDE1LjcxTDQ2LjM0IDE1LjcxUTQ2LjM0IDE2LjE4IDQ2Ljc4IDE2LjUwUTQ3LjIxIDE2LjgxIDQ4LjIxIDE3LjEwUTQ5LjIwIDE3LjQwIDQ5LjgxIDE3Ljc4UTUwLjQxIDE4LjE2IDUwLjY5IDE4LjY1UTUwLjk3IDE5LjEzIDUwLjk3IDE5Ljc5TDUwLjk3IDE5Ljc5UTUwLjk3IDIwLjg2IDUwLjE2IDIxLjQ5UTQ5LjM0IDIyLjEyIDQ3Ljk0IDIyLjEyTDQ3Ljk0IDIyLjEyUTQ3LjAxIDIyLjEyIDQ2LjI0IDIxLjc3UTQ1LjQ2IDIxLjQzIDQ1LjAzIDIwLjgzUTQ0LjYwIDIwLjIyIDQ0LjYwIDE5LjQyWiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik04My44MiAyMkw3Ny4wOCAyMkw3Ny4wOCAxMy42MEw4My42NyAxMy42MEw4My42NyAxNS40NEw3OS40MyAxNS40NEw3OS40MyAxNi44NUw4My4xNyAxNi44NUw4My4xNyAxOC42M0w3OS40MyAxOC42M0w3OS40MyAyMC4xN0w4My44MiAyMC4xN0w4My44MiAyMlpNOTAuNDggMjJMODcuNzcgMjJMOTAuODIgMTcuNzVMODcuODkgMTMuNjBMOTAuNTcgMTMuNjBMOTIuMjUgMTYuMDJMOTMuOTEgMTMuNjBMOTYuNDggMTMuNjBMOTMuNTUgMTcuNjZMOTYuNjcgMjJMOTMuOTQgMjJMOTIuMjAgMTkuNDBMOTAuNDggMjJaTTEwMy4zMyAyMkwxMDAuOTUgMjJMMTAwLjk1IDEzLjYwTDEwNC44MCAxMy42MFExMDUuOTQgMTMuNjAgMTA2Ljc4IDEzLjk4UTEwNy42MiAxNC4zNSAxMDguMDcgMTUuMDZRMTA4LjUzIDE1Ljc2IDEwOC41MyAxNi43MUwxMDguNTMgMTYuNzFRMTA4LjUzIDE3LjY2IDEwOC4wNyAxOC4zNVExMDcuNjIgMTkuMDUgMTA2Ljc4IDE5LjQyUTEwNS45NCAxOS44MCAxMDQuODAgMTkuODBMMTA0LjgwIDE5LjgwTDEwMy4zMyAxOS44MEwxMDMuMzMgMjJaTTEwMy4zMyAxNS40N0wxMDMuMzMgMTcuOTNMMTA0LjY1IDE3LjkzUTEwNS4zOCAxNy45MyAxMDUuNzYgMTcuNjFRMTA2LjEzIDE3LjI5IDEwNi4xMyAxNi43MUwxMDYuMTMgMTYuNzFRMTA2LjEzIDE2LjEyIDEwNS43NiAxNS44MFExMDUuMzggMTUuNDcgMTA0LjY1IDE1LjQ3TDEwNC42NSAxNS40N0wxMDMuMzMgMTUuNDdaTTExNS42NiAyMkwxMTMuMjggMjJMMTEzLjI4IDEzLjYwTDExNy4xMyAxMy42MFExMTguMjcgMTMuNjAgMTE5LjExIDEzLjk4UTExOS45NSAxNC4zNSAxMjAuNDAgMTUuMDZRMTIwLjg2IDE1Ljc2IDEyMC44NiAxNi43MUwxMjAuODYgMTYuNzFRMTIwLjg2IDE3LjYyIDEyMC40MyAxOC4zMFExMjAuMDAgMTguOTggMTE5LjIxIDE5LjM2TDExOS4yMSAxOS4zNkwxMjEuMDIgMjJMMTE4LjQ4IDIyTDExNi45NiAxOS43N0wxMTUuNjYgMTkuNzdMMTE1LjY2IDIyWk0xMTUuNjYgMTUuNDdMMTE1LjY2IDE3LjkzTDExNi45OCAxNy45M1ExMTcuNzEgMTcuOTMgMTE4LjA4IDE3LjYxUTExOC40NiAxNy4yOSAxMTguNDYgMTYuNzFMMTE4LjQ2IDE2LjcxUTExOC40NiAxNi4xMiAxMTguMDggMTUuNzlRMTE3LjcxIDE1LjQ3IDExNi45OCAxNS40N0wxMTYuOTggMTUuNDdMMTE1LjY2IDE1LjQ3Wk0xMzIuMzkgMjJMMTI1LjY1IDIyTDEyNS42NSAxMy42MEwxMzIuMjQgMTMuNjBMMTMyLjI0IDE1LjQ0TDEyOC4wMCAxNS40NEwxMjguMDAgMTYuODVMMTMxLjczIDE2Ljg1TDEzMS43MyAxOC42M0wxMjguMDAgMTguNjNMMTI4LjAwIDIwLjE3TDEzMi4zOSAyMC4xN0wxMzIuMzkgMjJaTTEzNi42MSAyMS4yNEwxMzYuNjEgMjEuMjRMMTM3LjM5IDE5LjQ5UTEzNy45NSAxOS44NiAxMzguNzAgMjAuMDlRMTM5LjQ0IDIwLjMyIDE0MC4xNiAyMC4zMkwxNDAuMTYgMjAuMzJRMTQxLjUzIDIwLjMyIDE0MS41MyAxOS42NEwxNDEuNTMgMTkuNjRRMTQxLjUzIDE5LjI4IDE0MS4xNCAxOS4xMVExNDAuNzUgMTguOTMgMTM5Ljg4IDE4Ljc0TDEzOS44OCAxOC43NFExMzguOTQgMTguNTMgMTM4LjMwIDE4LjMwUTEzNy42NiAxOC4wNiAxMzcuMjEgMTcuNTVRMTM2Ljc2IDE3LjAzIDEzNi43NiAxNi4xNkwxMzYuNzYgMTYuMTZRMTM2Ljc2IDE1LjM5IDEzNy4xNyAxNC43N1ExMzcuNTkgMTQuMTUgMTM4LjQzIDEzLjc5UTEzOS4yNiAxMy40MyAxNDAuNDcgMTMuNDNMMTQwLjQ3IDEzLjQzUTE0MS4zMCAxMy40MyAxNDIuMTAgMTMuNjJRMTQyLjkxIDEzLjgwIDE0My41MiAxNC4xN0wxNDMuNTIgMTQuMTdMMTQyLjc5IDE1LjkzUTE0MS41OSAxNS4yOCAxNDAuNDYgMTUuMjhMMTQwLjQ2IDE1LjI4UTEzOS43NSAxNS4yOCAxMzkuNDMgMTUuNDlRMTM5LjExIDE1LjcwIDEzOS4xMSAxNi4wNEwxMzkuMTEgMTYuMDRRMTM5LjExIDE2LjM3IDEzOS40OSAxNi41NFExMzkuODcgMTYuNzEgMTQwLjcyIDE2Ljg5TDE0MC43MiAxNi44OVExNDEuNjggMTcuMTAgMTQyLjMxIDE3LjMzUTE0Mi45NCAxNy41NiAxNDMuNDEgMTguMDdRMTQzLjg3IDE4LjU4IDE0My44NyAxOS40NkwxNDMuODcgMTkuNDZRMTQzLjg3IDIwLjIxIDE0My40NSAyMC44M1ExNDMuMDMgMjEuNDQgMTQyLjE5IDIxLjgwUTE0MS4zNSAyMi4xNyAxNDAuMTUgMjIuMTdMMTQwLjE1IDIyLjE3UTEzOS4xMyAyMi4xNyAxMzguMTcgMjEuOTJRMTM3LjIxIDIxLjY3IDEzNi42MSAyMS4yNFpNMTQ3Ljg2IDIxLjI0TDE0Ny44NiAyMS4yNEwxNDguNjQgMTkuNDlRMTQ5LjIwIDE5Ljg2IDE0OS45NSAyMC4wOVExNTAuNjkgMjAuMzIgMTUxLjQxIDIwLjMyTDE1MS40MSAyMC4zMlExNTIuNzggMjAuMzIgMTUyLjc4IDE5LjY0TDE1Mi43OCAxOS42NFExNTIuNzggMTkuMjggMTUyLjM5IDE5LjExUTE1Mi4wMCAxOC45MyAxNTEuMTMgMTguNzRMMTUxLjEzIDE4Ljc0UTE1MC4xOSAxOC41MyAxNDkuNTUgMTguMzBRMTQ4LjkxIDE4LjA2IDE0OC40NiAxNy41NVExNDguMDEgMTcuMDMgMTQ4LjAxIDE2LjE2TDE0OC4wMSAxNi4xNlExNDguMDEgMTUuMzkgMTQ4LjQyIDE0Ljc3UTE0OC44NCAxNC4xNSAxNDkuNjggMTMuNzlRMTUwLjUxIDEzLjQzIDE1MS43MiAxMy40M0wxNTEuNzIgMTMuNDNRMTUyLjU1IDEzLjQzIDE1My4zNSAxMy42MlExNTQuMTYgMTMuODAgMTU0Ljc3IDE0LjE3TDE1NC43NyAxNC4xN0wxNTQuMDQgMTUuOTNRMTUyLjg0IDE1LjI4IDE1MS43MSAxNS4yOEwxNTEuNzEgMTUuMjhRMTUxLjAwIDE1LjI4IDE1MC42OCAxNS40OVExNTAuMzYgMTUuNzAgMTUwLjM2IDE2LjA0TDE1MC4zNiAxNi4wNFExNTAuMzYgMTYuMzcgMTUwLjc0IDE2LjU0UTE1MS4xMiAxNi43MSAxNTEuOTcgMTYuODlMMTUxLjk3IDE2Ljg5UTE1Mi45MyAxNy4xMCAxNTMuNTYgMTcuMzNRMTU0LjE5IDE3LjU2IDE1NC42NiAxOC4wN1ExNTUuMTIgMTguNTggMTU1LjEyIDE5LjQ2TDE1NS4xMiAxOS40NlExNTUuMTIgMjAuMjEgMTU0LjcwIDIwLjgzUTE1NC4yOCAyMS40NCAxNTMuNDQgMjEuODBRMTUyLjYwIDIyLjE3IDE1MS40MCAyMi4xN0wxNTEuNDAgMjIuMTdRMTUwLjM4IDIyLjE3IDE0OS40MiAyMS45MlExNDguNDYgMjEuNjcgMTQ3Ljg2IDIxLjI0WiIgZmlsbD0iI0ZGRkZGRiIgeD0iNzUuODkiLz48L3N2Zz4=>
   [BadgeMySQL]: <data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDYuODkwMDAwMDAwMDAwMDEiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxNDYuODkwMDAwMDAwMDAwMDEgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NC44OSIgaGVpZ2h0PSIzNSIgZmlsbD0iIzQwNDA0MCIvPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjYyLjg5IiB5PSIwIiB3aWR0aD0iODQuMDAwMDAwMDAwMDAwMDEiIGhlaWdodD0iMzUiIGZpbGw9IiMzQkM0RjMiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTQuMDggMTkuMTZMMTQuMDggMTkuMTZMMTQuMDggMTMuNDdMMTUuNTYgMTMuNDdMMTUuNTYgMTkuMThRMTUuNTYgMjAuMDMgMTUuOTkgMjAuNDhRMTYuNDMgMjAuOTMgMTcuMjcgMjAuOTNMMTcuMjcgMjAuOTNRMTguOTggMjAuOTMgMTguOTggMTkuMTNMMTguOTggMTkuMTNMMTguOTggMTMuNDdMMjAuNDYgMTMuNDdMMjAuNDYgMTkuMTdRMjAuNDYgMjAuNTMgMTkuNTkgMjEuMzJRMTguNzIgMjIuMTIgMTcuMjcgMjIuMTJMMTcuMjcgMjIuMTJRMTUuODEgMjIuMTIgMTQuOTQgMjEuMzNRMTQuMDggMjAuNTUgMTQuMDggMTkuMTZaTTI0LjU5IDE5LjQyTDI0LjU5IDE5LjQyTDI2LjA4IDE5LjQyUTI2LjA4IDIwLjE1IDI2LjU2IDIwLjU1UTI3LjA0IDIwLjk1IDI3LjkzIDIwLjk1TDI3LjkzIDIwLjk1UTI4LjcxIDIwLjk1IDI5LjEwIDIwLjYzUTI5LjQ5IDIwLjMyIDI5LjQ5IDE5LjgwTDI5LjQ5IDE5LjgwUTI5LjQ5IDE5LjI0IDI5LjA5IDE4Ljk0UTI4LjcwIDE4LjYzIDI3LjY2IDE4LjMyUTI2LjYzIDE4LjAxIDI2LjAyIDE3LjYzTDI2LjAyIDE3LjYzUTI0Ljg2IDE2LjkwIDI0Ljg2IDE1LjcyTDI0Ljg2IDE1LjcyUTI0Ljg2IDE0LjY5IDI1LjcwIDE0LjAyUTI2LjU0IDEzLjM1IDI3Ljg4IDEzLjM1TDI3Ljg4IDEzLjM1UTI4Ljc3IDEzLjM1IDI5LjQ3IDEzLjY4UTMwLjE3IDE0LjAxIDMwLjU2IDE0LjYxUTMwLjk2IDE1LjIyIDMwLjk2IDE1Ljk2TDMwLjk2IDE1Ljk2TDI5LjQ5IDE1Ljk2UTI5LjQ5IDE1LjI5IDI5LjA3IDE0LjkxUTI4LjY1IDE0LjU0IDI3Ljg3IDE0LjU0TDI3Ljg3IDE0LjU0UTI3LjE0IDE0LjU0IDI2Ljc0IDE0Ljg1UTI2LjM0IDE1LjE2IDI2LjM0IDE1LjcxTDI2LjM0IDE1LjcxUTI2LjM0IDE2LjE4IDI2Ljc3IDE2LjUwUTI3LjIxIDE2LjgxIDI4LjIwIDE3LjEwUTI5LjIwIDE3LjQwIDI5LjgwIDE3Ljc4UTMwLjQxIDE4LjE2IDMwLjY5IDE4LjY1UTMwLjk3IDE5LjEzIDMwLjk3IDE5Ljc5TDMwLjk3IDE5Ljc5UTMwLjk3IDIwLjg2IDMwLjE1IDIxLjQ5UTI5LjMzIDIyLjEyIDI3LjkzIDIyLjEyTDI3LjkzIDIyLjEyUTI3LjAxIDIyLjEyIDI2LjIzIDIxLjc3UTI1LjQ2IDIxLjQzIDI1LjAyIDIwLjgzUTI0LjU5IDIwLjIyIDI0LjU5IDE5LjQyWk00MC44NCAyMkwzNS4yNiAyMkwzNS4yNiAxMy40N0w0MC44MCAxMy40N0w0MC44MCAxNC42NkwzNi43NCAxNC42NkwzNi43NCAxNy4wMkw0MC4yNCAxNy4wMkw0MC4yNCAxOC4xOUwzNi43NCAxOC4xOUwzNi43NCAyMC44Mkw0MC44NCAyMC44Mkw0MC44NCAyMlpNNDQuNjAgMTkuNDJMNDQuNjAgMTkuNDJMNDYuMDggMTkuNDJRNDYuMDggMjAuMTUgNDYuNTYgMjAuNTVRNDcuMDQgMjAuOTUgNDcuOTQgMjAuOTVMNDcuOTQgMjAuOTVRNDguNzEgMjAuOTUgNDkuMTAgMjAuNjNRNDkuNDkgMjAuMzIgNDkuNDkgMTkuODBMNDkuNDkgMTkuODBRNDkuNDkgMTkuMjQgNDkuMTAgMTguOTRRNDguNzAgMTguNjMgNDcuNjcgMTguMzJRNDYuNjQgMTguMDEgNDYuMDMgMTcuNjNMNDYuMDMgMTcuNjNRNDQuODYgMTYuOTAgNDQuODYgMTUuNzJMNDQuODYgMTUuNzJRNDQuODYgMTQuNjkgNDUuNzAgMTQuMDJRNDYuNTQgMTMuMzUgNDcuODkgMTMuMzVMNDcuODkgMTMuMzVRNDguNzggMTMuMzUgNDkuNDcgMTMuNjhRNTAuMTcgMTQuMDEgNTAuNTcgMTQuNjFRNTAuOTcgMTUuMjIgNTAuOTcgMTUuOTZMNTAuOTcgMTUuOTZMNDkuNDkgMTUuOTZRNDkuNDkgMTUuMjkgNDkuMDcgMTQuOTFRNDguNjUgMTQuNTQgNDcuODcgMTQuNTRMNDcuODcgMTQuNTRRNDcuMTUgMTQuNTQgNDYuNzUgMTQuODVRNDYuMzQgMTUuMTYgNDYuMzQgMTUuNzFMNDYuMzQgMTUuNzFRNDYuMzQgMTYuMTggNDYuNzggMTYuNTBRNDcuMjEgMTYuODEgNDguMjEgMTcuMTBRNDkuMjAgMTcuNDAgNDkuODEgMTcuNzhRNTAuNDEgMTguMTYgNTAuNjkgMTguNjVRNTAuOTcgMTkuMTMgNTAuOTcgMTkuNzlMNTAuOTcgMTkuNzlRNTAuOTcgMjAuODYgNTAuMTYgMjEuNDlRNDkuMzQgMjIuMTIgNDcuOTQgMjIuMTJMNDcuOTQgMjIuMTJRNDcuMDEgMjIuMTIgNDYuMjQgMjEuNzdRNDUuNDYgMjEuNDMgNDUuMDMgMjAuODNRNDQuNjAgMjAuMjIgNDQuNjAgMTkuNDJaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTc5LjI4IDIyTDc3LjA4IDIyTDc3LjA4IDEzLjYwTDc5LjAzIDEzLjYwTDgxLjk5IDE4LjQ1TDg0Ljg3IDEzLjYwTDg2LjgyIDEzLjYwTDg2Ljg1IDIyTDg0LjY3IDIyTDg0LjY0IDE3LjU1TDgyLjQ4IDIxLjE3TDgxLjQzIDIxLjE3TDc5LjI4IDE3LjY3TDc5LjI4IDIyWk05NC4xMyAxOC45NUw5MC45MyAxMy42MEw5My40NCAxMy42MEw5NS40MyAxNi45NEw5Ny40MiAxMy42MEw5OS43MiAxMy42MEw5Ni41MSAxOC45OUw5Ni41MSAyMkw5NC4xMyAyMkw5NC4xMyAxOC45NVpNMTAzLjIyIDIxLjI0TDEwMy4yMiAyMS4yNEwxMDQuMDAgMTkuNDlRMTA0LjU2IDE5Ljg2IDEwNS4zMSAyMC4wOVExMDYuMDUgMjAuMzIgMTA2Ljc3IDIwLjMyTDEwNi43NyAyMC4zMlExMDguMTQgMjAuMzIgMTA4LjE0IDE5LjY0TDEwOC4xNCAxOS42NFExMDguMTQgMTkuMjggMTA3Ljc1IDE5LjExUTEwNy4zNiAxOC45MyAxMDYuNTAgMTguNzRMMTA2LjUwIDE4Ljc0UTEwNS41NSAxOC41MyAxMDQuOTEgMTguMzBRMTA0LjI4IDE4LjA2IDEwMy44MiAxNy41NVExMDMuMzcgMTcuMDMgMTAzLjM3IDE2LjE2TDEwMy4zNyAxNi4xNlExMDMuMzcgMTUuMzkgMTAzLjc5IDE0Ljc3UTEwNC4yMSAxNC4xNSAxMDUuMDQgMTMuNzlRMTA1Ljg4IDEzLjQzIDEwNy4wOCAxMy40M0wxMDcuMDggMTMuNDNRMTA3LjkxIDEzLjQzIDEwOC43MiAxMy42MlExMDkuNTIgMTMuODAgMTEwLjE0IDE0LjE3TDExMC4xNCAxNC4xN0wxMDkuNDAgMTUuOTNRMTA4LjIwIDE1LjI4IDEwNy4wNyAxNS4yOEwxMDcuMDcgMTUuMjhRMTA2LjM2IDE1LjI4IDEwNi4wNCAxNS40OVExMDUuNzIgMTUuNzAgMTA1LjcyIDE2LjA0TDEwNS43MiAxNi4wNFExMDUuNzIgMTYuMzcgMTA2LjEwIDE2LjU0UTEwNi40OSAxNi43MSAxMDcuMzQgMTYuODlMMTA3LjM0IDE2Ljg5UTEwOC4zMCAxNy4xMCAxMDguOTMgMTcuMzNRMTA5LjU2IDE3LjU2IDExMC4wMiAxOC4wN1ExMTAuNDggMTguNTggMTEwLjQ4IDE5LjQ2TDExMC40OCAxOS40NlExMTAuNDggMjAuMjEgMTEwLjA2IDIwLjgzUTEwOS42NCAyMS40NCAxMDguODAgMjEuODBRMTA3Ljk2IDIyLjE3IDEwNi43NiAyMi4xN0wxMDYuNzYgMjIuMTdRMTA1Ljc0IDIyLjE3IDEwNC43OCAyMS45MlExMDMuODIgMjEuNjcgMTAzLjIyIDIxLjI0Wk0xMTQuNjMgMTcuODBMMTE0LjYzIDE3LjgwUTExNC42MyAxNi41NSAxMTUuMjMgMTUuNTVRMTE1Ljg0IDE0LjU2IDExNi45MCAxNC4wMFExMTcuOTYgMTMuNDMgMTE5LjI5IDEzLjQzTDExOS4yOSAxMy40M1ExMjAuNjIgMTMuNDMgMTIxLjY5IDE0LjAwUTEyMi43NSAxNC41NiAxMjMuMzYgMTUuNTVRMTIzLjk2IDE2LjU1IDEyMy45NiAxNy44MEwxMjMuOTYgMTcuODBRMTIzLjk2IDE5LjIyIDEyMy4xOSAyMC4zMFExMjIuNDIgMjEuMzkgMTIxLjExIDIxLjg1TDEyMS4xMSAyMS44NVExMjEuMzUgMjIuMTIgMTIxLjU4IDIyLjIzUTEyMS44MSAyMi4zMyAxMjIuMDkgMjIuMzNMMTIyLjA5IDIyLjMzUTEyMi44MCAyMi4zMyAxMjMuMzcgMjEuNzVMMTIzLjM3IDIxLjc1TDEyNC40MCAyMi45N1ExMjMuOTggMjMuNDkgMTIzLjM3IDIzLjc2UTEyMi43NiAyNC4wMyAxMjIuMDQgMjQuMDNMMTIyLjA0IDI0LjAzUTEyMS4zNSAyNC4wMyAxMjAuNzggMjMuODVRMTIwLjIyIDIzLjY3IDExOS42NSAyMy4yNVExMTkuMDggMjIuODQgMTE4LjM3IDIyLjA5TDExOC4zNyAyMi4wOVExMTcuMjggMjEuOTEgMTE2LjQzIDIxLjMxUTExNS41NyAyMC43MiAxMTUuMTAgMTkuODFRMTE0LjYzIDE4Ljg5IDExNC42MyAxNy44MFpNMTE3LjAzIDE3LjgwTDExNy4wMyAxNy44MFExMTcuMDMgMTguNTEgMTE3LjMzIDE5LjA1UTExNy42MyAxOS42MCAxMTguMTUgMTkuOTBRMTE4LjY2IDIwLjIwIDExOS4yOSAyMC4yMEwxMTkuMjkgMjAuMjBRMTE5LjkzIDIwLjIwIDEyMC40NSAxOS45MFExMjAuOTYgMTkuNjAgMTIxLjI2IDE5LjA1UTEyMS41NiAxOC41MSAxMjEuNTYgMTcuODBMMTIxLjU2IDE3LjgwUTEyMS41NiAxNy4wOSAxMjEuMjYgMTYuNTRRMTIwLjk2IDE2IDEyMC40NSAxNS43MFExMTkuOTMgMTUuNDAgMTE5LjI5IDE1LjQwTDExOS4yOSAxNS40MFExMTguNjYgMTUuNDAgMTE4LjE0IDE1LjcwUTExNy42MyAxNiAxMTcuMzMgMTYuNTRRMTE3LjAzIDE3LjA5IDExNy4wMyAxNy44MFpNMTM1LjA4IDIyTDEyOC42OSAyMkwxMjguNjkgMTMuNjBMMTMxLjA3IDEzLjYwTDEzMS4wNyAyMC4xMUwxMzUuMDggMjAuMTFMMTM1LjA4IDIyWiIgZmlsbD0iI0ZGRkZGRiIgeD0iNzUuODkiLz48L3N2Zz4=>
   [BadgeAWS]: <data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTMuOTUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMTMuOTUgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDcuNjgiIGhlaWdodD0iMzUiIGZpbGw9IiM0MDQwNDAiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMDUuNjgiIHk9IjAiIHdpZHRoPSIxMDguMjciIGhlaWdodD0iMzUiIGZpbGw9IiNGOUQ3MDAiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTYuNjcgMjJMMTQuMjIgMjJMMTQuMjIgMTMuNDdMMTYuNzQgMTMuNDdRMTcuODcgMTMuNDcgMTguNzQgMTMuOTdRMTkuNjIgMTQuNDggMjAuMTAgMTUuNDBRMjAuNTggMTYuMzMgMjAuNTggMTcuNTJMMjAuNTggMTcuNTJMMjAuNTggMTcuOTVRMjAuNTggMTkuMTYgMjAuMTAgMjAuMDhRMTkuNjEgMjEuMDAgMTguNzIgMjEuNTBRMTcuODMgMjIgMTYuNjcgMjJMMTYuNjcgMjJaTTE1LjcwIDE0LjY2TDE1LjcwIDIwLjgyTDE2LjY3IDIwLjgyUTE3LjgzIDIwLjgyIDE4LjQ2IDIwLjA5UTE5LjA4IDE5LjM2IDE5LjA5IDE3Ljk5TDE5LjA5IDE3Ljk5TDE5LjA5IDE3LjUyUTE5LjA5IDE2LjEzIDE4LjQ5IDE1LjQwUTE3Ljg5IDE0LjY2IDE2Ljc0IDE0LjY2TDE2Ljc0IDE0LjY2TDE1LjcwIDE0LjY2Wk0yNS44MiAyMkwyNC4yOCAyMkwyNy41MSAxMy40N0wyOC44NCAxMy40N0wzMi4wNiAyMkwzMC41MiAyMkwyOS44MiAyMC4wMUwyNi41MiAyMC4wMUwyNS44MiAyMlpNMjguMTcgMTUuMjhMMjYuOTMgMTguODJMMjkuNDAgMTguODJMMjguMTcgMTUuMjhaTTM3LjcwIDE0LjY2TDM1LjA2IDE0LjY2TDM1LjA2IDEzLjQ3TDQxLjgzIDEzLjQ3TDQxLjgzIDE0LjY2TDM5LjE3IDE0LjY2TDM5LjE3IDIyTDM3LjcwIDIyTDM3LjcwIDE0LjY2Wk00Ni4zNyAyMkw0NC44MyAyMkw0OC4wNSAxMy40N0w0OS4zOCAxMy40N0w1Mi42MSAyMkw1MS4wNiAyMkw1MC4zNiAyMC4wMUw0Ny4wNiAyMC4wMUw0Ni4zNyAyMlpNNDguNzEgMTUuMjhMNDcuNDggMTguODJMNDkuOTUgMTguODJMNDguNzEgMTUuMjhaTTU5LjY3IDIyTDU2LjU2IDIyTDU2LjU2IDEzLjQ3TDU5LjQ5IDEzLjQ3UTYwLjkzIDEzLjQ3IDYxLjY5IDE0LjA1UTYyLjQ1IDE0LjYzIDYyLjQ1IDE1Ljc4TDYyLjQ1IDE1Ljc4UTYyLjQ1IDE2LjM2IDYyLjEzIDE2LjgzUTYxLjgxIDE3LjMwIDYxLjIwIDE3LjU2TDYxLjIwIDE3LjU2UTYxLjg5IDE3Ljc1IDYyLjI3IDE4LjI2UTYyLjY1IDE4Ljc4IDYyLjY1IDE5LjUxTDYyLjY1IDE5LjUxUTYyLjY1IDIwLjcxIDYxLjg4IDIxLjM2UTYxLjExIDIyIDU5LjY3IDIyTDU5LjY3IDIyWk01OC4wNSAxOC4xNUw1OC4wNSAyMC44Mkw1OS42OSAyMC44MlE2MC4zOSAyMC44MiA2MC43OCAyMC40N1E2MS4xNyAyMC4xMyA2MS4xNyAxOS41MUw2MS4xNyAxOS41MVE2MS4xNyAxOC4xOCA1OS44MSAxOC4xNUw1OS44MSAxOC4xNUw1OC4wNSAxOC4xNVpNNTguMDUgMTQuNjZMNTguMDUgMTcuMDZMNTkuNTAgMTcuMDZRNjAuMTkgMTcuMDYgNjAuNTggMTYuNzVRNjAuOTcgMTYuNDMgNjAuOTcgMTUuODZMNjAuOTcgMTUuODZRNjAuOTcgMTUuMjMgNjAuNjEgMTQuOTVRNjAuMjUgMTQuNjYgNTkuNDkgMTQuNjZMNTkuNDkgMTQuNjZMNTguMDUgMTQuNjZaTTY3LjkwIDIyTDY2LjM2IDIyTDY5LjU4IDEzLjQ3TDcwLjkxIDEzLjQ3TDc0LjE0IDIyTDcyLjU5IDIyTDcxLjkwIDIwLjAxTDY4LjU5IDIwLjAxTDY3LjkwIDIyWk03MC4yNCAxNS4yOEw2OS4wMSAxOC44Mkw3MS40OCAxOC44Mkw3MC4yNCAxNS4yOFpNNzcuNjYgMTkuNDJMNzcuNjYgMTkuNDJMNzkuMTQgMTkuNDJRNzkuMTQgMjAuMTUgNzkuNjMgMjAuNTVRODAuMTEgMjAuOTUgODEuMDAgMjAuOTVMODEuMDAgMjAuOTVRODEuNzggMjAuOTUgODIuMTcgMjAuNjNRODIuNTYgMjAuMzIgODIuNTYgMTkuODBMODIuNTYgMTkuODBRODIuNTYgMTkuMjQgODIuMTYgMTguOTRRODEuNzYgMTguNjMgODAuNzMgMTguMzJRNzkuNzAgMTguMDEgNzkuMDkgMTcuNjNMNzkuMDkgMTcuNjNRNzcuOTMgMTYuOTAgNzcuOTMgMTUuNzJMNzcuOTMgMTUuNzJRNzcuOTMgMTQuNjkgNzguNzcgMTQuMDJRNzkuNjEgMTMuMzUgODAuOTUgMTMuMzVMODAuOTUgMTMuMzVRODEuODQgMTMuMzUgODIuNTQgMTMuNjhRODMuMjMgMTQuMDEgODMuNjMgMTQuNjFRODQuMDMgMTUuMjIgODQuMDMgMTUuOTZMODQuMDMgMTUuOTZMODIuNTYgMTUuOTZRODIuNTYgMTUuMjkgODIuMTQgMTQuOTFRODEuNzIgMTQuNTQgODAuOTQgMTQuNTRMODAuOTQgMTQuNTRRODAuMjEgMTQuNTQgNzkuODEgMTQuODVRNzkuNDEgMTUuMTYgNzkuNDEgMTUuNzFMNzkuNDEgMTUuNzFRNzkuNDEgMTYuMTggNzkuODQgMTYuNTBRODAuMjggMTYuODEgODEuMjcgMTcuMTBRODIuMjcgMTcuNDAgODIuODcgMTcuNzhRODMuNDcgMTguMTYgODMuNzYgMTguNjVRODQuMDQgMTkuMTMgODQuMDQgMTkuNzlMODQuMDQgMTkuNzlRODQuMDQgMjAuODYgODMuMjIgMjEuNDlRODIuNDAgMjIuMTIgODEuMDAgMjIuMTJMODEuMDAgMjIuMTJRODAuMDggMjIuMTIgNzkuMzAgMjEuNzdRNzguNTIgMjEuNDMgNzguMDkgMjAuODNRNzcuNjYgMjAuMjIgNzcuNjYgMTkuNDJaTTkzLjkwIDIyTDg4LjMzIDIyTDg4LjMzIDEzLjQ3TDkzLjg2IDEzLjQ3TDkzLjg2IDE0LjY2TDg5LjgxIDE0LjY2TDg5LjgxIDE3LjAyTDkzLjMxIDE3LjAyTDkzLjMxIDE4LjE5TDg5LjgxIDE4LjE5TDg5LjgxIDIwLjgyTDkzLjkwIDIwLjgyTDkzLjkwIDIyWiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xMjEuMjkgMjJMMTE4Ljg2IDIyTDEyMi41NyAxMy42MEwxMjQuOTEgMTMuNjBMMTI4LjYzIDIyTDEyNi4xNiAyMkwxMjUuNTAgMjAuMzdMMTIxLjk1IDIwLjM3TDEyMS4yOSAyMlpNMTIzLjcyIDE1LjkzTDEyMi42NCAxOC42MUwxMjQuODAgMTguNjFMMTIzLjcyIDE1LjkzWk0xMzQuODYgMjJMMTMyLjE0IDEzLjYwTDEzNC41OSAxMy42MEwxMzYuMjcgMTguOTZMMTM4LjA1IDEzLjYwTDE0MC4yNCAxMy42MEwxNDEuOTMgMTkuMDFMMTQzLjY5IDEzLjYwTDE0NS45NiAxMy42MEwxNDMuMjQgMjJMMTQwLjY5IDIyTDEzOS4wOSAxNi44OUwxMzcuNDEgMjJMMTM0Ljg2IDIyWk0xNDkuODkgMjEuMjRMMTQ5Ljg5IDIxLjI0TDE1MC42NiAxOS40OVExNTEuMjMgMTkuODYgMTUxLjk3IDIwLjA5UTE1Mi43MiAyMC4zMiAxNTMuNDQgMjAuMzJMMTUzLjQ0IDIwLjMyUTE1NC44MCAyMC4zMiAxNTQuODEgMTkuNjRMMTU0LjgxIDE5LjY0UTE1NC44MSAxOS4yOCAxNTQuNDIgMTkuMTFRMTU0LjAzIDE4LjkzIDE1My4xNiAxOC43NEwxNTMuMTYgMTguNzRRMTUyLjIxIDE4LjUzIDE1MS41OCAxOC4zMFExNTAuOTQgMTguMDYgMTUwLjQ5IDE3LjU1UTE1MC4wMyAxNy4wMyAxNTAuMDMgMTYuMTZMMTUwLjAzIDE2LjE2UTE1MC4wMyAxNS4zOSAxNTAuNDUgMTQuNzdRMTUwLjg3IDE0LjE1IDE1MS43MCAxMy43OVExNTIuNTQgMTMuNDMgMTUzLjc1IDEzLjQzTDE1My43NSAxMy40M1ExNTQuNTcgMTMuNDMgMTU1LjM4IDEzLjYyUTE1Ni4xOCAxMy44MCAxNTYuODAgMTQuMTdMMTU2LjgwIDE0LjE3TDE1Ni4wNyAxNS45M1ExNTQuODcgMTUuMjggMTUzLjc0IDE1LjI4TDE1My43NCAxNS4yOFExNTMuMDMgMTUuMjggMTUyLjcwIDE1LjQ5UTE1Mi4zOCAxNS43MCAxNTIuMzggMTYuMDRMMTUyLjM4IDE2LjA0UTE1Mi4zOCAxNi4zNyAxNTIuNzcgMTYuNTRRMTUzLjE1IDE2LjcxIDE1NC4wMCAxNi44OUwxNTQuMDAgMTYuODlRMTU0Ljk2IDE3LjEwIDE1NS41OSAxNy4zM1ExNTYuMjIgMTcuNTYgMTU2LjY4IDE4LjA3UTE1Ny4xNSAxOC41OCAxNTcuMTUgMTkuNDZMMTU3LjE1IDE5LjQ2UTE1Ny4xNSAyMC4yMSAxNTYuNzMgMjAuODNRMTU2LjMxIDIxLjQ0IDE1NS40NyAyMS44MFExNTQuNjMgMjIuMTcgMTUzLjQyIDIyLjE3TDE1My40MiAyMi4xN1ExNTIuNDEgMjIuMTcgMTUxLjQ0IDIxLjkyUTE1MC40OCAyMS42NyAxNDkuODkgMjEuMjRaTTE3MS4wNyAyMkwxNjguNjkgMjJMMTY4LjY5IDEzLjYwTDE3Mi41NCAxMy42MFExNzMuNjggMTMuNjAgMTc0LjUyIDEzLjk4UTE3NS4zNiAxNC4zNSAxNzUuODEgMTUuMDZRMTc2LjI3IDE1Ljc2IDE3Ni4yNyAxNi43MUwxNzYuMjcgMTYuNzFRMTc2LjI3IDE3LjYyIDE3NS44NCAxOC4zMFExNzUuNDEgMTguOTggMTc0LjYyIDE5LjM2TDE3NC42MiAxOS4zNkwxNzYuNDMgMjJMMTczLjg5IDIyTDE3Mi4zNyAxOS43N0wxNzEuMDcgMTkuNzdMMTcxLjA3IDIyWk0xNzEuMDcgMTUuNDdMMTcxLjA3IDE3LjkzTDE3Mi4zOSAxNy45M1ExNzMuMTIgMTcuOTMgMTczLjUwIDE3LjYxUTE3My44NyAxNy4yOSAxNzMuODcgMTYuNzFMMTczLjg3IDE2LjcxUTE3My44NyAxNi4xMiAxNzMuNTAgMTUuNzlRMTczLjEyIDE1LjQ3IDE3Mi4zOSAxNS40N0wxNzIuMzkgMTUuNDdMMTcxLjA3IDE1LjQ3Wk0xODUuMDMgMjJMMTgxLjA2IDIyTDE4MS4wNiAxMy42MEwxODUuMDMgMTMuNjBRMTg2LjQxIDEzLjYwIDE4Ny40OCAxNC4xMlExODguNTUgMTQuNjMgMTg5LjEzIDE1LjU4UTE4OS43MiAxNi41MyAxODkuNzIgMTcuODBMMTg5LjcyIDE3LjgwUTE4OS43MiAxOS4wNyAxODkuMTMgMjAuMDJRMTg4LjU1IDIwLjk3IDE4Ny40OCAyMS40OFExODYuNDEgMjIgMTg1LjAzIDIyTDE4NS4wMyAyMlpNMTgzLjQ0IDE1LjUwTDE4My40NCAyMC4xMEwxODQuOTQgMjAuMTBRMTg2LjAxIDIwLjEwIDE4Ni42NyAxOS40OVExODcuMzIgMTguODggMTg3LjMyIDE3LjgwTDE4Ny4zMiAxNy44MFExODcuMzIgMTYuNzIgMTg2LjY3IDE2LjExUTE4Ni4wMSAxNS41MCAxODQuOTQgMTUuNTBMMTg0Ljk0IDE1LjUwTDE4My40NCAxNS41MFpNMTkzLjg3IDIxLjI0TDE5My44NyAyMS4yNEwxOTQuNjUgMTkuNDlRMTk1LjIxIDE5Ljg2IDE5NS45NSAyMC4wOVExOTYuNzAgMjAuMzIgMTk3LjQyIDIwLjMyTDE5Ny40MiAyMC4zMlExOTguNzggMjAuMzIgMTk4Ljc5IDE5LjY0TDE5OC43OSAxOS42NFExOTguNzkgMTkuMjggMTk4LjQwIDE5LjExUTE5OC4wMSAxOC45MyAxOTcuMTQgMTguNzRMMTk3LjE0IDE4Ljc0UTE5Ni4xOSAxOC41MyAxOTUuNTYgMTguMzBRMTk0LjkyIDE4LjA2IDE5NC40NyAxNy41NVExOTQuMDEgMTcuMDMgMTk0LjAxIDE2LjE2TDE5NC4wMSAxNi4xNlExOTQuMDEgMTUuMzkgMTk0LjQzIDE0Ljc3UTE5NC44NSAxNC4xNSAxOTUuNjkgMTMuNzlRMTk2LjUyIDEzLjQzIDE5Ny43MyAxMy40M0wxOTcuNzMgMTMuNDNRMTk4LjU1IDEzLjQzIDE5OS4zNiAxMy42MlEyMDAuMTYgMTMuODAgMjAwLjc4IDE0LjE3TDIwMC43OCAxNC4xN0wyMDAuMDUgMTUuOTNRMTk4Ljg1IDE1LjI4IDE5Ny43MiAxNS4yOEwxOTcuNzIgMTUuMjhRMTk3LjAxIDE1LjI4IDE5Ni42OCAxNS40OVExOTYuMzYgMTUuNzAgMTk2LjM2IDE2LjA0TDE5Ni4zNiAxNi4wNFExOTYuMzYgMTYuMzcgMTk2Ljc1IDE2LjU0UTE5Ny4xMyAxNi43MSAxOTcuOTggMTYuODlMMTk3Ljk4IDE2Ljg5UTE5OC45NCAxNy4xMCAxOTkuNTcgMTcuMzNRMjAwLjIwIDE3LjU2IDIwMC42NiAxOC4wN1EyMDEuMTMgMTguNTggMjAxLjEzIDE5LjQ2TDIwMS4xMyAxOS40NlEyMDEuMTMgMjAuMjEgMjAwLjcxIDIwLjgzUTIwMC4yOSAyMS40NCAxOTkuNDUgMjEuODBRMTk4LjYxIDIyLjE3IDE5Ny40MSAyMi4xN0wxOTcuNDEgMjIuMTdRMTk2LjM5IDIyLjE3IDE5NS40MiAyMS45MlExOTQuNDYgMjEuNjcgMTkzLjg3IDIxLjI0WiIgZmlsbD0iI0ZGRkZGRiIgeD0iMTE4LjY4Ii8+PC9zdmc+>
   [BadgeHeroku]: <data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDEuNDkiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAyMDEuNDkgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDYuNDUiIGhlaWdodD0iMzUiIGZpbGw9IiM0MDQwNDAiLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMDQuNDUiIHk9IjAiIHdpZHRoPSI5Ny4wNCIgaGVpZ2h0PSIzNSIgZmlsbD0iI0M2M0JGMyIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xNi42NyAyMkwxNC4yMiAyMkwxNC4yMiAxMy40N0wxNi43NCAxMy40N1ExNy44NyAxMy40NyAxOC43NCAxMy45N1ExOS42MiAxNC40OCAyMC4xMCAxNS40MFEyMC41OCAxNi4zMyAyMC41OCAxNy41MkwyMC41OCAxNy41MkwyMC41OCAxNy45NVEyMC41OCAxOS4xNiAyMC4xMCAyMC4wOFExOS42MSAyMS4wMCAxOC43MiAyMS41MFExNy44MyAyMiAxNi42NyAyMkwxNi42NyAyMlpNMTUuNzAgMTQuNjZMMTUuNzAgMjAuODJMMTYuNjcgMjAuODJRMTcuODMgMjAuODIgMTguNDYgMjAuMDlRMTkuMDggMTkuMzYgMTkuMDkgMTcuOTlMMTkuMDkgMTcuOTlMMTkuMDkgMTcuNTJRMTkuMDkgMTYuMTMgMTguNDkgMTUuNDBRMTcuODkgMTQuNjYgMTYuNzQgMTQuNjZMMTYuNzQgMTQuNjZMMTUuNzAgMTQuNjZaTTMwLjYyIDIyTDI1LjA1IDIyTDI1LjA1IDEzLjQ3TDMwLjU4IDEzLjQ3TDMwLjU4IDE0LjY2TDI2LjUzIDE0LjY2TDI2LjUzIDE3LjAyTDMwLjAzIDE3LjAyTDMwLjAzIDE4LjE5TDI2LjUzIDE4LjE5TDI2LjUzIDIwLjgyTDMwLjYyIDIwLjgyTDMwLjYyIDIyWk0zNi4zMCAyMkwzNC44MiAyMkwzNC44MiAxMy40N0wzOC4wOCAxMy40N1EzOS41MSAxMy40NyA0MC4zNSAxNC4yMVE0MS4xOSAxNC45NiA0MS4xOSAxNi4xOEw0MS4xOSAxNi4xOFE0MS4xOSAxNy40NCA0MC4zNyAxOC4xM1EzOS41NSAxOC44MyAzOC4wNiAxOC44M0wzOC4wNiAxOC44M0wzNi4zMCAxOC44M0wzNi4zMCAyMlpNMzYuMzAgMTQuNjZMMzYuMzAgMTcuNjRMMzguMDggMTcuNjRRMzguODcgMTcuNjQgMzkuMjkgMTcuMjdRMzkuNzEgMTYuOTAgMzkuNzEgMTYuMTlMMzkuNzEgMTYuMTlRMzkuNzEgMTUuNTAgMzkuMjggMTUuMDlRMzguODYgMTQuNjggMzguMTIgMTQuNjZMMzguMTIgMTQuNjZMMzYuMzAgMTQuNjZaTTUwLjgzIDIyTDQ1LjQ4IDIyTDQ1LjQ4IDEzLjQ3TDQ2Ljk2IDEzLjQ3TDQ2Ljk2IDIwLjgyTDUwLjgzIDIwLjgyTDUwLjgzIDIyWk01NC42OSAxOC4wMEw1NC42OSAxOC4wMEw1NC42OSAxNy41MlE1NC42OSAxNi4yOCA1NS4xMyAxNS4zMlE1NS41NyAxNC4zNyA1Ni4zOCAxMy44NlE1Ny4xOCAxMy4zNSA1OC4yMyAxMy4zNVE1OS4yNyAxMy4zNSA2MC4wOCAxMy44NVE2MC44OCAxNC4zNSA2MS4zMiAxNS4yOVE2MS43NiAxNi4yMyA2MS43NyAxNy40OEw2MS43NyAxNy40OEw2MS43NyAxNy45NlE2MS43NyAxOS4yMSA2MS4zMyAyMC4xNlE2MC45MCAyMS4xMCA2MC4wOSAyMS42MVE1OS4yOSAyMi4xMiA1OC4yNCAyMi4xMkw1OC4yNCAyMi4xMlE1Ny4yMCAyMi4xMiA1Ni4zOSAyMS42MVE1NS41OCAyMS4xMCA1NS4xNCAyMC4xN1E1NC42OSAxOS4yMyA1NC42OSAxOC4wMFpNNTYuMTcgMTcuNDZMNTYuMTcgMTcuOTZRNTYuMTcgMTkuMzYgNTYuNzIgMjAuMTNRNTcuMjcgMjAuOTAgNTguMjQgMjAuOTBMNTguMjQgMjAuOTBRNTkuMjIgMjAuOTAgNTkuNzUgMjAuMTVRNjAuMjggMTkuNDAgNjAuMjggMTcuOTZMNjAuMjggMTcuOTZMNjAuMjggMTcuNTFRNjAuMjggMTYuMDkgNTkuNzUgMTUuMzRRNTkuMjEgMTQuNTggNTguMjMgMTQuNThMNTguMjMgMTQuNThRNTcuMjcgMTQuNTggNTYuNzIgMTUuMzNRNTYuMTggMTYuMDkgNTYuMTcgMTcuNDZMNTYuMTcgMTcuNDZaTTY4LjI3IDE4Ljg2TDY1LjQwIDEzLjQ3TDY3LjA1IDEzLjQ3TDY5LjAxIDE3LjUxTDcwLjk4IDEzLjQ3TDcyLjYyIDEzLjQ3TDY5Ljc2IDE4Ljg2TDY5Ljc2IDIyTDY4LjI3IDIyTDY4LjI3IDE4Ljg2Wk04Mi4xMSAyMkw3Ni41MyAyMkw3Ni41MyAxMy40N0w4Mi4wNyAxMy40N0w4Mi4wNyAxNC42Nkw3OC4wMSAxNC42Nkw3OC4wMSAxNy4wMkw4MS41MiAxNy4wMkw4MS41MiAxOC4xOUw3OC4wMSAxOC4xOUw3OC4wMSAyMC44Mkw4Mi4xMSAyMC44Mkw4Mi4xMSAyMlpNODguNzYgMjJMODYuMzEgMjJMODYuMzEgMTMuNDdMODguODIgMTMuNDdRODkuOTYgMTMuNDcgOTAuODMgMTMuOTdROTEuNzEgMTQuNDggOTIuMTkgMTUuNDBROTIuNjcgMTYuMzMgOTIuNjcgMTcuNTJMOTIuNjcgMTcuNTJMOTIuNjcgMTcuOTVROTIuNjcgMTkuMTYgOTIuMTggMjAuMDhROTEuNzAgMjEuMDAgOTAuODEgMjEuNTBRODkuOTEgMjIgODguNzYgMjJMODguNzYgMjJaTTg3Ljc5IDE0LjY2TDg3Ljc5IDIwLjgyTDg4Ljc1IDIwLjgyUTg5LjkyIDIwLjgyIDkwLjU0IDIwLjA5UTkxLjE3IDE5LjM2IDkxLjE4IDE3Ljk5TDkxLjE4IDE3Ljk5TDkxLjE4IDE3LjUyUTkxLjE4IDE2LjEzIDkwLjU4IDE1LjQwUTg5Ljk3IDE0LjY2IDg4LjgyIDE0LjY2TDg4LjgyIDE0LjY2TDg3Ljc5IDE0LjY2WiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xMjEuMDIgMjJMMTE4LjY0IDIyTDExOC42NCAxMy42MEwxMjEuMDIgMTMuNjBMMTIxLjAyIDE2Ljc2TDEyNC4yNiAxNi43NkwxMjQuMjYgMTMuNjBMMTI2LjYzIDEzLjYwTDEyNi42MyAyMkwxMjQuMjYgMjJMMTI0LjI2IDE4LjcyTDEyMS4wMiAxOC43MkwxMjEuMDIgMjJaTTEzOC41NCAyMkwxMzEuNzkgMjJMMTMxLjc5IDEzLjYwTDEzOC4zOCAxMy42MEwxMzguMzggMTUuNDRMMTM0LjE1IDE1LjQ0TDEzNC4xNSAxNi44NUwxMzcuODggMTYuODVMMTM3Ljg4IDE4LjYzTDEzNC4xNSAxOC42M0wxMzQuMTUgMjAuMTdMMTM4LjU0IDIwLjE3TDEzOC41NCAyMlpNMTQ1LjcyIDIyTDE0My4zNCAyMkwxNDMuMzQgMTMuNjBMMTQ3LjE4IDEzLjYwUTE0OC4zMyAxMy42MCAxNDkuMTcgMTMuOThRMTUwLjAwIDE0LjM1IDE1MC40NiAxNS4wNlExNTAuOTIgMTUuNzYgMTUwLjkyIDE2LjcxTDE1MC45MiAxNi43MVExNTAuOTIgMTcuNjIgMTUwLjQ5IDE4LjMwUTE1MC4wNiAxOC45OCAxNDkuMjcgMTkuMzZMMTQ5LjI3IDE5LjM2TDE1MS4wOCAyMkwxNDguNTQgMjJMMTQ3LjAxIDE5Ljc3TDE0NS43MiAxOS43N0wxNDUuNzIgMjJaTTE0NS43MiAxNS40N0wxNDUuNzIgMTcuOTNMMTQ3LjA0IDE3LjkzUTE0Ny43NyAxNy45MyAxNDguMTQgMTcuNjFRMTQ4LjUxIDE3LjI5IDE0OC41MSAxNi43MUwxNDguNTEgMTYuNzFRMTQ4LjUxIDE2LjEyIDE0OC4xNCAxNS43OVExNDcuNzcgMTUuNDcgMTQ3LjA0IDE1LjQ3TDE0Ny4wNCAxNS40N0wxNDUuNzIgMTUuNDdaTTE1NS4yOCAxNy44MEwxNTUuMjggMTcuODBRMTU1LjI4IDE2LjU1IDE1NS44OCAxNS41NVExNTYuNDggMTQuNTYgMTU3LjU1IDE0LjAwUTE1OC42MSAxMy40MyAxNTkuOTQgMTMuNDNMMTU5Ljk0IDEzLjQzUTE2MS4yNyAxMy40MyAxNjIuMzMgMTQuMDBRMTYzLjQwIDE0LjU2IDE2NC4wMCAxNS41NVExNjQuNjEgMTYuNTUgMTY0LjYxIDE3LjgwTDE2NC42MSAxNy44MFExNjQuNjEgMTkuMDUgMTY0LjAwIDIwLjA0UTE2My40MCAyMS4wNCAxNjIuMzQgMjEuNjBRMTYxLjI4IDIyLjE3IDE1OS45NCAyMi4xN0wxNTkuOTQgMjIuMTdRMTU4LjYxIDIyLjE3IDE1Ny41NSAyMS42MFExNTYuNDggMjEuMDQgMTU1Ljg4IDIwLjA0UTE1NS4yOCAxOS4wNSAxNTUuMjggMTcuODBaTTE1Ny42NyAxNy44MEwxNTcuNjcgMTcuODBRMTU3LjY3IDE4LjUxIDE1Ny45NyAxOS4wNVExNTguMjggMTkuNjAgMTU4Ljc5IDE5LjkwUTE1OS4zMSAyMC4yMCAxNTkuOTQgMjAuMjBMMTU5Ljk0IDIwLjIwUTE2MC41OCAyMC4yMCAxNjEuMDkgMTkuOTBRMTYxLjYxIDE5LjYwIDE2MS45MSAxOS4wNVExNjIuMjEgMTguNTEgMTYyLjIxIDE3LjgwTDE2Mi4yMSAxNy44MFExNjIuMjEgMTcuMDkgMTYxLjkxIDE2LjU0UTE2MS42MSAxNiAxNjEuMDkgMTUuNzBRMTYwLjU4IDE1LjQwIDE1OS45NCAxNS40MEwxNTkuOTQgMTUuNDBRMTU5LjMwIDE1LjQwIDE1OC43OSAxNS43MFExNTguMjggMTYgMTU3Ljk3IDE2LjU0UTE1Ny42NyAxNy4wOSAxNTcuNjcgMTcuODBaTTE3MS42OSAyMkwxNjkuMzQgMjJMMTY5LjM0IDEzLjYwTDE3MS42OSAxMy42MEwxNzEuNjkgMTcuMDlMMTc0Ljk1IDEzLjYwTDE3Ny41NiAxMy42MEwxNzQuMTMgMTcuMzJMMTc3Ljc0IDIyTDE3NC45OCAyMkwxNzIuNTggMTguOTVMMTcxLjY5IDE5LjkwTDE3MS42OSAyMlpNMTgxLjc4IDE4LjI2TDE4MS43OCAxOC4yNkwxODEuNzggMTMuNjBMMTg0LjE2IDEzLjYwTDE4NC4xNiAxOC4xOVExODQuMTYgMjAuMjAgMTg1Ljc1IDIwLjIwTDE4NS43NSAyMC4yMFExODcuMzMgMjAuMjAgMTg3LjMzIDE4LjE5TDE4Ny4zMyAxOC4xOUwxODcuMzMgMTMuNjBMMTg5LjY4IDEzLjYwTDE4OS42OCAxOC4yNlExODkuNjggMjAuMTMgMTg4LjY0IDIxLjE1UTE4Ny42MCAyMi4xNyAxODUuNzMgMjIuMTdMMTg1LjczIDIyLjE3UTE4My44NSAyMi4xNyAxODIuODIgMjEuMTVRMTgxLjc4IDIwLjEzIDE4MS43OCAxOC4yNloiIGZpbGw9IiNGRkZGRkYiIHg9IjExNy40NSIvPjwvc3ZnPg==>