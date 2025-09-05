function guardar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("edad").value;
    let edad = document.getElementById("edad").value;
if (isNaN(edad) || edad <= 0) {
alert("Por favor ingresa una edad válida");
} if(isNaN(edad)|| edad < 18){

}
else {
alert("Edad registrada: " + edad);
}
}