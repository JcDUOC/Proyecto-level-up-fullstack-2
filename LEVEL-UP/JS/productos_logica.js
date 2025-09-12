
  
  
alert("entrando")
function mostrar_productos(){
    lista_product = document.getElementById("lista_productos")

    i = 0

    productos.forEach(element => {
        producto = document.createElement("div")
        costo = "$" + element["titulo"]
        producto.classList.add("producto")
        producto.innerHTML = `
            <p class = "titulo"><strong> ${element["titulo"]}</strong> </p> <br>
            <p class = "costo">${element["costo"]}</p> <br>
            <button onclick="ver_detalle_prod(${element["id"]})" >añadir al carrito</button>

        `
        lista_product.appendChild(producto)

        i++

        if(i == 3){
            i = 0
            lista_product.appendChild(document.createElement("br"))
        }
    });



}

function ver_detalle_prod(id){
    sessionStorage.setItem('id_producto', id)
    window.location.href = "detalle_producto.html"
}



mostrar_productos()