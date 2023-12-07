# Nutricath Backend

## Authentication

Login and register endpoints are available to get an access token. This token is required to access the rest of the API. The token is valid for 7 days.

```
POST https://examplehost:3000/auth/login 
-------
Body {email: string, password: string }
-------
Return {message: string, access_token: string}
```

For registration, the email must be unique and the password length must be above 6 characters.


```
POST https://examplehost:3000/auth/register
------
Body {name: string, email: string, password: string}
-------
Return {message: string,  access_token: string}
```

## Authorization
Endpoints that require authentication must have the access token in the Authorization header of the request.

To use this API, you need to include your API key in the Authorization header of your requests.

```curl
Authorization: Bearer ACCESS_TOKEN
```
This api is not yet finished and will be updated soon.

```
GET https://examplehost:3000/auth/profile -> {username: string}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
