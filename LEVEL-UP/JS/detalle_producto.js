


function obtener_producto_por_id(id_p){
    for (var pro of productos){
        if(pro["codigo"] === id_p){
            return pro
        }
    }

}

function obtener_prods_cat(categoria){
     let productos =[]

     for (let pro of productos){
        if(pro["categoria"] === categoria){
            productos.push(pro)
        }
    }

    return productos

}

function mostrar_detalle(){
    let codigo = sessionStorage.getItem("id")
    let producto = obtener_producto_por_id(codigo)
    let nombre_prod = document.getElementById("nombre_prod")
    nombre_prod.innerHTML = producto["nombre"]
}

mostrar_detalle()

