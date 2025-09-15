

function obtener_kart(){
    for(let k of cantidad){
        console.log(k)
    }
}





function obtener_producto_por_id(id_p){
    for (var pro of productos){
        if(pro["codigo"] === id_p){
            return pro
        }
    }

}

function obtener_categoria_por_id(id_p){
    for (var pro of productos){
        if(pro["codigo"] === id_p){
            return pro["categoria"]
        }
    }

}

function ver_detalle_prod(codigo){
    sessionStorage.setItem("id", codigo)
    window.location.href = "detalle_producto.html"
}

function obtener_prods_cat(categoria, codigo){
     let prods = []

     for (let pro of productos){
        if(pro["categoria"] === categoria && pro["codigo"] !== codigo){
            prods.push(pro)
        }
    }

    return prods

}

function mostrar_productos_relacionados(){
    let codigo = sessionStorage.getItem("id")
    let categoria = obtener_categoria_por_id(codigo)
    let prods = obtener_prods_cat(categoria, codigo)

    let productos_rel = document.getElementById("prods_rela")
    if(prods.length !== 0){
        prods.forEach(element => {
            let producto = document.createElement("div")
            producto.classList.add("prod-rel")

            producto.innerHTML = `
                <div onclick= "ver_detalle_prod('${String(element["codigo"])}')" class="card" style="width: 18rem;">
                    <img src="${element["urlImagen1"]}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element["nombre"]}</h5>
                        <p class="card-text">${categoria}</p>
                    </div>
                </div>
            `

            productos_rel.appendChild(producto)
        
        })
    } else {
        document.getElementById("no-prod").innerHTML = "no hay productos relacionados"
    }

}

function mostrar_detalle(){
    let codigo = sessionStorage.getItem("id")
    let producto = obtener_producto_por_id(codigo)


    let nombre_prod = document.getElementById("nombre_prod")
    let costo = document.getElementById("det_cost")
    let categoria = document.getElementById("det_cat") 
    let descripcion = document.getElementById("descripcion_det")
    let imagen_select = document.getElementById("im_selec_prod")


    imagen_select.src = producto["urlImagen1"]
    descripcion.innerHTML = producto["descripcion"]
    categoria.innerHTML = producto["categoria"]
    nombre_prod.innerHTML = producto["nombre"]
    costo.innerHTML = producto["precio"]


    mostrar_productos_relacionados()
}
function agregar_kart(p){
    let kart = JSON.parse(sessionStorage.getItem("kart"))
    kart.push(p)
    sessionStorage.setItem("kart", JSON.stringify(kart))

}

function agregar_cant(c){
    let cant = JSON.parse(sessionStorage.getItem("k_cant"))
    cant.push(c)
    sessionStorage.setItem("k_cant", JSON.stringify(cant))

}



function agregar_carrito(){
    let id_prod = sessionStorage.getItem("id")

    let cant = document.getElementById("in_cant")
    let producto = obtener_producto_por_id(id_prod)

    agregar_kart(producto)
    agregar_cant(cant.value)

    cant.value = 0
    

}

mostrar_detalle()


