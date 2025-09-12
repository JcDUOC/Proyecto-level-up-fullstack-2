function obtener_producto_por_id(id_p){
    for (var pro of productos){
        if(pro["id"] === id_p){
            return pro
        }
    }

}

