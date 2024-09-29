#  Sprint 2.3: Diseño y Gestión de Base de Datos

## Introducción
![mongodb](https://www.opc-router.com/wp-content/uploads/2021/03/mongodb_thumbnail.png)
![moon modeler](https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/487b2655-8eea-4321-9ec0-3034b4444be3.png?auto=format&q=50&fit=fill)
En este sprint, trabajé en el diseño y gestión de una base de datos utilizando diferentes herramientas de MongoDB. El objetivo fue modelar una base de datos para una óptica llamada "Cul d'Ampolla", donde se almacenan información de clientes, productos (gafas), proveedores y compras realizadas.

## Herramientas Utilizadas

1. **Moon Modeler**: Utilicé esta herramienta para diseñar el modelo de la base de datos. Moon Modeler me permitió visualizar la estructura de las colecciones, definir relaciones y establecer validaciones para asegurar la integridad de los datos.

2. **Mongo Shell**: Esta herramienta se utilizó para realizar operaciones en la base de datos directamente desde la línea de comandos. Con Mongo Shell, pude ejecutar consultas, insertar documentos y validar la estructura de los datos.

3. **MongoDB Compass**: Utilicé Compass para explorar la base de datos y realizar operaciones de lectura y escritura de forma visual. Esta herramienta me permitió revisar los documentos insertados y verificar la correcta creación de las colecciones.

## Estructura de la Base de Datos

La base de datos se compone de las siguientes colecciones:

- **Clientes**: Contiene información sobre los clientes, como nombre, dirección, teléfono, correo electrónico y detalles de las compras realizadas.

- **Gafas**: Almacena información sobre las gafas, incluyendo marca, tipo de marco, graduación de lentes, color de lentes, precio y proveedor.

- **Proveedores**: Incluye detalles sobre los proveedores de las gafas, como nombre, dirección, teléfono y NIF.

## Proceso de Trabajo

1. **Diseño del Modelo**: Comencé diseñando el modelo de la base de datos en Moon Modeler. Definí las colecciones y sus respectivos campos, asegurando que cada colección tuviera las validaciones necesarias.

2. **Creación de Colecciones**: Utilizando Mongo Shell, creé las colecciones siguiendo el diseño previamente realizado. Implementé esquemas de validación para asegurar la calidad de los datos.

3. **Inserción de Datos**: Realicé la inserción de datos utilizando `insertOne`, asegurando que cada documento siguiera la estructura definida. Este proceso se llevó a cabo tanto en la colección de clientes como en la de gafas.

4. **Verificación de Datos**: Utilicé MongoDB Compass para revisar los datos insertados y asegurarme de que todo estuviera correcto. Hice ajustes según fuera necesario.

## Conclusión

Este sprint me permitió adquirir experiencia práctica en el diseño y gestión de bases de datos en MongoDB. Las herramientas utilizadas facilitaron el proceso de modelado, inserción y verificación de datos, lo que resultó en un proyecto estructurado y bien organizado.
 


