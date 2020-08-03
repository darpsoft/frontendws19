# ESTUDIO DEL LA PÁGINA /HOME
## Cosas a tener en cuenta
* Las pruebas se estarán haciendo en el servidor de **Heroku**
* Todas las pruebas se hicieron con todas las librerías instaladas del sistema
* Todas las pruebas poseen todos los estilos habilitados, tanto de las librerías como de los componentes, (**Se está usando el Bootstrap custom**)
* El performance promedio de la página **/home** es de 
	* Antes
		* **[57] PUNTOS COMPUTER**
		* **[16] PUNTOS MOBIL**
	* Ahora
		* **[86] PUNTOS COMPUTER**
		* **[56] PUNTOS MOBIL**
* La suma de todas las pruebas no dará como resultado el performance antes mencionado, recuerden que el performance varía según la información que se muestra al usuario, puede que algunos ejemplos den mejor performance por el simple hecho de renderizar la información de otro forma.

## PRUEBA #1 
### COMPONENTES HABILITADOS:
* ``

### COMPONENTES DESHABILITADOS: 
* `<Sqeleton />`
* `<WrapperApp />`
* `<VisualCodeMainInfo />`
* `<LogoCode />`
* `<Information />`

### RESULTADO PRUEBA PERFORMANCE:
* **[95] PUNTOS COMPUTER** 
* **[78] PUNTOS MOBILE** 

### Preguntas y respuestas
* **¿Porqué tiene esa puntuación si no posee ningún componente?**
	* Esto se debe a que el Lighthouse evalúa según el contenido renderizado, en este caso solo se está mostrando en contenido de `/home`, recuerden que estamos **deshabilitando** componentes, aún queda el contenedor que envuelve dichos componentes, este contenedor posee letras, y estilos  que envuelven a los **componentes**, ellos aún se ven reflejados a la hora de cargar. 

### IMPORTANTE: SE HIZO PRUEBAS SIN NINGÚN CONTENIDO Y DIO EL SIGUIENTE RESULTADO
* **[99-98] PUNTOS COMPUTER**
* **[78] PUNTOS MOBILE**

## PRUEBA #2 
### COMPONENTES HABILITADOS:
* `<Sqeleton />`

### COMPONENTES DESHABILITADOS: 
* `<WrapperApp />`
* `<VisualCodeMainInfo />`
* `<LogoCode />`
* `<Information />`

### RESULTADO PRUEBA PERFORMANCE:
* **[93] PUNTOS COMPUTER** 
* **[65] PUNTOS MOBILE** 

### Preguntas y respuestas
* **¿Porqué tiene esa puntuación si no posee ningún componente?**
	* Esto se debe a que el contenedor se está llamando desde `/home`, este contenedor no posee SSR habilitado (**Se compila del lado del cliente**) y se muestra un sqeleton como loading para luego renderizar el contenido. Este sqeleton disminuye el performance (**Solo si no hay contenido que mostrar**), en este caso quitamos todo el contenido del Sqeleton y por ello sucede este "efecto". 

