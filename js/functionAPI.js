$(document).ready(function () {
animar()
});

//Declaro variable global
let datos

$(document).ready(function () {
  $.ajax({
    url: 'https://randomuser.me/api/?nat=es&exc=login,registered,dob',
    dataType: 'json',
    success: function (data) {
      datos = data;
      cargaDatosRandom()
    },
    error: function () {
      window.alert("Hubo un error al cargar los datos. Asegurese de que la url funcione correctamente y vuelva a abrir la pagina.");
    }
  }

  );
});

function cargaDatosRandom() {
  document.getElementById("Name").innerHTML = datos.results[0].name.title + " " + datos.results[0].name.first + " " + datos.results[0].name.last;
  document.getElementById("Picture").src = datos.results[0].picture.large;
  document.getElementById("Email").innerHTML = datos.results[0].email;
  document.getElementById("Phone").innerHTML = datos.results[0].phone;
  document.getElementById("Country").innerHTML = datos.results[0].location.country;
  document.getElementById("Zone").innerHTML = datos.results[0].location.city + " - " + datos.results[0].location.state;
}

function Competencias_click() {
  desplegar();
}

function desplegar() {
  if (document.getElementById("Competencias").style.display == "block") {
    document.getElementById("Competencias").style.display = "none";
  }
  else {
    document.getElementById("Competencias").style.display = "block";

  }

}

function animar() {
  document.getElementById("barraHTML").classList.toggle("finalHTML");
  document.getElementById("barraCSS").classList.toggle("finalCSS");
  document.getElementById("barraJS").classList.toggle("finalJS");
  document.getElementById("barraNET").classList.toggle("finalNET");


}


