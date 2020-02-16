
const precioBase = 250;

//La siguietne función permite motrar el campo de edad conyugue si el cotizante esta casado.
function checkvalue(val)
{
    if(val==="Casado")
       document.getElementById('edadConyuge').style.display='block';
    else
       document.getElementById('edadConyuge').style.display='none';

       if(val==="Casado")
          document.getElementById('labelEdadConyuge').style.display='block';
       else
          document.getElementById('labelEdadConyuge').style.display='none';
}

function checkvalue2(val)
{
    if(val==="Si")
       document.getElementById('labelNumeroHijos').style.display='block';
    else
       document.getElementById('labelNumeroHijos').style.display='none';

       if(val==="Si")
          document.getElementById('numeroHijos').style.display='block';
       else
          document.getElementById('numeroHijos').style.display='none';
}

//La siguiente función obtiene los datos del formulario al hacer clic en el botón cotizar.
function obtenerDatos () {
  var nombreAsegurado = document.getElementById('nombreAsegurado').value;
  var edadAsegurado = document.getElementById('edadAsegurado').value;
  var seleccionarEstadoCivil = document.getElementById("seleccionarEstadoCivil");
  var estadoCivil = seleccionarEstadoCivil.options[seleccionarEstadoCivil.selectedIndex].value;
  var edadConyuge = document.getElementById('edadConyuge').value;
  var numeroHijos = document.getElementById('numeroHijos').value;

  if (edadAsegurado >= 18 && edadAsegurado <= 21) {
    var recargoEdad = (precioBase * 0.00);
  } else if (edadAsegurado >= 21 && edadAsegurado <= 25) {
    var recargoEdad = (precioBase * 0.01);
  } else if (edadAsegurado >= 25 && edadAsegurado <= 30) {
    var recargoEdad = (precioBase * 0.02);
  }  else if (edadAsegurado >= 30 && edadAsegurado <= 40) {
      var recargoEdad = (precioBase * 0.05);
  }  else if (edadAsegurado >= 40 && edadAsegurado <= 50) {
        var recargoEdad = (precioBase * 0.08);
  }  else if (edadAsegurado >= 50 && edadAsegurado <= 65) {
            var recargoEdad = (precioBase * 0.12);

  } else {
    alert("Lo sentimos usted no es elegible para cotizar un seguro")
    window.location.reload(false);
  }

  if (edadConyuge < 30 && estadoCivil === "Casado") {
    var recargoConyuge = (precioBase * 0.01 );
  } else if (edadConyuge >= 30 && edadConyuge < 40 && estadoCivil === "Casado") {
    var recargoConyuge = (precioBase * 0.02 && estadoCivil === "Casado");
  } else if (edadConyuge  >= 40 && edadConyuge < 50 && estadoCivil === "Casado") {
    var recargoConyuge = (precioBase * 0.03);
  }  else if (edadConyuge  >= 50 && edadConyuge < 70 && estadoCivil === "Casado") {
      var recargoConyuge = (precioBase * 0.05);
  } else if (estadoCivil === "Soltero") {
    var recargoConyuge = 0;
  } else {
    alert("Lo sentimos usted no puede asegurar a un conyuge mayor de 70")
  }

  var recargoHijos = (precioBase * numeroHijos) * 0.01;

  var totalPagar = precioBase + recargoEdad + recargoHijos + recargoConyuge;

  console.log("Nombre del asegurado: " + nombreAsegurado);
  console.log("Edad del asegurado: " + edadAsegurado);
  console.log("Estado civil del asegurado: " + estadoCivil);
  console.log("Edad del conyuge: " + edadConyuge);
  console.log("Número de hijos: " + numeroHijos);
  console.log("Recargo por edad: " + recargoEdad);
  console.log("Recargo por conyuge: " + recargoConyuge);
  console.log("Recargo por número de hijos: " + recargoHijos);
  console.log("Total a pagar: " + totalPagar);

  document.getElementById('name').innerHTML = nombreAsegurado;
  document.getElementById('edad').innerHTML = edadAsegurado;
  document.getElementById('civil').innerHTML = estadoCivil;
  document.getElementById('1').innerHTML = precioBase;
  document.getElementById('2').innerHTML = recargoEdad;
  document.getElementById('3').innerHTML = recargoConyuge;
  document.getElementById('4').innerHTML = recargoHijos;
  document.getElementById('5').innerHTML = totalPagar;

}
