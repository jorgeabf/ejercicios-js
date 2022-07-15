const container = document.querySelector(".container");

cambiarEstadoBoton = (e) => {
  e.stopPropagation();
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
  console.log(`Texto Botón: ${target.textContent}`);
  console.log(`Clase Botón: ${target.className}`);
};

container.addEventListener("click", cambiarEstadoBoton);

/* ☀️ */

const darkMode = () => {
  const botonDarkMode = document.querySelector(
    ".boton-dark-mode"
  );
  const body = document.querySelector("body");
  const lista = document.querySelectorAll(".lista__item");
  botonDarkMode.addEventListener("click", () => {
    botonDarkMode.textContent === "☀️"
      ? (botonDarkMode.textContent = "🌙")
      : (botonDarkMode.textContent = "☀️");
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    lista.forEach((item) => {
      item.classList.toggle("dark-mode");
    });
  });
};

darkMode();
