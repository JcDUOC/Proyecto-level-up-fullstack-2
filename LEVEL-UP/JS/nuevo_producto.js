
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


function validarCodigo() {
  const codigo = document.getElementById("form-codigo").value.trim();

  if (codigo.length === 0) {
    return "El código es requerido.";
  }
  return true;
}


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
  const stock = document.getElementById("form-stock").value.trim();

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
  const stockCritico = document.getElementById("form-stock-critico").value.trim();

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
  const preview = document.getElementById("preview-img");

  if (imagen.length === 0) {
    preview.src = "";
    preview.classList.add("d-none");
    return true;
  }

  try {
    new URL(imagen);
    preview.src = imagen;
    preview.classList.remove("d-none");
  } catch (e) {
    return "La URL de la imagen no es válida.";
  }

  return true;
}


function validarFormulario() {
  const validaciones = [
    validarCodigo(),
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
