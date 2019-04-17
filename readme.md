# [galatea.solutions](https://galatea.solutions)
powered by [kleber.digital](https://nodesource.com/products/nsolid)

## 1 Descripción del proyecto

FrontEnd de la página web de Galatea SRL: una empresa mediadora de compra y venta de productos industriales.

#### 1.1 Estado de Proyecto

Este proyecto sólo tiene la parte de FrontEnd, no tiene nada de Backend, consume una Api que en este caso es un JavaScript Objetct Notation (.json) que se encuentra dentro la carpeta "/data/data.json" pero puede ser facilmente reemplazado por un Json proviniente de un Servidor y consumido en los archivos JavaScript que se encuentran en "/pages"


## 2 Dependencias

Este es un proyecto que utiliza React y Next.js
para ver más sobre las dependencias ver el archivo "/package.json"

también se usa Bootstrap en los estilos

[Documentación de React](https://reactjs.org/docs)
[Documentación de Next.js](https://nextjs.org/docs/)
[Documentación de Bootstrap](https://getbootstrap.com/docs/)


#### 2.1 Cómo consumir una Api con Next.js

Cada archivo JavaScript dentro de la carpeta de "/pages" represeta una página, en estos archivos puede añadir el siguiente código dentro del componente de React: 
```js
static async getInitialProps() {
    let req = await fetch
    ('https://tu_api_json_aqui')
    let reqJson  = await req.json()
    return reqson 
  }
```
Después de añadir esto podrá usar la api con los "props" de React

Nota: 
* para poder usar el "fetch" debes instalar la dependencia 'isomorphic-fetch'
* Fijarse la estructura de datos de "/data/data.json" si se pretende realizar una base de datos

para más información visistar la [documentación](https://nextjs.org/docs/) de Next.js

## 3 Instalación

#### 3.1 Para Instalar el proyecto 
* [Descargue este repositorio](https://github.com/SuperKleber/galatea)
* [Descargue e instale Node.js con npm](https://nodejs.org/es/)
* Ejecute ``` npm install ``` en la consola

#### 3.2 Para trabajar en desarrollo
* Ejecute ``` npm run dev ``` 
esto abrirá el proyecto en el puerto 3000

#### 3.3 Para llevarlo a producción
* Ejecute ``` npm run build ``` 
y luego ``` npm run start ``` 

## 4 Deployment
Este proyecto hizo Deploy con zeit-now [documentación aquí](https://zeit.co/docs).
Para hacer Deploy al proyecto simplemente escribir 
```sh 
now 
``` 
Este comando le devolverá un link con el deploy del proyecto, cada deploy le devolverá un link diferente,
por lo tanto si usted desea actualizar la página con un
dominio personalizado, simplemente debe copiar el link que  le devolvió el anterior comando y escribir
```sh 
now alias [link del deployment] [dominio]
``` 
y listo.

Usted puede poner de forma gratuita dominios con la terminación [lo-que-usted-quiera].now.sh,
si usted desea comprar un dominio puede hacerlo con now,
si usted desea añadir un dominio puede hacerlo también, 
le recomiendo revisar la documentación.

## 5 Estructura del proyecto

El proyecto consta de 4 partes:
#### 5.1 pages
Aquí se encuentra todas la páginas principales del proyecto
#### 5.2 components
Todos los componentes de React se encuentran aquí, notará que dentro de la carpeta existe otra llamada "dumbs" estos tenían el objetivo (fallido) de ser los "Dumb Components" de React pero ahora sólo son aquellos componentes que cumplen funciones estéticas reutilizables, como por ejemplo "Card" o "Modal", con excepción de "Product" que es el hijo de Products para hacer el mapeo de datos se recomienda corregir para un código más limpio
#### 5.3 static
la carpeta "/static" ess donde se deben encontrar todos los archivos estáticos, como documentos, imágenes, fuentes, etc, también dentro se encuentran los estilos.

#### 5.4 data
dentro este directorio se encuentra el archivo "data.json" que es el que simula ser la API de la base de datos de la web.

## 6 Algunas sugerencias
Como mencionamos anteriormente, sería bueno corregir el tema de los "dumb components" ya que estos mismos tienen la función de simplemente hacer render de un componente, como esa es su única función optimiza el sitio web, de todos modos debido a que es un sistio web sencillo no debería hacer mucha diferencia.
####6.2 Agregar un page del producto individual
El page de "products" muestra una lista de productos, hasta ahora cada producto simplemente descarga un pdf sobre dicho producto, y aquellos que no tienen un documento asignado, simplemente hay un botón de "pedir info info@galatea.ws", la sugerencia es hacer una página que contenga toda la información sobre ese producto.
####6.3 URL's
Usted notará que cuando va a la página de productos, hay una lista de tipos de productos y al presionar se cargan los productos de ese elemento de la lista, pero usted notará que la URL sigue igual, y si recarga la página debe a volver a buscar en la lista, la sugerencia es hacer una petición y cambiar la url del producto cada que se presione en un elemento de la lista, OJO se debe cambiar la URL sin recargar la página, esto sería incómodo para el usuario. 
Además las URL's deben quedar limpiar, algo como "galatea.solutions/products/detectores-portatiles".

Next.js te permite crear este tipo de URL's de forma sencilla, consulte la documentación de [next router](https://nextjs.org/learn/basics/clean-urls-with-route-masking)
####6.4 loaders
Usted notará que cuando presiona en un elemento de la lista de productos, cargan los productos que corresponden a esa lista, y notará que hay un tiempo de demora y en esa demora de 1 segundo aún se ven las imágenes de los productos de la anterior lista, lo que da la impresión de que la lista no cambió, para hacer más cómoda la vida al usuario, hay que hacerlo sentir que tiene el control de todo, este problema se soluciona simplemente poniendo un loader, o algo que simplemente diga "cargando...", Bootstrap tiene ya algunos [spinners](https://getbootstrap.com/docs/4.3/components/spinners/) para hacer esta función.


###### Si necesita más información de cada archivo ".js" cada uno está comentado con su respectiva funcionalidad
