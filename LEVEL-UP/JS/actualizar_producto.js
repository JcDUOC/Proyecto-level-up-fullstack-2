
function validarNombre() {
    const nombre = document.getElementById("form-nomb").value.trim();

    if (nombre.length === 0) {
        return "El nombre es requerido.";
    }
    if (nombre.length > 100) {
        return "El nombre no puede superar los 100 caracteres.";
    }
    return true;
}


function validarDescrip() {
    const descrip = document.getElementById("form-descrip").value;

    if (descrip.length > 500) {
        return "La descripción no puede superar los 500 caracteres.";
    }
    return true;
}


function validarPrecio() {
    const precio = document.getElementById("form-precio").value.trim();

    if (precio.length === 0) {
        return "El precio es requerido.";
    }

    const num = parseFloat(precio);
    if (isNaN(num)) {
        return "El precio debe ser un número válido.";
    }
    if (num < 0) {
        return "El precio no puede ser negativo.";
    }

    return true;
}

function validarStock() {
    const stock = document.getElementById("form-stock").value;

    if (stock.length === 0) {
        return "El stock es requerido.";
    }

    const num = parseInt(stock, 10);
    if (isNaN(num)) {
        return "El stock debe ser un número entero.";
    }
    if (num < 0) {
        return "El stock no puede ser negativo.";
    }

    return true;
}


function validarStockCritico() {
    const stockCritico = document.getElementById("form-stock-critico").value;

    if (stockCritico.length === 0) {
        return true; 
    }

    const num = parseInt(stockCritico, 10);
    if (isNaN(num)) {
        return "El stock crítico debe ser un número entero.";
    }
    if (num < 0) {
        return "El stock crítico no puede ser negativo.";
    }

    return true;
}


function validarCategoria() {
    const categoria = document.getElementById("form-cat").value;

    if (categoria === "") {
        return "La categoría es requerida.";
    }
    return true;
}


function validarImagen() {
    const imagen = document.getElementById("form-imagen").value.trim();

    if (imagen.length === 0) {
        return true; //
    }

    
    try {
        new URL(imagen);
    } catch (e) {
        return "La URL de la imagen no es válida.";
    }

    return true;
}

function mostrarErrores(errores) {
    const divErrores = document.getElementById("errores");

    if (errores.length > 0) {
        divErrores.innerHTML = "<ul>" + errores.map(e => "<li>" + e + "</li>").join("") + "</ul>";
        divErrores.classList.remove("d-none"); 
    } else {
        divErrores.innerHTML = "";
        divErrores.classList.add("d-none"); 
    }
}

function validarFormulario() {
    const validaciones = [
        validarNombre(),
        validarDescrip(),
        validarPrecio(),
        validarStock(),
        validarStockCritico(),
        validarCategoria(),
        validarImagen()
    ];

    
    const errores = validaciones.filter(v => v !== true);

    mostrarErrores(errores);

    return errores.length === 0; 
}

function obtener_producto_por_id(id_p){
    for (let pro of productos){
        if(pro["codigo"] === id_p){
            return pro
        }
    }

}

function mostrar_prod_act(){
    let cod = sessionStorage.getItem("id_actualizar")
    producto = obtener_producto_por_id(cod)

    document.getElementById("form-nomb").value = producto["nombre"]
    document.getElementById("opcion-selec").value = producto["categoria"]
    document.getElementById("opcion-selec").textContent = producto["categoria"]
    document.getElementById("form-precio").value = producto["precio"]
    document.getElementById("form-descrip").value = producto["descripcion"]
    document.getElementById("form-imagen").value = producto["urlImagen1"]
    document.getElementById("imagen-principal").src = producto["urlImagen1"]

    



}

mostrar_prod_act()

