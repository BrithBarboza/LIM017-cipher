# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen de la ideación del proyecto](#2-ideaci%C3%B3n-del-proyecto)
* [3. Explicación del prototipado del proyecto](#3-prototipado)
* [4. Explicación del desarrollo del proyecto](#4-desarrollo)
* [5. Ejecusión del test](#5-ejecusi%C3%B3n-de-test)
* [6. Resultados del test y del producto final](#6-resultados)
* [7. Checklist](#7-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Ideación del proyecto

La idea del proyecto se debe inicialmente al reto propuesto por el equipo de Laboratoria para fomentar la manipulación del DOM. En este proyecto se desarrolla una aplicación web que le permita al usuario cifrar y descifrar, ingresando previamente el desplazamiento que el usuario desee.

En base a lo anterior, el proyecto tiene como objetivo que el usuario pueda ingresar una valoración del servicio de un centro comercial de forma segura y anónima.

## 3. Prototipado

### Primera propuesta

Inicialmente en el prototipado se consideró un menú lateral y se consideraron solo 2 páginas:

* La página de inicio: En la barra del menú con las opciones Inicio, Cifrado, Tutorial y un inicio de sesión.
* La ventana del cifrado: Se consideró colocar por defecto 3 opciones para el ingreso del texto a cifrar (16, 24 y 32 caracteres).

![primer boceto a mano](Images-README/inicio-primera pestaña.jpeg)
![primer boceto a mano](Images-README/inicio-segunda pestaña.jpeg)

### Segunda propuesta

Para esta propuesta se decidió prototipar el boceto en [FIGMA] (https://www.figma.com/proto/PqjtYoAU8A05PpBuLueyYO/Cipher?page-id=0%3A1&node-id=71%3A2701&viewport=241%2C48%2C0.13&scaling=scale-down&starting-point-node-id=3%3A425)

En este prototipo se considera mantener el menú lateral de la página, pero se considera no limitar al usuario respecto al número de caracteres que él puede ingresar. También se considera colocar un texto descriptivo de la acción que este va a realizar.

El objetivo fue que el usuario tenga una experiencia de usuario buena con una web amigable, intuitiva y dinámica, pero que al mismo tiempo resuelva la necesidad que este tiene.

## 4. Desarrollo

### Primer sprint

En el primer sprint se consideró iniciar con el prototipado del producto, primero en bajo relieve y luego en alto relieve; luego se realizó la maquetación de la web, se aplicaron estilos para el menú de navegación lateral.

### Segundo sprint

En este segundo sprint se ha proseguido implementando la lógica de las funciones para que permita cifrar y descifrar un mensaje. Dichas funciones se escalaron hacia el final del proyecto ya que en la primera iteración se pudo desplazar una posición de la palabra ingresada. Posteriormente a ello se siguió iterando para conseguir un desplazamiento según el usuario ingrese dicho valor.

### Tercer sprint

En el último sprint, se ejecutaron los test, se solucionaron algunos errores y se terminó por customizar la web, distribuyendo los elementos que contiene la página web.

## 5. Ejecusión de test

### Primera ejecusión del test

En la primera ejecusión del test, se evidenció que las funciones son correctas en el código; sin embargo, hubieron errores sobre el TypeError en el método decode y por ende al realizar la prueba del cifrado en ambos métodos (encode y decode).

![Primera ejecusión del test] (Images-README/1er_test.png)

### Segunda ejecusión del test.

En la segunda ejecusión del test, se logró solucionar el método encode y decode, lo que ocurrió fue que no se estaba escribiendo correctamente los parámetros del método. Inicialmente se escribió **encode: (string,offset)** y **decode: (string,offset)** pero en los test tenían un orden diferente, así que se cambió por **encode: (offset,string)** y **decode: (offset,string)**

![Segunda ejecusión del test] (Images-README/2do_test.png)

### Tercera ejecusión del test.

Se solucionó el TypeError ingresado, inicialmente se había considerado una igualdad de valores mediante un **!=** al compararlo con un string, por lo que se procedió a ser más exactos con la comparación y se sustituyó el anterior término por **!==**

En esta tercera ejecusión, se pudo cumplir con todos los requisitos del test.

![Tercera ejecusión del test] (Images-README/3er_test.png)

## 6. Resultados

### Resultados del test

Finalmente, luego de las correcciones implementadas en el código y en la tercera ejecusión del test se obtuvo un 93.33% de statements, 100% functions, 92.85% lines, y un mínimo del 71.42% de branches.

![Resultados del test] (Images-README/Resultados_test.png)

### Resultado del producto final

Se desarrolló una web agradable para el usuario que cumple con las expectativas del mismo y resuelve la necesidad planteada al inicio. La web cuenta con dinamismo para que el usuario tenga una experiencia de usuario intuitiva y agradable.

## 7. Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
