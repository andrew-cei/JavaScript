/* Clase planeta, aquí se guarda la información de cada planeta*/

class Planeta {
  constructor(nombre, descripcion, img) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.img = img;
  }
}

/* Simulación de la Base de datos, cuatro arreglos, Id, nombre, descripción e imagen de los planetas del sistema solar*/
const rango = [0, 1, 2, 3, 4, 5, 6, 7];
const nombres = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
];
const descripciones = [
  "Este es el planeta que se encuentra más cercano al Sol, lo que hace difícil observarlo, salvo dos horas después de la puesta del Sol o antes de su salida.",
  "Venus es el planeta más cercano a la Tierra, y es por eso que muchas veces lo podemos apreciar en el cielo como una estrella muy luminosa.",
  "Por fin llegamos a nuestro planeta. Sabemos muy bien cómo es por dentro, pero nunca hemos podido verlo desde el espacio con nuestros propios ojos, salvo los astronautas cuando han ido a misiones en el espacio.",
  "La imagen nos muestra una vista de la superficie de Marte, obtenida de una de las tantas expediciones a este planeta.",
  "Este es el planeta más grande del Sistema Solar. Su tamaño es aproximadamente diez veces el tamaño de nuestro planeta y cuenta con un anillo.",
  "Sin duda este es uno de los planetas más hermosos del Sistema Solar, por los enormes anillos que posee, contándose tres como los más importantes. ",
  "Fue uno de los planetas descubiertos con la ayuda de un telescopio. Se caracteriza porque su eje de rotación está sobre el plano de su órbita alrededor del Sol, lo que hace que los polos apunten sucesivamente hacia el Sol.",
  "Neptuno fue descubierto en 1846. Es uno de los planetas más grandes y se caracteriza por su intenso color azul.",
];
const imagenes = [
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1f/As08-16-2593.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/68/Schiaparelli_Hemisphere_Enhanced.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
];

/* Simulación de consulta a la Base de datos, regresa un arreglo de objetos con la información de cada planeta */
const planetas = rango.map(
  (id) => new Planeta(nombres[id], descripciones[id], imagenes[id])
);

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
  }
}

/* Función de verificación de planeta favorito, es verdadera si el planeta está en localStorage */
function planetaFavorito(nombre) {
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    if (clave === nombre && localStorage.getItem(clave) === "favorito") {
      return true;
    }
  }
  return false;
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
  if (planetaFavorito(opcion)) {
    favorito.className = "btn btn-primary";
  } else {
    favorito.className = "btn btn-secondary";
  }
  verifica(planetas, opcion, nombre, descripcion, imagen, warning);
};

/* Evento para seleccionar favorito con botón azul*/
favorito.onclick = () => {
  if (planetaFavorito(nombre.innerText.toLowerCase())) {
    localStorage.removeItem(nombre.innerText.toLowerCase());
    favorito.className = "btn btn-secondary";
  } else {
    localStorage.setItem(nombre.innerText.toLowerCase(), "favorito");
    favorito.className = "btn btn-primary";
  }
};
