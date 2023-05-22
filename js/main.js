/* Clase planeta, aquí se guarda la información de cada planeta*/

class Planeta {
  constructor(nombre, descripcion, img) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.img = img;
  }
}

/* Función de verificación */
function verifica(planetas, opcion, nombre, descripcion, imagen, warning) {
  /* Verificación de la existencia del planeta en la base de datos*/
  if (planetas.some((planeta) => planeta.nombre.toLowerCase() === opcion)) {
    planetaElegido = planetas.find(
      (planeta) => planeta.nombre.toLowerCase() === opcion
    );
    /* Presentación de la información en HTML si existe el planeta*/
    nombre.innerText = planetaElegido.nombre;
    descripcion.innerText = planetaElegido.descripcion;
    imagen.src = planetaElegido.img;
    nombre.style.display = "block";
    descripcion.style.display = "block";
    imagen.style.display = "block";
    favorito.style.display = "inline-block";
    warning.style.display = "none";
  } else {
    nombre.style.display = "none";
    descripcion.style.display = "none";
    imagen.style.display = "none";
    favorito.style.display = "none";
    warning.style.display = "inline";
    Swal.fire("¡Planeta no encontrado!");
  }
}

/* Lectura de datos y presentación de información*/
let opcion = "";
let planetaElegido = new Planeta("", "", "");
/* Elementos del DOM */
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");
const warning = document.getElementById("warning");
let boton = document.getElementById("button-addon2");
let favorito = document.getElementById("favorito");

/* Evento para mostrar planeta si se encuentra en la Base de Datos*/
boton.onclick = () => {
  opcion = texto.value.toLowerCase();
  if (localStorage.getItem(opcion) != null) {
    favorito.className = "btn btn-primary";
  } else {
    favorito.className = "btn btn-secondary";
  }
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      /* Lectura de la base de datos y creación del arreglo de planetas*/
      const planetas = data.map(
        (item) => new Planeta(item.nombre, item.descripcion, item.imagen)
      );
      /* Verificación de la existencia del planeta en la DB */
      verifica(planetas, opcion, nombre, descripcion, imagen, warning);
    });
};

/* Evento para seleccionar favorito con botón azul*/
favorito.onclick = () => {
  if (localStorage.getItem(nombre.innerText.toLowerCase()) != null) {
    localStorage.removeItem(nombre.innerText.toLowerCase());
    favorito.className = "btn btn-secondary";
  } else {
    localStorage.setItem(nombre.innerText.toLowerCase(), "favorito");
    favorito.className = "btn btn-primary";
  }
};
