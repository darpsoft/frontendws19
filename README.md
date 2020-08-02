# Descripción Pruebas

* A continuación se mostrará el performance obtenido en distintas situaciones, cabe destacar que las pruebas se hicieron a través de la página web [https://developers.google.com/speed/pagespeed/insights/]. 
* Todas las pruebas se hicieron en el servidor de Heroku
* El espacio donde se hicieron las pruebas es [https://qrcode-nextjs.herokuapp.com/]
* **Todas las pruebas realizadas en este readme poseen todas las librerías instaladas. (TODOS LOS ARCHIVOS JS)** 

###  SIN ESTILOS
URL PRUEBA: [https://qrcode-nextjs.herokuapp.com/testing/t1_wrapper]
Detalles del código, todos los estilos deshabilitado
![](https://conceptodigital.net/asdasd/performance/editor_nada_css.png)
A continuación se mostrará el performance sin estilos en la aplicación, cabe destacar que la aplicación posee todas las librerías instaladas del proyecto.

**Performance computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_sin_estilos.png)
**Nota:** En estas imagenes se pueden visualizar que el performance en computer es de 100 - 99. Esto quiere decir que la aplicación no posee ninguna carga para el performance.

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_sin_estilos.png)
**Nota:** El performance en este caso es de 92 puntos, esto se debe a que en movil algunas funcionalidades del sistema se deshabilitan por el modo "Responsive", gracias a esto [Lighthouse](https://developers.google.com/web/tools/lighthouse/). muestra el siguiente mensaje:

![](https://conceptodigital.net/asdasd/performance/ahorro_estimado.png)

A continuación se mostrará el contenido de el js [http://qrcode-nextjs.herokuapp.com/_next/static/chunks/769650a343d2ea102d2bc328cb1e3586d29b3d4e.4329d91e89f86ad9cb48.js], aquí se podrá visualizar las librerías en funcionamiento de este script.
![](https://conceptodigital.net/asdasd/performance/chunks_769650.png)
Se realizó un seguimiento exhaustivo dando como conclusión que todas las librerías llamadas en ellas son necesarias para el funcionamiento del sistema, en ella podemos ver la carga que ejerce cada librería sobre el script. Como un ejemplo en este caso es el **Toastr**, el siempre deberá estar activo para que cuando el sistema lo necesite, al igual que los **reducer** y los **sagas**, estos serán llamados cuando sea necesario. Además de otras librerías que son necesarias como el immutable. 

# Hacking Next.js for better PageSpeed scores 
Implementación de componentes custom para la mejora del performance.
[https://medium.com/medwing-engineering-product-design/hacking-next-js-for-better-pagespeed-scores-6c651d19f218] en este articulo se puede ver una forma de mejorar el performance radicalmente con algunas "Tecnicas", cabe destacar que la versión de next es 9.2.1 

Se intentó implementar estas tecnicas en el proyecto actual y no funcionó, esto se debe a que dichas tecnicas dejaron de ser funcionales cuando se implemento SSG en la versión 9.3.0 de next, véase aquí [https://nextjs.org/blog/next-9-3].

Las tecnicas antes mencionadas en resumen consiste en la administración de script generados en _document, gracias a la nueva actualización, aquellas **page** generadas por SSG no generan algunas propiedades fundamentales para la **Fragmentación / división de código**.

**Conclusión:** NextJS es una Framework que está en constante evolución, ahora mas que nunca que tiene tanto apoyo como por ejemplo de Google, su equipo se dedica a mejorar en todos los aspectos las debilidades. Actualmente se está usando NextJS 9.5 donde posee mejoras importantes, esta se ven reflejadas en el performance y por ende no hay necesidad de aplicar algunas técnicas.  Vease [https://nextjs.org/blog/next-9-5].

# Pruebas con estilos [Sin bootstrap]
A continuación se mostrará el impacto que tiene algunos estilos en el performance, en este caso **agregaremos todos los estilos de la aplicación** excepto [**bootstrap**], un vistazo al código antes de mostrar los resultados del performance
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_sin_bootstrap.png)
Aquí podemos ver que la librería bootstrap está **deshabilitada** por completo **(Solo CSS)**

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_sin_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_sin_bootstrap.png)
**Nota:** Se puede notar que el performance en móvil se ve afectado por el uso de todo los estilos, excepto **Bootstrap**. La disminución es de **7 PUNTOS**.

# Pruebas con estilos [Con bootstrap Default]
A continuación se mostrará el impacto que tiene bootstrap en el performance, en este caso **agregaremos a Bootstrap predeterminado**, un vistazo al código antes de mostrar los resultados del performance.
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_bootstrap_default.png)
**Nota:** se puede ver que la importación es de [**bootstrap.min.css**], cabe destacar que el **Bootstrap** de [**public/static/assets/scss/main.scss**] está deshabilitado.

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_con_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_con_bootstrap.png)
**Nota:** Se puede notar que el performance en móvil se ve afectado por el uso de **Bootstrap default**. La disminución es de **16 PUNTOS** ante **85 PUNTOS**. 

# Pruebas con estilos [Con bootstrap Custom]
A continuación se mostrará el impacto que tiene bootstrap en el performance, en este caso **agregaremos a Bootstrap Custom**, esto quiere decir que deshabilitamos algunos estilos que no se están usando en la aplicación. un vistazo al código antes de mostrar los resultados del performance.

**Nota:** Cabe destacar que cada estilo se deshabilito luego de hacer pruebas en el sistema. Si algún estilo deshabilitado se está usando en alguna página, no dude en habilitarlo.
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_bootstrap_mod.png)
**Nota:** se puede ver que la importación es de [**public/static/assets/scss/main.scss**], cabe destacar que el **Bootstrap** de [**_app.js**] está deshabilitado.

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_con_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_con_bootstrap_modificado.png)
**Nota:** Se puede notar que el performance en móvil mejora en comparación con **Bootstrap default**. El aumento es de **6 PUNTOS** antes **69 PUNTOS**.

## Conclusión de estilos
Anterior mente pudimos observar que la disminución del performance se ve afectado en **mobil** a diferencia de **computer**. 
Al agregar todos los estilos (**Librerías, FontsQr y mas**) sin **Bootstrap** pudimos observar que el impacto no es grande, a diferencia de **Bootstrap**. La razón de modificar los estilos llamados de bootstrap se pueden visualizar en las imágenes anteriormente mostrada, eso mejoró el performance y a su vez se tiene un mayor control de estilos en el sitio. 

**Nota:** El performance aumentaría si los estilos se trabajaran a través de JSX, styled-component o también CSS in JS.  Véase [https://nextjs.org/learn/basics/assets-metadata-css/css-styling]. NextJS los transforma mediante POSTCSS y otras tecnologias, esto se ve reflejado en el performance de la aplicación, haciéndola mas ligera y más rápida. 
