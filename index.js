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
  console.log(
    `Texto Botón: ${target.textContent} |`,
    ` Clase Botón: ${target.className}`
  );
};

container.addEventListener("click", cambiarEstadoBoton);