**Nota:** Este disminución del "Performance" solo es de Lighthouse. Esto se debe a que ellos analizan ciertas condiciones para de la vista y luego dan un resultado. En conclusión; no afecta al performance en realidad. Vease [[https://web.dev/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=unknown](https://web.dev/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=unknown)]

## PRUEBA #3 
### COMPONENTES HABILITADOS:
* `<Sqeleton />`
* `<WrapperApp />`

### COMPONENTES DESHABILITADOS: 
* `<VisualCodeMainInfo />`
* `<LogoCode />`
* `<Information />`

### RESULTADO PRUEBA PERFORMANCE:
* **[93] PUNTOS COMPUTER** 
* **[56] PUNTOS MOBILE** 

### Preguntas y respuestas
* **¿Porqué baja tanto en Mobile?**
	* Esto se debe al que wrapper es dinámico, está en costante cambio según la página que visitemos, por ejemplo: Cuando visitamos blog el se deshabilita por completo exceptuando algunos componentes, unos de estos componente es una CINTA que aparece solo en mobile, para ser mas exacto es el componente `<SmartBanner/>`, a la hora de renderizar se crea un rectangulo en la parte superior de la pantalla, este afecta en el performance. 
* **¿Como se puede solucionar?**
	* Mi recomendación es dividir el Wrapper en 2, uno para Blog y otro para las demás páginas, ademas se puede mejorar la forma de presentar la información en el header.
	* Se debería de cambiar algunas librerías que afectan el performance o cambiar la forma de mostrar dicha información.  

## PRUEBA #4
### COMPONENTES HABILITADOS:
* `<Sqeleton />`
* `<WrapperApp />`
* `<VisualCodeMainInfo />`

### COMPONENTES DESHABILITADOS: 
* `<LogoCode />`
* `<Information />`

### RESULTADO PRUEBA PERFORMANCE:
* **[90] PUNTOS COMPUTER** 
* **[58] PUNTOS MOBILE** 

### Preguntas y respuestas
* **¿Se puede mejorar el performance en móbil?**
	* En realidad este componente está bien optimizado, el como está estructurado es muy bueno, pero como se puede mejorar? En este caso el componente trabaja con muchos iconos y librerías, estas librerías y iconos en mobile bajan un poco el performance. Se tendría que hacer un estudio de como presentar la información correctamente en "**Mobile**" ya que en "**Computer**" no hay gran impacto.

## PRUEBA #5
### COMPONENTES HABILITADOS:
* `<Sqeleton />`
* `<WrapperApp />`
* `<Information />`

### COMPONENTES DESHABILITADOS: 
* `<VisualCodeMainInfo />`
* `<LogoCode />`

### RESULTADO PRUEBA PERFORMANCE:
* **[83] PUNTOS COMPUTER** 
* **[50] PUNTOS MOBILE** 

### Preguntas y respuestas
* **¿Porqué baja tanto en Mobile?**
	* Esto se debe a como se muestra la información, en el componente existe básicamente un ARRAY que contiene toda la información (Imagenes, texto, hipervínculos) que este se despliega para poder mostrar la información, en mobile existen varias cosas a evaluar y en ellas está a como se presenta la información en mobile, debido a que es mucha puede que cree alguna ineficiencia.
* **¿Como se puede solucionar?**
	* Se puede mejorar mostrando información según el usuario baje, se puede diseñar un algoritmo que detecte el scroll y así ir mostrando información. También abría que evaluar los estilos que se están utilizando al presentar la información.

## PRUEBA #6
### COMPONENTES HABILITADOS:
* `<Sqeleton />`
* `<WrapperApp />`
* `<LogoCode />`

### COMPONENTES DESHABILITADOS: 
* `<VisualCodeMainInfo />`
* `<Information />`

### RESULTADO PRUEBA PERFORMANCE:
* **[77] PUNTOS COMPUTER** 
* **[51] PUNTOS MOBILE** 

### Preguntas y respuestas
* **¿Porqué baja tanto el Performance?**
	* Esto se debe a que este componente es complejo a nivel interno, trabaja con muchos algoritmos y por ende tiene un mayor coste de consumo. Mediante pasa el tiempo de renderizado estos se ejecutan y cambia la interfaz dependiendo de las acciones que se ejecutan. Además que está conectado a otros sub componentes para su funcionamiento.
* **¿Que se puede hacer para mejorar?**
	* En este caso sería algo complejo, ya que se debe hacer un estudio sobre todo lo que se está realizando dentro de el, la forma de mostrar la información ya está bien trabajada, esto quiere decir que sería mejorar es en como se presentaría la información al usuario.

# Conclusiones
Según estudios realizados, se llegó a la conclusión de que el performance se ve afectado mas que todo por librerías desactualizadas. El sistema está bien estructurado y las mayorías de los componentes están bien optimizados y estructurados. 

### Librerías desactualizdas. 
Un ejemplo de esto es la librería **`react-bootstrap-table`** este no se actualiza desde el año 2017. Existen otras librerías que se pueden reemplazar y así obtener mejor performance.

### Librerías incompatibles
Debido a que la tecnología que se está utilizando es nueva, hay algunas librerías que dejarán de ser compatibles, esto se debe a que estamos utilizando SSR. actualizando las librerías necesarias se puede obtener un performance y un rendimiento increíble. 

**Nota:** Nosotros analizamos cada dependencia instalada y por esto llegamos a esta conclusión, en algunos casos nos vimos obligado a cambiar de librería debido a la incompatibilidad con NEXT y REACT.
  

# IMFORME 1 ----------------------

# WHAT AFFECTS PERFORMANCE ON MOBILE?

* The performance obtained in different situations will be shown below, it should be noted that the tests were carried out through the website
[https://developers.google.com/speed/pagespeed/insights/].
* All tests were done on Heroku server
* The space where the tests were made is [https://qrcode-nextjs.herokuapp.com/]


# JAVASCRIPT ANALYSIS

Next, we will explain why the JS **chunks files generated by default by NEXTJS** are necessary.
![](https://conceptodigital.net/asdasd/performance/ahorro_estimado.png)


In the image that was shown, we can see that the file [[… Chunks / 769650a… .969962c… .js](http://qrcode-nextjs.herokuapp.com/_next/static/chunks/769650a343d2ea102d2bc328cb1e3586d29b3d4e.4329d91e89f86ad9cb48.js)] of 108.4 KB, it is being used by 50%.


Here you can see the working libraries of this script.
[](https://conceptodigital.net/asdasd/performance/chunks_769650.png)
An exhaustive follow-up was carried out, concluding that all the libraries called in them are necessary for the operation of the system, in it we can see the load that each library exerts on the script. As an example in this case is the **Toastr**, it should always be active so that when the system needs it, like the **reducer** and the **sagas**, these will be called when necessary . In addition to other libraries that are necessary as the immutable.


# Hacking Next.js for better PageSpeed scores
Implementation of custom components to improve performance.
[https://medium.com/medwing-engineering-product-design/hacking-next-js-for-better-pagespeed-scores-6c651d19f218] In this article you can see a way to improve performance radically with some "Techniques", it should be noted that the next version is 9.2.1

We tried to implement these techniques in the current project and it did not work, this is because these techniques stopped being functional when SSG was implemented in version 9.3.0 of next, see here [https://nextjs.org/blog/next-9-3].

The techniques mentioned above in summary consist of script management generated in _document, thanks to the new update, those **page** generated by SSG do not generate some fundamental properties for **Code fragmentation / splitting**.

**Conclusion:** NextJS is a Framework that is constantly evolving, now more than ever that has so much support, for example from Google, its team is dedicated to improving weaknesses in all aspects. Currently NextJS 9.5 is being used where it has important improvements, this is reflected in performance and therefore there is no need to apply some techniques. See [https://nextjs.org/blog/next-9-5].

# CSS ANALYSIS

### All tests carried out in this readme have all the libraries installed. (ALL JS FILES)

## TESTING WITHOUT STYLES
TEST URL:  [https://qrcode-nextjs.herokuapp.com/testing/t1_wrapper]
Code details, all styles disabled
![](https://conceptodigital.net/asdasd/performance/editor_nada_css.png)
The performance without styles of the application will be shown below.

**Performance computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_sin_estilos.png)
**Note:** In these images you can see that the computer performance is 100 - 99. This means that the js files do not affect performance at all.

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_sin_estilos.png)
**Note:** The performance in this case is 92 points, this is because some mobile system features are disabled by "Responsive" mode.

## Testing with styles [No bootstrap]
The impact of some styles on performance will be shown below, in this case **we will add all application styles** except [**bootstrap**], a look at the code before showing the performance results
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_sin_bootstrap.png)
Here we can see that the bootstrap library is **disabled** completely **(CSS only)**

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_sin_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_sin_bootstrap.png)
**Note:** You can notice that mobile performance is affected by the use of all styles, except **Bootstrap**. The decrease is **7 POINTS**.

**Conclusion:** The styles of the components and the libraries have little effect on performance.

## Testing with styles [With bootstrap Default]
Below is the impact bootstrap has on performance, in this case **we will add default Bootstrap**, a look at the code before displaying performance results.
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_bootstrap_default.png)
**Note:** you can see that the import is from [**bootstrap.min.css**], that is, the global one. The **Bootstrap** of [**public/static/assets/scss/main.scss**] was disabled since in this case it would not be necessary (It would be duplicating).

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_con_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_con_bootstrap.png)
**Note:** It can be noted that mobile performance is affected by the use of **Bootstrap default**. The decrease is **16 POINTS** (Before **85 POINTS**).

## Testing with styles [With bootstrap Custom]
Below is the impact that **bootstrap custom** has on performance, this means that we disable some styles that are not being used in the application. a look at the code before displaying the performance results.

**Note:** It should be noted that each style was disabled after **TESTING ON THE SYSTEM**. If any disabled style is being used on any page, feel free to enable it.
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_bootstrap_mod.png)
**Note:** you can see that the import is from [**public/static/assets/scss/main.scss **], it should be noted that the **bootstrap.min.css** (Default) of [**app.js**] is disabled.

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_con_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_con_bootstrap_modificado.png)

**Note:** You can see that the performance on mobile improves compared to **Bootstrap default**. The increase is **6 POINTS** (Before **69 POINTS**).

## Conclusion of styles
Previously we could see that the decrease in performance is affected in **mobile** unlike **computer**.
By adding all the styles (**Libraries, FontsQr and more**) without **Bootstrap** we could see that the impact is not great, unlike **Bootstrap**. The reason for modifying the so-called bootstrap styles can be visualized in the images previously shown, that improved performance and in turn there is greater control of styles on the site.

**Note:** The performance would increase if the styles were worked through JSX, styled-component or also CSS-in-JS. See [https://nextjs.org/learn/basics/assets-metadata-css/css-styling]. NextJS transforms them using POSTCSS and other technologies, this is reflected in the performance of the application, making it lighter and faster.


# ESPAÑOL --------------------------------------------------------------------------

# ¿QUÉ AFECTA AL PERFORMANCE EN MOVIL?

* A continuación se mostrará el performance obtenido en distintas situaciones, cabe destacar que las pruebas se hicieron a través de la página web [https://developers.google.com/speed/pagespeed/insights/]. 
* Todas las pruebas se hicieron en el servidor de Heroku
* El espacio donde se hicieron las pruebas es [https://qrcode-nextjs.herokuapp.com/]

# ANALISIS JAVASCRIPT 

A continuación, se explicará el porqué es necesario los archivos JS **chunks generados predeterminadamente por NEXTJS**
![](https://conceptodigital.net/asdasd/performance/ahorro_estimado.png)

En la imagen que se mostró, podemos visualizar que el archivo [[… Chunks / 769650a… .969962c… .js](http://qrcode-nextjs.herokuapp.com/_next/static/chunks/769650a343d2ea102d2bc328cb1e3586d29b3d4e.4329d91e89f86ad9cb48.js)] de 108.4 KB, se está utilizando en un 50%. 

Aquí se podrá visualizar las librerías en funcionamiento de este script.
![](https://conceptodigital.net/asdasd/performance/chunks_769650.png)
Se realizó un seguimiento exhaustivo dando como conclusión que todas las librerías llamadas en ellas son necesarias para el funcionamiento del sistema, en ella podemos ver la carga que ejerce cada librería sobre el script. Como un ejemplo en este caso es el **Toastr**, el siempre deberá estar activo para que cuando el sistema lo necesite, al igual que los **reducer** y los **sagas**, estos serán llamados cuando sea necesario. Además de otras librerías que son necesarias como el immutable. 


# Hacking Next.js for better PageSpeed scores 
Implementación de componentes custom para la mejora del performance.
[https://medium.com/medwing-engineering-product-design/hacking-next-js-for-better-pagespeed-scores-6c651d19f218] en este articulo se puede ver una forma de mejorar el performance radicalmente con algunas "Tecnicas", cabe destacar que la versión de next es 9.2.1 

Se intentó implementar estas tecnicas en el proyecto actual y no funcionó, esto se debe a que dichas tecnicas dejaron de ser funcionales cuando se implemento SSG en la versión 9.3.0 de next, véase aquí [https://nextjs.org/blog/next-9-3].

Las tecnicas antes mencionadas en resumen consiste en la administración de script generados en _document, gracias a la nueva actualización, aquellas **page** generadas por SSG no generan algunas propiedades fundamentales para la **Fragmentación / división de código**.

**Conclusión:** NextJS es una Framework que está en constante evolución, ahora mas que nunca que tiene tanto apoyo como por ejemplo de Google, su equipo se dedica a mejorar en todos los aspectos las debilidades. Actualmente se está usando NextJS 9.5 donde posee mejoras importantes, esta se ven reflejadas en el performance y por ende no hay necesidad de aplicar algunas técnicas.  Vease [https://nextjs.org/blog/next-9-5].


# ANALISIS CSS

### Todas las pruebas realizadas en adelante en este readme poseen todas las librerías instaladas. (TODOS LOS ARCHIVOS JS)

## TESTING SIN ESTILOS
URL PRUEBA: [https://qrcode-nextjs.herokuapp.com/testing/t1_wrapper]
Detalles del código, todos los estilos deshabilitado
![](https://conceptodigital.net/asdasd/performance/editor_nada_css.png)
A continuación se mostrará el performance sin estilos de la aplicación.

**Performance computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_sin_estilos.png)
**Nota:** En estas imagenes se pueden visualizar que el performance en computer es de 100 - 99. Esto quiere decir que los archivos js no afectan para nada en el performance.

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_sin_estilos.png)
**Nota:** El performance en este caso es de 92 puntos, esto se debe a que en movil algunas funcionalidades del sistema se deshabilitan por el modo "Responsive".


## Pruebas con estilos [Sin bootstrap]
A continuación se mostrará el impacto que tiene algunos estilos en el performance, en este caso **agregaremos todos los estilos de la aplicación** excepto [**bootstrap**], un vistazo al código antes de mostrar los resultados del performance
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_sin_bootstrap.png)
Aquí podemos ver que la librería bootstrap está **deshabilitada** por completo **(Solo CSS)**

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_sin_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_sin_bootstrap.png)
**Nota:** Se puede notar que el performance en móvil se ve afectado por el uso de todo los estilos, excepto **Bootstrap**. La disminución es de **7 PUNTOS**. 

**Conclusión:** Los estilos de los componentes y de las librerías afectan muy poco al performance.

## Pruebas con estilos [Con bootstrap Default]
A continuación se mostrará el impacto que tiene bootstrap en el performance, en este caso **agregaremos a Bootstrap predeterminado**, un vistazo al código antes de mostrar los resultados del performance.
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_bootstrap_default.png)
**Nota:** se puede ver que la importación es de [**bootstrap.min.css**], es decir el global. Se deshabilitó el **Bootstrap** de [**public/static/assets/scss/main.scss**] ya que en este caso no sería necesario (Se estaría duplicando). 

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_con_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_con_bootstrap.png)
**Nota:** Se puede notar que el performance en móvil se ve afectado por el uso de **Bootstrap default**. La disminución es de **16 PUNTOS** (Antes **85 PUNTOS**). 

## Pruebas con estilos [Con bootstrap Custom]
A continuación se mostrará el impacto que tiene **bootstrap custom** en el performance, esto quiere decir que deshabilitamos algunos estilos que no se están usando en la aplicación. un vistazo al código antes de mostrar los resultados del performance.

**Nota:** Cabe destacar que cada estilo se deshabilito luego de **HACER PRUEBAS EN EL SISTEMA**. Si algún estilo deshabilitado se está usando en alguna página, no dude en habilitarlo.
![](https://conceptodigital.net/asdasd/performance/editor_todo_css_bootstrap_mod.png)
**Nota:** se puede ver que la importación es de [**public/static/assets/scss/main.scss**], cabe destacar que el **bootstrap.min.css** (Default) de [**_app.js**] está deshabilitado.

**Performance Computer**
![](https://conceptodigital.net/asdasd/performance/performance_computer_con_bootstrap.png)

**Performance Mobile**
![](https://conceptodigital.net/asdasd/performance/performance_mobile_con_bootstrap_modificado.png)
**Nota:** Se puede notar que el performance en móvil mejora en comparación con **Bootstrap default**. El aumento es de **6 PUNTOS** (Antes **69 PUNTOS**).

## Conclusión de estilos
Anterior mente pudimos observar que la disminución del performance se ve afectado en **mobil** a diferencia de **computer**. 
Al agregar todos los estilos (**Librerías, FontsQr y mas**) sin **Bootstrap** pudimos observar que el impacto no es grande, a diferencia de **Bootstrap**. La razón de modificar los estilos llamados de bootstrap se pueden visualizar en las imágenes anteriormente mostrada, eso mejoró el performance y a su vez se tiene un mayor control de estilos en el sitio. 

**Nota:** El performance aumentaría si los estilos se trabajaran a través de JSX, styled-component o también CSS-in-JS.  Véase [https://nextjs.org/learn/basics/assets-metadata-css/css-styling]. NextJS los transforma mediante POSTCSS y otras tecnologias, esto se ve reflejado en el performance de la aplicación, haciéndola mas ligera y más rápida. 
