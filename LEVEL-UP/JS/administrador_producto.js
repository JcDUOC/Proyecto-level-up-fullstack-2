function mostrar_productos(){
    lista_product = document.getElementById("lista_productos")

    i = 0

    productos.forEach(element => {
        producto = document.createElement("div")
        costo = "$" + element["nombre"]
        producto.classList.add("producto")
        producto.innerHTML = `
            
                <div class="card contenedor" style = "width: 100%">
                    <img src="${element["urlImagen1"]}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element["nombre"]}</h5>
                    <p class="card-text">${element["precio"]}</p>
                    </div>
                    <div class="card-footer">
                        <button onclick="actualizar_producto('${element["codigo"]}')">Editar</button>
                    </div>
                </div>
        `
        lista_product.appendChild(producto)

        i++

        if(i == 3){
            i = 0
            lista_product.appendChild(document.createElement("br"))
        }
    });



}

function actualizar_producto(codigo){
    sessionStorage.setItem("id_actualizar", codigo)
    window.location.href = "actualizar_producto.html"
}



mostrar_productos()

