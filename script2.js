const inputTarea = document.querySelector(".inputTarea");
const addTarea = document.querySelector(".addTarea");
const listaTareas = document.querySelector(".listaTareas");

let tasks = [];

addTarea.addEventListener("click", crearTarea);
inputTarea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") crearTarea();
});

function crearTarea() {
  const texto = inputTarea.value.trim();
  if (texto === "") return;

  tasks.push({ text: texto });
  inputTarea.value = "";
  renderTareas();
}

function renderTareas() {
  listaTareas.innerHTML = "";

  tasks.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.classList.add(
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
    li.setAttribute("data-index", index);
    li.textContent = tarea.text;

    const btn = document.createElement("button");
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-dashed-check">
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
    btn.classList.add(
      "text-white",
      "bg-green-500",
      "rounded-lg",

      "hover:bg-green-600",
    );
    btn.addEventListener("click", () => completarTarea(index));

    li.appendChild(btn);
    listaTareas.appendChild(li);
  });
}
function completarTarea(index) {
  Swal.fire({
    toast: true,
    position: "top",
    icon: "success",
    title: "Tarea completada",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    width: "250px",
  });

  tasks.splice(index, 1); // Eliminar tarea del array
  renderTareas(); // Volver a pintar
}
