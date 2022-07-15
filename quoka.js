const cl = console.log;
// Fijo, no borrar

const convertirStringToArray = (texto, caracter) => {
  if (typeof texto === "string") {
    cl(texto.split(caracter));
  } else if (!texto) {
    cl("No hay texto");
  } else {
    cl("El texto no es un string");
  }
};

convertirStringToArray("kkk");
