// Array de productos (puedes ampliarlo con lo del PDF)
const productos = [
  { nombre: "Nintendo Switch 2", precio: 599990, imagen: "../img/Switch2.jpg" },
  { nombre: "PlayStation 5", precio: 549990, imagen: "../img/play5.webp" },
  { nombre: "PC Gamer ASUS ROG Strix", precio: 1299990, imagen: "../img/PC ASUS.jpg" },
  { nombre: "Silla Gamer Secretlab Titan", precio: 349990, imagen: "../img/Silla Gamer Secretlab Titan.jpg" },
  { nombre: "Auriculares HyperX Cloud II", precio: 79990, imagen: "../img/Auriculares HyperX Cloud II.webp" }
];

const contenedor = document.getElementById("productos-container");
const cartCount = document.getElementById("cart-count");
let carrito = 0;

// Insertar productos dinámicamente
productos.forEach(prod => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>$${prod.precio.toLocaleString("es-CL")}</p>
    <button class="btn-add">Añadir al carrito</button>
  `;
  div.querySelector("button").addEventListener("click", () => {
    carrito++;
    cartCount.textContent = carrito;
  });
  contenedor.appendChild(div);
});
