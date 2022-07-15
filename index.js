const container = document.querySelector(".container");

cambiarEstadoBoton = (e) => {
  e.stopPropagation();

  if (e.target.textContent === "OK") {
    e.target.textContent = "NO";
    e.target.classList.remove("ok");
    e.target.classList.add("no");
  } else if (e.target.textContent === "NO") {
    e.target.textContent = "OK";
    e.target.classList.remove("no");
    e.target.classList.add("ok");
  }
};

container.addEventListener("click", cambiarEstadoBoton);
