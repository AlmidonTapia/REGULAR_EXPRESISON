

function validarCorreoElectronico(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Ejemplo de uso:
  const email = prompt("Ingrese sus correo electronico: ");
  if (validarCorreoElectronico(email)) {
    console.log("El correo electrónico es válido");
  } else {
    console.log("El correo electrónico no es válido");
  }