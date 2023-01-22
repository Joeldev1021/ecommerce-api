# E-commerce API!
##  Description 

This project is an e-commerce API that is based on Domain-Driven Design (DDD) and also implements a CQRS pattern.

In DDD, the different parts of the system are separated into different "domains", each with its own logic and business rules. Each domain is further divided into "subdomains" that focus on a specific task. To handle domain events, we will use RabbitMQ, which allows us to exchange messages asynchronously and scalably. Currently, this project has 3 domains.

-  **User**
-  **Category**
-  **Product**
  
> **Note:** Please note that I am not an expert in these technologies, methods, and patterns. If you have any advice or feedback, it will be welcome.

![ E-commerce API](https://res.cloudinary.com/practicaldev/image/fetch/s--NIfW82Gj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r8iufg4qjc63uu8jzf6y.jpg)

## Technologies

> Nodejs, Express, Typescript, Typeorm, Inversify, amqplib, Eslint, Prettier, Docker

##  Structure project  ☘️

```tree

├── src
│   ├── apps 
│   │   ├── mooc
│   │   └── backend
│   │       ├── command
│   │       ├── controller
│   │       ├── dependency-injection
│   │       ├── routes
│   │       ├── bootstrap.ts
│   │       └── server.ts
│   └── contexts
│       ├── category
│       │   ├── infrastructure
│       │   ├── application
│       │   └── domain
│       ├── product
│       │   ├── infrastructure
│       │   ├── application
│       │   └── domain
│       ├── shared
│       │   ├── infrastructure
│       │   ├── application
│       │   └── domain
│       └── user
│           ├── infrastructure
│           ├── application
│           └── domain
└── test
```

##  Environment 🔑
```
PORT=4000
DB_NAME=ecommerce
MYSQL_USER=root
MYSQL_PASSWORD=example
MYSQL_PORT=3306
```
```
RABBIT_USERNAME='example'
RABBIT_PASSWORD='example'
RABBIT_VHOST='/'
RABBIT_SECURE=false
RABBIT_HOSTNAME='localhost'
RABBIT_PORT=5672
EXCHANGE_NAME='domain_events'
MAX_RETRIES=3
MODULE_NAME='mooc'
````

##   Getting Started 🚀

1. Fork this project:

-   [Click here](https://github.com/Joeldev1021/ecommerce-api).

2.  Clone the repository:
```
git clone https://github.com/Joeldev1021/ecommerce-api
```
3. Install dependencies:
```
npm install
npm run docker:up
npm run rabbit:config:command
npm run dev 
```
