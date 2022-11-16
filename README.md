<img align="right" width="179" height="118" alt="ISDI CODER LOGO" src="/assets/isdi_logo_hq.jpg">

# :zap: Challenge Week 6

## Conway's Game of Life

Deberás de programar el Juego de la vida de Conway.

![Logos of used technologies](/assets/gameOfLife.gif)

## Reglas

-   Una célula viva sigue las siguientes reglas:
    -   Si tiene menos de 2 células contiguas vivas, muere por "soledad".
    -   Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
    -   Si tiene 2 o 3 células contiguas vivas, sobrevive.
-   Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".

## Requisitos

-   [x] Debe de estar testeado con Jest.
-   [x] Debe utilizarse SonarCloud para ir comprobando la calidad del código.
-   [x] Se utilizará Husky para manejar los git-hooks, utilizando los archivos adjuntos.
-   [x] Debe utilizarse GitActions el workflow adjunto.
-   [x] Debe protegerse main en GitHub para que todo lo que se mergee pase por pull-request y que el workflow se cumpla.
-   [x] En el caso de llegar a HTML/CSS. 4.1. Se utilizará BEM/SASS. 4.2. Se debe desplegar a Netlify.

## Milestones

-   [x] Programa funcional en JS. Las células se quedan pegadas la pared.
-   [x] Programa 100% testeado.
-   [ ] Añadir HTML/CSS.
-   [ ] Modificar JS para que: a. Las células sigan avanzando al llegar a la pared y desaparezcan. b. Las células salgan por un lado de la cuadrícula y aparezcan por el otro.

## Resultado

https://sonarcloud.io/summary/overall?id=patifusa-20_202211-W6-patricia-rufino

## Tecnologías usadas

![Logos of used technologies](/assets/tech_logos_v2.jpg)
