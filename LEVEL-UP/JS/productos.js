var productos = [
  {
    codigo: "JM001",
    categoria: "Juegos de Mesa",
    nombre: "Catan",
    precio: 29990,
    urlImagen1: "https://images.unsplash.com/photo-1618220888576-24562ccca846",  // imagen juegos de mesa - Unsplash
    urlImagen2: "https://images.unsplash.com/photo-1600488995522-cb5e4a3be6c6",  // original, válida
    urlImagen3: "https://cdn.pixabay.com/photo/2018/11/30/21/54/board-game-3847218_1280.jpg",  // original, válida
    descripcion: "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos."
  },
  {
    codigo: "JM002",
    categoria: "Juegos de Mesa",
    nombre: "Carcassonne",
    precio: 24990,
    urlImagen1: "https://images.unsplash.com/photo-1554080353-a576cf803bda",  // original, válida
    urlImagen2: "https://cdn.pixabay.com/photo/2014/10/12/15/34/carcassonne-487350_1280.jpg",  // original, válida
    urlImagen3: "https://images.unsplash.com/photo-1618220914025-b25922f65f6f",  // imagen juegos de mesa - Unsplash
    descripcion: "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender."
  },
  {
    codigo: "AC001",
    categoria: "Accesorios",
    nombre: "Controlador Inalámbrico Xbox Series X",
    precio: 59990,
    urlImagen1: "https://cdn.pixabay.com/photo/2016/11/29/12/54/controller-1866599_1280.jpg",  // original, válida
    urlImagen2: "https://images.unsplash.com/photo-1617957741642-63f68a9a6b1f",  // original, válida
    urlImagen3: "https://images.unsplash.com/photo-1605535396580-afa62e7975b8",  // imagen mando videojuego - Unsplash
    descripcion: "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC."
  },
  {
    codigo: "AC002",
    categoria: "Accesorios",
    nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 79990,
    urlImagen1: "https://images.unsplash.com/photo-1583391733956-59b7b8f1a99f",  // original, válida
    urlImagen2: "https://cdn.pixabay.com/photo/2016/11/21/14/29/headphones-1846282_1280.jpg",  // original, válida
    urlImagen3: "https://images.unsplash.com/photo-1590080877777-f95f5a423aac",  // imagen auriculares gamer - Unsplash
    descripcion: "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego."
  },
  {
    codigo: "CO001",
    categoria: "Consolas",
    nombre: "PlayStation 5",
    precio: 549990,
    urlImagen1: "https://images.unsplash.com/photo-1606813909355-8fdc9c6b7a9c",  // original, válida
    urlImagen2: "https://cdn.pixabay.com/photo/2020/11/03/15/39/ps5-5719066_1280.jpg",  // original, válida
    urlImagen3: "https://images.unsplash.com/photo-1606277992036-9a798d78faa6",  // imagen PS5 - Unsplash
    descripcion: "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva."
  },
  {
    codigo: "CG001",
    categoria: "Computadores Gamers",
    nombre: "PC Gamer ASUS ROG Strix",
    precio: 1299990,
    urlImagen1: "https://images.unsplash.com/photo-1587202372775-989c7f9b2a6a",  // original, válida
    urlImagen2: "https://cdn.pixabay.com/photo/2019/06/11/18/56/computer-4268917_1280.jpg",  // original, válida
    urlImagen3: "https://images.unsplash.com/photo-1587202372832-989c7f9b2a6a",  // original, válida
    descripcion: "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego."
  },
  {
    codigo: "SG001",
    categoria: "Sillas Gamers",
    nombre: "Silla Gamer Secretlab Titan",
    precio: 349990,
    urlImagen1: "https://cdn.pixabay.com/photo/2017/10/25/20/14/chair-2882263_1280.jpg",  // imagen silla gamer - Pixabay
    urlImagen2: "https://images.unsplash.com/photo-1549924231-f129b911e442",  // imagen silla gamer - Unsplash
    urlImagen3: "https://images.unsplash.com/photo-1602197527097-3d6a03a8b1b3",  // original, válida
    descripcion: "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas."
  },
  {
    codigo: "MS001",
    categoria: "Mouse",
    nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 49990,
    urlImagen1: "https://cdn.pixabay.com/photo/2016/10/07/17/33/mouse-1723522_1280.jpg",  // original, válida
    urlImagen2: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",  // imagen mouse gamer - Unsplash
    urlImagen3: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",  // original, válida
    descripcion: "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización."
  },
  {
    codigo: "MP001",
    categoria: "Mousepad",
    nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 29990,
    urlImagen1: "https://cdn.pixabay.com/photo/2017/02/07/22/26/mouse-pad-2040896_1280.jpg",  // original, válida
    urlImagen2: "https://images.unsplash.com/photo-1612829982641-4d99089944c2",  // imagen mousepad gamer - Unsplash
    urlImagen3: "https://images.unsplash.com/photo-1560200353-4e2c604cdbf3",  // imagen mousepad gamer - Unsplash
    descripcion: "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse."
  },
  {
    codigo: "PP001",
    categoria: "Poleras Personalizadas",
    nombre: "Polera Gamer Personalizada 'Level-Up'",
    precio: 14990,
    urlImagen1: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",  // original, válida
    urlImagen2: "https://images.unsplash.com/photo-1602810318383-e386cc2a76e2",  // original, válida
    urlImagen3: "https://cdn.pixabay.com/photo/2017/07/27/00/34/t-shirt-2546660_1280.jpg",  // original, válida
    descripcion: "Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito."
  }
];

