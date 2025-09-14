function validar(){
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña1").value;
    let regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const correoAdmin = "admin@dominio.com";
    const contraseñaAdmin = "admin123";

    if (correo ==""){
        alert("correo erroneo por favor ingrese bien el correo ")
    }else if(contraseña == ""){
        alert("por ravor ingrese su contraseña")
    }else if (!regex.test(correo)){
        alert("Correo inválido");
    }else if (correo === correoAdmin && contraseña === contraseñaAdmin){
        alert("bienvenido administrador")
        window.location.href="administrador.html"
    }else if(correo != correoAdmin && contraseña != contraseñaAdmin){
        alert("bienvenido usuario")
        window.location.href="pagina.html"
    }
}