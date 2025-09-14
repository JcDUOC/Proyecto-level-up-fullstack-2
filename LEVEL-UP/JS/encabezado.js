function encabezado_comprador(){
    let encabezado = document.getElementById("contenedor-nav-up")
    
    let kart = "image/marketkar.png" 
    let productos = "productos.html"

    encabezado.innerHTML = `
        <table style = "width: 100%; heigth:100px; border-bottom: solid 2px black;">
            <tr style="height:100px;" >
                <td class = "name_com_up" style: "max-height:100%"><h1>Level-up<h1> </td> 
                    <td style = "width: 60%"> <a class = "detalle_1linea" href=""> Home</a> <p class = "detalle_1linea">|</p> <a class = "detalle_1linea" href="${productos}"> Productos</a>  <p class = "detalle_1linea">|</p>  <a class = "detalle_1linea" href=""> Nosotros</a> <p class = "detalle_1linea">|</p> <a class = "detalle_1linea" href="">Blog</a> <p class = "detalle_1linea">|</p> <a class = "detalle_1linea" href="">Contacto</a></td>   
                <td class = "carrito_ir" ><img class="kart" src= "${kart}" alt=""> <a href="carrito.html">ir</a></td> 
            </tr>
        </table>

        
    `

   
}

encabezado_comprador()