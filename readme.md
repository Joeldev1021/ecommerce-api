# E-commerce API!
##  Description 

Este proyecto es una API ecommerce que basado en el diseño Doman-Driven Desing **(DDD)** y también implementa un patrón **CQRS**.

En DDD se separa las distintas partes del sistema “dominios” distintos cada uno con su propia lógica y reglas de negocio. Cada dominio se divide a su vez en "subdominios" que se enfocan en una tarea específica. Para manejar los eventos de dominios utilizaremos RabbitMQ, que nos permite intercambiar mensajes de manera asíncrona y escalable.
Por ahora  este proyecto cuenta con 3 dominios

-  **User**
-  **Category**
-  **Product**
  
> **Note:** Tenga en cuenta que no soy un experto en estas tecnologías, métodos y patrones , si tiene algún consejo o feedback será bienvenida.

![ E-commerce API](https://res.cloudinary.com/practicaldev/image/fetch/s--NIfW82Gj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/r8iufg4qjc63uu8jzf6y.jpg)

## Tecnologias

> Nodejs, Express, Typescript, Typeorm, Inversify, amqplib, Eslint, Prettier, Docker

##  Estructura del proyecto ☘️

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
