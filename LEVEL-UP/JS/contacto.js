function guardar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let asunto = document.getElementById("contenido").value;

    if(nombre ==""){
        alert("por favor ingrese su nombre")
    }else if(correo ==""){
        alert("por favor ingrese su correo")
    }if(asunto ==""){
        alert("por favor escriba su asunto")
    }else{
        alert("su comentario se a enviado correctamente")
    }
}