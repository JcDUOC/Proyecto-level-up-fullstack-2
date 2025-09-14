if(sessionStorage.getItem("kart") == null){
    sessionStorage.setItem("kart", JSON.stringify([]))
    sessionStorage.setItem("k_cant", JSON.stringify([]))
}
 

  
alert(null)
function mostrar_productos(){
    lista_product = document.getElementById("lista_productos")

    i = 0

    productos.forEach(element => {
        producto = document.createElement("div")
        costo = "$" + element["nombre"]
        producto.classList.add("producto")
        producto.innerHTML = `
            
                <div class="card">
                    <img src="${element["urlImagen1"]}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element["nombre"]}</h5>
                    <p class="card-text">${element["precio"]}</p>
                    </div>
                    <div class="card-footer">
                        <button onclick="ver_detalle_prod('${element["codigo"]}')">añadir al carrito</button>
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

function ver_detalle_prod(codigo){
    sessionStorage.setItem("id", codigo)
    window.location.href = "detalle_producto.html"
}



mostrar_productos()