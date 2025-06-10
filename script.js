const inputTarea = document.querySelector(".inputTarea");
const addTarea = document.querySelector(".addTarea");
const listaTareas = document.querySelector(".listaTareas");

addTarea.addEventListener("click", () => {
  let valorInput = inputTarea.value;
  let nuevoLi = document.createElement("li");
  nuevoLi.classList.add(
    "text-white",
    "pl-4",
    "pt-2",
    "pb-2",
    "border-2",
    "border-solid",
    "rounded-lg",
  );
  nuevoLi.textContent = valorInput;
  listaTareas.appendChild(nuevoLi);
  // inputTarea.value = ""; // Limpiar el input después de agregar la tarea
});
