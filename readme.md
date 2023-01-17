
# Ecommerce-node-ts

Este proyecto está basado en Domain-Driven Design (DDD), que es un enfoque para el desarrollo de software que se centra en la comprensión y la modelización de los problemas del negocio. En este caso, se ha modelado el dominio de una ecommerce.

En DDD, se separan las diferentes partes del sistema en "dominios" distintos, cada uno con su propia lógica y reglas de negocio. Cada dominio se divide a su vez en "subdominios" que se enfocan en una tarea específica.


Este  proyecto también utiliza RabbitMQ para manejar los eventos de dominio. RabbitMQ es una plataforma de mensajería de código abierto que permite a los sistemas intercambiar mensajes de manera asíncrona y escalable. Al utilizar RabbitMQ, se permite una mayor escalabilidad y flexibilidad en el proyecto, ya que los eventos de dominio pueden ser manejados de manera independiente y asíncrona, lo que permite un mejor rendimiento y una mejor capacidad de manejar cargas de trabajo altas.


## En el proyecto, tiene los siguientes subdominios:

1. Catalogo: encargado de manejar la información de los productos, categorías y marcas.
2. Carrito: encargado de manejar las operaciones relacionadas con el carrito de compras.
3. Orden: encargado de manejar las operaciones relacionadas con la orden de compra.
4. Usuario: encargado de manejar las operaciones relacionadas con el usuario.


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

