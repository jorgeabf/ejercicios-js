const d = document;
const container = d.querySelector(".container");

cambiarEstadoBoton = (e) => {
  let target = e.target;

  var ejercicioNoResuelto = () => {
    target.textContent = "NO";
    target.classList.remove("ok");
    target.classList.add("no");
  };
  const ejercicioResuelto = () => {
    target.textContent = "OK";
    target.classList.remove("no");
    target.classList.add("ok");
  };

  if (target.textContent === "OK") {
    ejercicioNoResuelto();
  } else if (target.textContent === "NO") {
    ejercicioResuelto();
  }
};

container.addEventListener("click", cambiarEstadoBoton);

/* DARK MODE */
const ls = localStorage;
const botonDarkMode = d.querySelector(".boton-dark-mode");
const listaDataDarkMode = d.querySelectorAll("[data-dark]");
let sol = "☀️";
let luna = "🌙";

const lightMode = () => {
  listaDataDarkMode.forEach((element) => {
    element.classList.remove("dark-mode");
    botonDarkMode.textContent = luna;
    ls.setItem("theme", "light");
  });
};

const darkMode = () => {
  listaDataDarkMode.forEach((element) => {
    element.classList.add("dark-mode");
    botonDarkMode.textContent = sol;
    ls.setItem("theme", "dark");
  });
};

const toggleDarkMode = () => {
  botonDarkMode.addEventListener("click", () => {
    botonDarkMode.textContent === luna ? darkMode() : lightMode();
  });
};

toggleDarkMode();

document.addEventListener("DOMContentLoaded", () => {
  if (ls.getItem("theme") === null) ls.setItem("theme", "light");
  if (ls.getItem("theme") === "light") lightMode();
  if (ls.getItem("theme") === "dark") darkMode();
});
