/* const cursoPanaderia = document.getElementById("cursoPanaderia");
cursoPanaderia.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE PANADERIA TIENE UN COSTO DE $ 2000`;
});

const cursoPasteleria = document.getElementById("cursoPasteleria");
cursoPanaderia.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE PASTELERIA TIENE UN COSTO DE $ 2500`;
});

const cursoCocineritos = document.getElementById("cursoCocineritos");
cursoCocineritos.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE COCINERITOS TIENE UN COSTO DE $ 1500`;
});

const cursoGastronomia = document.getElementById("cursoGastronomia");
cursoGastronomia.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE GASTRONOMIA TIENE UN COSTO DE $ 1000`;
}); */

const contenedor = document.getElementById("cursos");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = [];

const CURSOS = [
  {
    id: 1,
    nombre: "PANADERIA",
    precio: 2000,
    lugaresDisponibles: 10,
    descripcion:
      "Conocerás los procedimientos básicos y avanzados para su aplicación en diferentes preparaciones.",
    imagen:
      "https://www.proveedores.com/articulos/wp-content/uploads/2016/09/pansingluten.jpg",
  },

  {
    id: 2,
    nombre: "PASTELERIA",
    precio: 2500,
    lugaresDisponibles: 10,
    descripcion:
      "Instruimos a las personas en la utilización de nuevas técnicas de pastelería, implementando materias primas de vanguardia. Vas a poder realizar postres y productos de pastelería novedosos y de calidad todo sin gluten",
    imagen:
      "https://www.cucinare.tv/wp-content/uploads/2018/08/Gout-Gluten-free.jpg",
  },

  {
    id: 3,
    nombre: "COCINERITOS",
    precio: 1500,
    lugaresDisponibles: 10,
    descripcion:
      "Brindamos una capacitación integral en cocina, pastelería y panadería, seguridad e higiene alimenticia, nutrición para niños atendiendo así, a las necesidades recreativas sociales de los niños.",
    imagen:
      "https://i.pinimg.com/170x/d8/6f/30/d86f30b54255133efd1f7497045b99e6.jpg",
  },

  {
    id: 4,
    nombre: "GASTRONOMIA",
    precio: 1000,
    lugaresDisponibles: 10,
    descripcion:
      "Capacitamos a los alumnos para desempeñarse como cocineros y profesionales gastronómico, en los servicios caterings y eventos",
    imagen:
      "https://www.niddk.nih.gov/-/media/Images/Health-Information/Digestive-Diseases/healthy-salad-bowl_975x650.jpg",
  },
];

const getCard = (item) => {
  return `
        <div class="col animacioncursos "card"" id="cursoPanaderia" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${item.nombre}</h3>
            <div class="card">
                <img src="${item.imagen}" class="card-img-top" alt="${
    item.nombre
  }">
            <div class="card-body">
                <p class="card-text">${item.descripcion}</p>
            <div class="card-body">
                <p class="card-text">$${item.precio}</p>
                <button onclick=agregarCarrito(${item.id}) class="btn ${
    item.lugaresDisponibles ? "btn-primary" : "btn-secondary"
  }" ${!item.lugaresDisponibles ? "disabled" : ""} >Agregar al carrito</button>
            </div>
            </div>
            </div>
            </div>
        </div>

    `;
};

const getRow = (item) => {
  return `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>$${item.precio * item.cantidad} ($${item.precio})</td>
        <td><img style="width:20px" src="${item.imagen}" alt="imagen"></td>
    </tr>
        `;
};

const cargarProductos = (datos, nodo, esTabla) => {
  let acumulador = "";
  datos.forEach((el) => {
    acumulador += esTabla ? getRow(el) : getCard(el);
  });
  nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
  const seleccion = CURSOS.find((item) => item.id === id);
  const busqueda = carrito.findIndex((el) => el.id === id);

  if (busqueda === -1) {
    carrito.push({
      id: seleccion.id,
      nombre: seleccion.nombre,
      precio: seleccion.precio,
      cantidad: 1,
      imagen: seleccion.imagen,
    });
  } else {
    carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1;
  }

  cargarProductos(carrito, tablaCarrito, true);
};

cargarProductos(CURSOS, contenedor, false);

let btnComprar = document.getElementById("btnComprar");

btnComprar.addEventListener("click", () => {
  Swal.fire({
    title: "Quiere terminar con la compra?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, comprar",
    cancelButtonText: "No, quiero agregar otro curso",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Su compra fue realizada con éxito",
        showConfirmButton: false,
        timer: 5000,
      });
    }
  });
});
