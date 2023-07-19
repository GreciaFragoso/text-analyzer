# Analizador de texto

## Índice

* [1. Generalidades del producto](#1-generalidades-del-producto)
* [2. Utilidad](#2-utilidad)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Boilerplate](#4-boilerplate)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pruebas](#6-pruebas)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)
* [8. Consideraciones para pedir tu Project Feedback](#8-consideraciones-para-pedir-tu-project-feedback)
* [9. Objetivos de aprendizaje](#9-objetivos-de-aprendizaje)
* [10. Funcionalidades opcionales](#10-funcionalidades-opcionales)

***

## 1. Generalidades del producto

Este producto tiene como finalidad ofrecer al usuario el conteo de parámetros de un texto proporcionado por él. Las funcionalidades incluyen:
* Conteo de palabras
* Conteo de caracteres
* Conteo de caracteres sin espacios
* Conteo de números en el texto
* Suma de los números dentro del texto
* Longitud promedio de palabra

La lógica del proyecto está completamente implementada en JavaScript.

## 2. Utilidad

Cuando se requiera obtener métricas de un texto específico de forma rápida, el usuario puede analizar los resultados obtenidos para una  mejor comprensión del texto.


## 3. Funcionalidades

Las funcionalidades del proyecto se enlistan a continuación:

1. La aplicación permite al usuario ingresar un texto escribiéndolo
en el cuadro de texto con laleyenda "Escribe aquí...".

2. La aplicación calcula las siguientes métricas y actualiza el
resultado en tiempo real a medida que el usuario escribe su texto:

    - **Palabras totales**: La aplicación cuenta las palabras introducidas en el recuadro de texto. 
    - **Caracteres totales**: La aplicación cuenta el número de
    caracteres en el texto ingresado, incluidos espacios y signos de
    puntuación.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    La aplicación cuenta el número de caracteres en el texto ingresado por el usuario, excluyendo espacios y signos de puntuación.
    - **Recuento de números**: La aplicación cuenta cúantos números hay en
    el texto ingresado por el usuario.
    - **Suma total de números**: La aplicación suma todos los números que
    hay en el texto ingresado por el usuario.
    - **Longitud media de las palabras**: La aplicación calcula la
    longitud media de las palabras en el texto ingresado por el usuario.

3. La aplicación permite limpiar el contenido de la caja de texto haciendo
clic en el botón con la leyenda "Limpiar contenido".