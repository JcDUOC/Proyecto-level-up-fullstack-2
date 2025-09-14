var prod_car = JSON.parse(sessionStorage.getItem("kart"))

var cant_car = JSON.parse(sessionStorage.getItem("k_cant")) 
 console.log(prod_car)
 console.log(cant_car)


function borrar_kart_prod_id(id, pos){
    document.getElementById(id).remove()
    let p = parseInt(pos)

    let prod_k = JSON.parse(sessionStorage.getItem("kart"))
    prod_k.splice(p, 1)
    sessionStorage.setItem("kart", JSON.stringify(prod_k))

    let cant_k = JSON.parse(sessionStorage.getItem("k_cant")) 
    cant_k.splice(p, 1)
    sessionStorage.setItem("k_cant", JSON.stringify(cant_k))



}

function vaciarKart(){
    var prod_k = JSON.parse(sessionStorage.getItem("kart"))
    prod_k.splice()
    sessionStorage.setItem("kart", JSON.stringify(prod_k))

    var cant_k = JSON.parse(sessionStorage.getItem("k_cant")) 
    cant_k.splice()
    sessionStorage.setItem("k_cant", JSON.stringify(cant_k))

    let car_market = document.getElementById("market_items")
    car_market.innerHTML = ""

}

function mostrarCarro(){
    let car_market = document.getElementById("market_items")

    let costo_total = 0

    for(let i = 0; i < prod_car.length; i = i+1){
        let item = document.createElement("div")
        let producto = prod_car[i]
        let cantidad = cant_car[i]
        let costo = producto["precio"] * cantidad
        let id_k = "p" + i

        item.id = id_k

        item.innerHTML = `
            <div class="card mb-3" style="max-width: 100%;">
                <div class="row g-0" style="width: 100%;">
                    <div class="col-md-4">
                    <img src="${producto["urlImagen1"]}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 contenedor_info2">
                        <div class="card-body" style="line-height : 7px">
                            <h4 class="card-title" >${producto["nombre"]}</h4>
                            <br> <br>
                            
                                <p class="card-text">  <b>Categoria:</b> ${producto["categoria"]}</p>
                                <p class = "card-text"><b>Precio Unitario:</b> ${producto["precio"]}</p>
                                <p class = "card-text"> <b>Cantidad:</b> ${cantidad}</p>
                                <p class = "card-text"> <b>Total:</b> ${costo}</p>
                            
                            
                        </div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end" style = "vertical-align: middle; display: flex; place-items: center;">
                            <button style = "max-height: 25%; " onclick = "borrar_kart_prod_id('${id_k}', ${i})" class="btn btn-primary me-md-2" type="button">eliminar</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        `

        car_market.appendChild(item)

        costo_total = costo_total + costo




    }

    return costo_total


}

function aplicar_descuento(){

    let total_html = document.getElementById("total-carro")
    let in_cod = document.getElementById("cod-descuent")

    if(String(in_cod.value).trim().length > 0){
        total_html.value = parseFloat(total_html.value) * 0.9
    } else {
        alert("Debe poner un codigo de descuento")
    }


}


function agregar_inf_kart(){
    let total = mostrarCarro()
    
    let total_html = document.getElementById("total-carro")

    total_html.innerHTML = String(total)


}

agregar_inf_kart()

function pagar(){
    let total_html = document.getElementById("total-carro")
    if(!(total_html.value == 0)){
        total_html.value = 0
        vaciarKart()
    }
}

