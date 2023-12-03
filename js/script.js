document.getElementById("btnValidar").addEventListener("click", validarCorreo);

function validarCorreo() {
  const regex = /[a-zA-Z0-9\.-_]+@[a-zA-Z0-9\.-_]+\..{1,8}/gmi;
  const correo = document.getElementById("correo").value;
  
  if (regex.test(correo)) {
    mostrarCorreoValidado(correo);
    document.getElementById("correo").value = "";
  } else {
    alert("Error: La dirección de correo no es válida.");
  }
}

function mostrarCorreoValidado(correo) {
  const listaCorreos = document.getElementById("listaCorreos");
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = correo;
  listaCorreos.appendChild(nuevoElemento);
}