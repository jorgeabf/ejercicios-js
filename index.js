const container = document.querySelector(".container");

cambiarEstadoBoton = (e) => {
  const target = e.target;

  if (target.textContent === "OK") {
    target.textContent = "NO";
    target.classList.remove("ok");
    target.classList.add("no");
  } else if (target.textContent === "NO") {
    target.textContent = "OK";
    target.classList.remove("no");
    target.classList.add("ok");
  }
};

container.addEventListener("click", cambiarEstadoBoton);

/* ☀️ */

const darkMode = () => {
  const botonDarkMode = document.querySelector(
    ".boton-dark-mode"
  );
  const listaDataDarkMode =
    document.querySelectorAll("[data-dark]");
  botonDarkMode.addEventListener("click", () => {
    botonDarkMode.textContent === "☀️"
      ? (botonDarkMode.textContent = "🌙")
      : (botonDarkMode.textContent = "☀️");

    listaDataDarkMode.forEach((element) => {
      element.classList.toggle("dark-mode");
    });
  });
};

darkMode();
