const inputTarea = document.querySelector(".inputTarea");
const addTarea = document.querySelector(".addTarea");
const listaTareas = document.querySelector(".listaTareas");
let tarea = 0;

function crearTarea() {
  if (inputTarea.value.trim() === "") return;

  let valorInput = inputTarea.value.trim();

  const idTarea = tarea; // guarda el valor actual antes de incrementar
  let nuevoLi = document.createElement("li");
  nuevoLi.classList.add(
    "text-white",
    "pl-4",
    "pt-2",
    "pb-2",
    "border-2",
    "border-solid",
    "rounded-lg",
    "mr-2",
    "w-full",
    "flex",
    "justify-between",
  );
  nuevoLi.setAttribute("id", `tarea-${idTarea}`);

  nuevoLi.textContent = valorInput;
  listaTareas.appendChild(nuevoLi);
  // inputTarea.value = ""; // Limpiar el input después de agregar la tarea
  let checkButton = document.createElement("button");
  checkButton.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
    <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
    <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
    <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
    <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
    <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
    <path d="M9 12l2 2l4 -4" />
  </svg>
`;
  checkButton.classList.add(
    "text-white",
    "bg-green-500",
    "rounded-lg",

    "hover:bg-green-600",
  );
  nuevoLi.appendChild(checkButton);
  checkButton.setAttribute("id", `button-${idTarea}`);

  checkButton.addEventListener("click", () => tareaCompletada(idTarea));
  tarea++;
}

function tareaCompletada(id) {
  const tareaLi = document.querySelector(`#tarea-${id}`);
  const tareaButton = document.querySelector(`#button-${id}`);

  Swal.fire({
    toast: true, // Activa modo notificación
    position: "top", // O 'top-end' para esquina superior derecha
    icon: "success",
    title: "Tarea completada",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    width: "250px", // Ajustás el tamaño aquí
  });

  // Eliminar la tarea del DOM
  if (tareaLi) {
    tareaLi.remove();
  }
}

addTarea.addEventListener("click", crearTarea);

inputTarea.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    crearTarea();
    inputTarea.value = ""; // Limpiar el input después de agregar la tarea
  }
});
