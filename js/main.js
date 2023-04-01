/* Base de datos, incluye la descripción de los planetas del sistema solar*/
let db = [
  {
    nombre: "Mercurio",
    descripcion:
      "Este es el planeta que se encuentra más cercano al Sol, lo que hace difícil observarlo, salvo dos horas después de la puesta del Sol o antes de su salida.",
  },
  {
    nombre: "Venus",
    descripcion:
      "Venus es el planeta más cercano a la Tierra, y es por eso que muchas veces lo podemos apreciar en el cielo como una estrella muy luminosa.",
  },
  {
    nombre: "La Tierra",
    descripcion:
      "Por fin llegamos a nuestro planeta. Sabemos muy bien cómo es por dentro, pero nunca hemos podido verlo desde el espacio con nuestros propios ojos, salvo los astronautas cuando han ido a misiones en el espacio.",
  },
  {
    nombre: "Marte",
    descripcion:
      "La imagen nos muestra una vista de la superficie de Marte, obtenida de una de las tantas expediciones a este planeta.",
  },
  {
    nombre: "Júpiter",
    descripcion:
      "Este es el planeta más grande del Sistema Solar. Su tamaño es aproximadamente diez veces el tamaño de nuestro planeta y cuenta con un anillo.",
  },
  {
    nombre: "Saturno",
    descripcion:
      "Sin duda este es uno de los planetas más hermosos del Sistema Solar, por los enormes anillos que posee, contándose tres como los más importantes. ",
  },
  {
    nombre: "Urano",
    descripcion:
      "Fue uno de los planetas descubiertos con la ayuda de un telescopio. Se caracteriza porque su eje de rotación está sobre el plano de su órbita alrededor del Sol, lo que hace que los polos apunten sucesivamente hacia el Sol.",
  },
  {
    nombre: "Neptuno",
    descripcion:
      "Neptuno fue descubierto en 1846. Es uno de los planetas más grandes y se caracteriza por su intenso color azul.",
  },
];

/* Lectura de datos y presentación de información*/
let opcion = "";

do {
  opcion = prompt("Elige un planeta del sistema solar");
  switch (opcion) {
    case "Mercurio":
      alert(db[0].descripcion);
      break;
    case "Venus":
      alert(db[1].descripcion);
      break;
    case "Tierra":
      alert(db[2].descripcion);
      break;
    case "Marte":
      alert(db[3].descripcion);
      break;
    case "Júpiter":
      alert(db[4].descripcion);
      break;
    case "Saturno":
      alert(db[5].descripcion);
      break;
    case "Urano":
      alert(db[6].descripcion);
      break;
    case "Neptuno":
      alert(db[7].descripcion);
      break;
    default:
      alert("La opción que elegiste no está disponible");
      break;
  }
  opcion = prompt("¿Quieres realizar otra consulta? Si/No");
  opcion = opcion.toLowerCase();
} while (opcion == "si");
