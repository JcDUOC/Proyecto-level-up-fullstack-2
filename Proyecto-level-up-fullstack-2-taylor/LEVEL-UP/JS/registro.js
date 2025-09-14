function guardar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    let contraseña1= document.getElementById("contraseña1").value;
    let contraseña2= document.getElementById("contraseña2").value;


    let administrador
    let contraseña
    if (nombre === "") {
        alert("Por favor ingrese un nombre");
    } else if (apellido === "") {
        alert("Por favor ingrese su apellido");
    } else if (correo === "") {
        alert("Por favor ingrese su correo");
    } else if (!regex.test(correo)) {
        alert("Correo inválido");
    } else if (isNaN(edad) || edad <= 0) {
        alert("Por favor ingresa una edad válida");
    } else if (edad < 18) {
        alert("No se le permite el acceso a menores de edad");
    }else if (contraseña1==""){
        alert ("porfavor ingrese una contraseña")
    }
    else if(contraseña1 =! contraseña2){
        alert("tu contraseña es erronea intentalo otra vez")
    }
    else {
        alert("el usuario fue guardado con exito")
        console.log("El usuario se ha guardado con éxito");
        window.location.href="pagina.html"
    }
}