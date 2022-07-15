const cl = console.log;
// Fijo, no borrar

const convertirStringToArray = (texto, caracter) =>
  cl(texto.split(caracter));

convertirStringToArray("hola que tal", " ");
