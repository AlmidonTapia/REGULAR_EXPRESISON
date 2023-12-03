document.getElementById("btnValidar").addEventListener("click",validarcorreo);

function validarCorreo(){
    const regex =   /[a-zA-z0-9\.-_]+@[a-zA-z0-9\.-_]+\..{1,8}/gmi;
    const correo  =  document.getElementById("correo").value;
    const ArrayCorreos = [];
    if(regex.test(correo)){
    ArrayCorreos.push(str);
    console.log("los correos que fueron validos son: ");
    console.log(ArrayCorreos);
    mostrarCorreoValidado(correo);
    document.getElementById("correo").value = "";
    } else {
        alert("Error: la direccion de correo no es valida.");
    }
}
function mostrarCorreoValidado(correo){
    const listaCorreos = document.getElementById("listaCorreos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = correo;
    listaCorreos.appendChild(nuevoElemento);
}
