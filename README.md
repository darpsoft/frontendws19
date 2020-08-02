# Descripción Pruebas

* A continuación se mostrará el performance obtenido en distintas situaciones, cabe destacar que las pruebas se hicieron a través de la página web [https://developers.google.com/speed/pagespeed/insights/]. 
* Todas las pruebas se hicieron en el servidor de Heroku
* La espacio donde se hicieron las pruebas es [https://qrcode-nextjs.herokuapp.com/]

###  SIN ESTILOS
URL PRUEBA: [https://www.free-qr-code-generator.com/testing/t1_wrapper]
Detalles del código, todos los estilos deshabilitado
![enter image description here](https://lh3.googleusercontent.com/H2cZYfi8XWKBy--cKNI7YeXoZ12oaGGaox9IHA1u5cdDu2CzyTI3feXXp0ermlN76LimheuzoNI)
A continuación se mostrará el performance sin estilos en la aplicación, cabe destacar que la aplicación posee todas las librerías instaladas del proyecto.

**Performance computer**
![](https://lh3.googleusercontent.com/XYBCAdUROnoPEnEUeyJy8LD-4IRo8r6o7ur6zXcvLig0RQwaAxspnVYFFPUZUSQbkLRPW1Mi0tI "Performance Computer")
**Nota:** En estas imagenes se pueden visualizar que el performance en computer es de 100 - 99. Esto quiere decir que la aplicación no posee ninguna carga para el performance.

**Performance Mobile**
![
](https://lh3.googleusercontent.com/bEeLtJHbxsVFBJFmaLGGKO4_Y-60295j27RYVxiGoFEnFyzosIkRj7FLio7ll60T-xCZvLxLpSg "Performance mobile")
**Nota:** El performance en este caso es de 92 puntos, esto se debe a que en movil algunas funcionalidades del sistema se deshabilitan por el modo "Responsive", gracias a esto [Lighthouse](https://developers.google.com/web/tools/lighthouse/). muestra el siguiente mensaje:

![enter image description here](https://lh3.googleusercontent.com/saYGAn7FPMjt864lr4Pt9bNJPV04aXPLpN670Ly3-M1x4jwNICKtNa291d-D7vAYMQnayLJgaF8)
A continuación se mostrará el contenido de el js […chunks/769650a….4329d91….js](http://qrcode-nextjs.herokuapp.com/_next/static/chunks/769650a343d2ea102d2bc328cb1e3586d29b3d4e.4329d91e89f86ad9cb48.js), aquí se podrá visualizar las librerías en funcionamiento de este script.
![enter image description here](https://lh3.googleusercontent.com/P5R2216_mRy0AQa1twwkcEZtMSOmC_r-UE4SomXZWKB0EMnruw8VdpKvlkjf7EskAfZucBCARME)
Se realizó un seguimiento exhaustivo dando como conclusión que todas las librerías llamadas en ellas son necesarias para el funcionamiento del sistema, en ella podemos ver la carga que ejerce cada librería sobre el script. Como un ejemplo en este caso es el **Toastr**, el siempre deberá estar activo para que cuando el sistema lo necesite, al igual que los **reducer** y los **sagas**, estos serán llamados cuando sea necesario. Además de otras librerías que son necesarias como el immutable. 

# Hacking Next.js for better PageSpeed scores 
Implementación de componentes custom para la mejora del performance.
[https://medium.com/medwing-engineering-product-design/hacking-next-js-for-better-pagespeed-scores-6c651d19f218](https://medium.com/medwing-engineering-product-design/hacking-next-js-for-better-pagespeed-scores-6c651d19f218) en este articulo se puede ver una forma de mejorar el performance radicalmente con algunas "Tecnicas", cabe destacar que la versión de next es 9.2.1 

Se intentó implementar estas tecnicas en el proyecto actual y no funcionó, esto se debe a que dichas tecnicas dejaron de ser funcionales cuando se implemento SSG en la versión 9.3.0 de next, véase aquí [https://nextjs.org/blog/next-9-3](https://nextjs.org/blog/next-9-3).

Las tecnicas antes mencionadas en resumen consiste en la administración de script generados en _document, gracias a la nueva actualización, aquellas **page** generadas por SSG no generan algunas propiedades fundamentales para la **Fragmentación / división de código**.

**Conclusión:** NextJS es una Framework que está en constante evolución, ahora mas que nunca que tiene tanto apoyo como por ejemplo de Google, su equipo se dedica a mejorar en todos los aspectos las debilidades. Actualmente se está usando NextJS 9.5 donde posee mejoras importantes, esta se ven reflejadas en el performance y por ende no hay necesidad de aplicar algunas técnicas.  Vease [https://nextjs.org/blog/next-9-5](https://nextjs.org/blog/next-9-5)

# Pruebas con estilos [Sin bootstrap]
A continuación se mostrará el impacto que tiene algunos estilos en el performance, en este caso **agregaremos todos los estilos de la aplicación** excepto [**bootstrap**], un vistazo al código antes de mostrar los resultados del performance
![enter image description here](https://lh3.googleusercontent.com/VUibtdf1eo0ZlLpl2YBLZyNlo_ARGjUWw5TOSrAPxvc-ouvIhU1BG82QvCZa0S-HlDUrjAGqnq8)
Aquí podemos ver que la librería bootstrap está **deshabilitada** por completo **(Solo CSS)**

**Performance Computer**
![enter image description here](https://lh3.googleusercontent.com/irV-MFa9_dLCrNLsyUPYTHFQAGdSh6ULBlsQpL48I9Ssbm-vflrZbkDWIlXsnv3xIL0EoFZroYo)

**Performance Mobile**
![enter image description here](https://lh3.googleusercontent.com/9n78gLdwH6P5jJArcnb9Vk1r_srGPIT7_FcUr1GwEljoRzZOsokSWUXHYEzfw_R-awV2uhWm4ao)
**Nota:** Se puede notar que el performance en móvil se ve afectado por el uso de todo los estilos, excepto **Bootstrap**. La disminución es de **7 PUNTOS**.

# Pruebas con estilos [Con bootstrap Default]
A continuación se mostrará el impacto que tiene bootstrap en el performance, en este caso **agregaremos a Bootstrap predeterminado**, un vistazo al código antes de mostrar los resultados del performance.
![enter image description here](https://lh3.googleusercontent.com/3xOxYSfzQ0kj3jnBFApgo2oSQZfORw8s5XikI1v_cE8iz9ceJ9JHkUG0KAUohN1coeFBDlJZnSU)
**Nota:** se puede ver que la importación es de [**bootstrap.min.css**], cabe destacar que el **Bootstrap** de [**public/static/assets/scss/main.scss**] está deshabilitado.

**Performance Computer**
![enter image description here](https://lh3.googleusercontent.com/cBvrRlcbVSODWfzPy03lKGqUpFhmq1XfN4adpzlYe81mLg-RW3zXuL1dvOphh9Rm6lNib8YfmcI)

**Performance Mobile**
![enter image description here](https://lh3.googleusercontent.com/GaJrJHATHgtDceHgBsNFc4BUtdwWEj5WbZerPUzvCkQBHIMXLTV2eZkniy_zPKnMfijy_qcolpY)
**Nota:** Se puede notar que el performance en móvil se ve afectado por el uso de **Bootstrap default**. La disminución es de **16 PUNTOS** ante **85 PUNTOS**. 

# Pruebas con estilos [Con bootstrap Custom]
A continuación se mostrará el impacto que tiene bootstrap en el performance, en este caso **agregaremos a Bootstrap Custom**, esto quiere decir que deshabilitamos algunos estilos que no se están usando en la aplicación. un vistazo al código antes de mostrar los resultados del performance.

**Nota:** Cabe destacar que cada estilo se deshabilito luego de hacer pruebas en el sistema. Si algún estilo deshabilitado se está usando en alguna página, no dude en habilitarlo.
![enter image description here](https://lh3.googleusercontent.com/Tg8dcseDmk0h_DDPnRZ_4M3cQS4cGBBCBd716-JbWZLWA5M9LrwmrQDOJ1h9PKuex_fWaHu-qws)
**Nota:** se puede ver que la importación es de [**public/static/assets/scss/main.scss**], cabe destacar que el **Bootstrap** de [**_app.js**] está deshabilitado.

**Performance Computer**
![enter image description here](https://lh3.googleusercontent.com/miQdszEaISVAigeIi02h2tpyAYY9EMl39s-ueGnqaB78bm-A3d5p7wyrramQ00ojnhV3cpnow8Y)

**Performance Mobile**
![enter image description here](https://lh3.googleusercontent.com/Ft1WOWLt5zAdDMRSbAxAbr4VnEwaZxWd0r7QpWysGuUOWErLRVYioE68emM6GU_OnuYTLIEtqQ4)
**Nota:** Se puede notar que el performance en móvil mejora en comparación con **Bootstrap default**. El aumento es de **6 PUNTOS** antes **69 PUNTOS**.

## Conclusión de estilos
Anterior mente pudimos observar que la disminución del performance se ve afectado en **mobil** a diferencia de **computer**. 
Al agregar todos los estilos (**Librerías, FontsQr y mas**) sin **Bootstrap** pudimos observar que el impacto no es grande, a diferencia de **Bootstrap**. La razón de modificar los estilos llamados de bootstrap se pueden visualizar en las imágenes anteriormente mostrada, eso mejoró el performance y a su vez se tiene un mayor control de estilos en el sitio. 

**Nota:** El performance aumentaría si los estilos se trabajaran a través de JSX, styled-component o también CSS in JS.  Véase [https://nextjs.org/learn/basics/assets-metadata-css/css-styling](https://nextjs.org/learn/basics/assets-metadata-css/css-styling). NextJS los transforma mediante POSTCSS y otras tecnologias, esto se ve reflejado en el performance de la aplicación, haciéndola mas ligera y más rápida. 