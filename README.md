# cotizador
Para solucionar el problema del cotizador se utilizó la siguiente metodología.
1. Se determinaron 4 variables principales: recargos por edad (recargoEdad), recargos por edad del conyuge (recargosConyuge), regargos por hijos mejores de 21 años (recargosHijos) y totalPagar (suma de precio base más todos los recargos calculados).
2. Se analizó la lógica para para variable y sus restricciones, considerando que era necesario validar si la persona era soltera o no para el calculo del recargo por conyuge, para los casos en los que no aplicará se enviá un valor 0 para no afectar el resultado.
3. Se investigó como calcular la edad calculando la fecha actual con la fecha de nacimiento, pero la solución a este problema requiere el manejo conceptual de objetos de tiempo que aun no se dominan por lo que se opto a la solución de ingreso de edad directa.
4. En resumen podría decir que este proyecto me ayudó a entender la relación de JavaScript con HTML y como este puede obtener información del DOM y modificarlo.

## Adicionales

1. Para obtener los datos del formulario se encontró que se pueden guardar datos en variables haciendo referencias al DOM de Html, fue una tarea ardua ya que para cada tipo de entrada de formulario existen formas para llamar a ese resultado, por lo que no se implementaron opciones tipo radio. Para enviar los datos del formulario tambien fue necesario añadir un botón, esta tarea tambien llevó un tiempo considerable de investigación hasta dar con el concepto de "función" la cual se podia llamar desde un evento onclick del botón, la función de captura de datos llena las variables requeridas.
2. Tambien se encontró que existen ciertas llamadas a acciones que ocurren en el documento y así condicionar el formulario a mostrar elementos de acuerdo a ciertas elecciones.
3. Para mejorar la apariencia se opto por llamar a Bootstrap por medio del CDN, así como fontawesome para utilizar iconos.
4. Para generar un pdf imprimible se utilizó la libreria jsPDF, encontrando dificultad para imprimir los valores de las variables, por lo que se opto por imprimir los valores desde HTML. Una excelente herramienta que da lugar a revisar más a fondo su funcionamiento.

En conclusión el proyecto es mejorable en muchos aspectos, pero considero que es un buen punto de partida para entender el funcionamiento de algunos elementos de la programación, aunque se requieren más bases para el buen manejo de funciones y objetos. Así como formas de hacer pruebas de funcionamiento del programa.
