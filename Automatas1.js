function validarCorreo(){
    const regex = /[a-zA-Z0-9\.-_]+@[a-zA-Z0-9\.-_]+\..{1,8}/gmi;
    const ArrayCorreos =[];
    
    while(true){
    const str = prompt("Ingrese una direccion de correo", regex);
    if(regex.test(str)){
        ArrayCorreos.push(str);
    }else{
        alert("Error la direccion: " + str + " no es valida");
    }
    const continuar = confirm("Desea ingresar otro correo?");
    if(!continuar){
        console.log("los correos que fueron validos son: ");
        console.log(ArrayCorreos);
        break;
    }
    }
}
validarCorreo();