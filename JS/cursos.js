//Definicion de clase de Cursos
class Curso {
  constructor(nombre, precio, descripcion, lugaresDisponibles, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.lugaresDisponibles = lugaresDisponibles;
    this.imagen = imagen;
    this.cant = 1;
  }
}

//definicion de variables
let cursos = [];
localStorage.setItem('carrito', JSON.stringify([]));
let divProductos = document.getElementById("divProductos");
let botonCarrito = document.getElementById("botonCarrito");
let modalBody = document.getElementById("modalbody");
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra");
let parrafoCompra = document.getElementById('precioTotal');
let acumulador;

//aplico fetch para una api interna
fetch('../cursos.json')
.then(response => response.json())
.then(dataCursos => {
   dataCursos.forEach((cursoEnArray, indice)=> {
      //Card de bootstrap para generar mis productos en el HTML
      divProductos.innerHTML += `
      <div class="col animacioncursos "card"" id="curso${indice}" style="width: 18rem;">
      <div class="card-body">
          <h3 class="card-title">${cursoEnArray.nombre}</h3>
      <div class="card">
          <img src="${cursoEnArray.imagen}" class="card-img-top" alt="${cursoEnArray.nombre}">
      <div class="card-body">
          <p class="card-text">${cursoEnArray.descripcion}</p>
      <div class="card-body">
          <p class="card-text">$${cursoEnArray.precio}</p>
          <button id="boton${indice}" class="btn btn-dark"><i class="fas fa-cart-plus fa-1x"></i></button>
      </div>
      </div>
      </div>
      </div>
    </div>
    `
});

dataCursos.forEach((cursoEnArray, indice) => {
       document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(cursos.find(curso => curso.nombre == cursoEnArray.nombre)) {
                let index = cursos.findIndex(curso => curso.nombre == cursoEnArray.nombre);
                cursos[index].cant++;
                localStorage.setItem('carrito', JSON.stringify(cursos));
            } else {
                let nuevoCurso = new Curso(cursoEnArray.nombre, 
                  cursoEnArray.precio, cursoEnArray.descripcion, cursoEnArray.lugaresDisponibles, cursoEnArray.imagen);
                cursos.push(nuevoCurso);
                localStorage.setItem('carrito', JSON.stringify(cursos))
            }
            
       })
   })
})

function compraTotal(cursosDelStorage) {
  acumulador = 0;
  cursosDelStorage.forEach((cursoCarrito) => {
      acumulador += cursoCarrito.precio * cursoCarrito.cant
  })

  if(acumulador == 0) {
      parrafoCompra.innerHTML = "";
      modalBody.innerHTML = "<p>No hay productos agregados en el carrito </p>" 
  }
 
}

//Funcion poder eliminar, sumar o restar cantidad de curso
function cargarCarrito(cursosDelStorage) {
  cursosDelStorage.forEach((cursoCarrito, indice) => {
      document.getElementById(`botonEliminar${indice}`).addEventListener('click', () => {
          document.getElementById(`cursoCarrito${indice}`).remove();
          cursos.splice(indice, 1);
          localStorage.setItem('carrito', JSON.stringify(cursos));
          cargarCursos(JSON.parse(localStorage.getItem('carrito')))
      })
  })

  cursosDelStorage.forEach((cursoCarrito, indice) => {
      document.getElementById(`sum${indice}`).addEventListener('click', () => {
          if(cursos[indice].cant < cursos[indice].lugaresDisponibles) {
              cursos[indice].cant++;
              localStorage.setItem('carrito', JSON.stringify(cursos));
              cargarCursos(JSON.parse(localStorage.getItem('carrito')))
              
          }
      })
  })

  cursosDelStorage.forEach((cursoCarrito, indice) => {
      document.getElementById(`rest${indice}`).addEventListener('click', () => {
          if(cursos[indice].cant > 1) {
              cursos[indice].cant--;
              localStorage.setItem('carrito', JSON.stringify(cursos));
              cargarCursos(JSON.parse(localStorage.getItem('carrito')))
          }
      })
  })
  
}

//Visualizacion de mi carrito de compra
function cargarCursos(cursosDelStorage) {

  modalBody.innerHTML = " ";  
  cursosDelStorage.forEach((cursoCarrito, indice) => {
      
      modalBody.innerHTML += `
          <div class="card border-primary mb-3" id ="cursoCarrito${indice}" style="max-width: 540px;">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img src="${cursoCarrito.imagen}" class="img-fluid rounded-start" alt="${cursoCarrito.nombre}">
              </div>
          <div class="col-md-8">
              <div class="card-body">
             
              <h5 class="card-title">${cursoCarrito.nombre}</h5>
              <div class="row">
                  <p class="card-text">Cantidad: ${cursoCarrito.cant}</p>
                  <p class="card-text">Precio a pagar: ${cursoCarrito.cant * cursoCarrito.precio}</p>
                  <button class= "btn btn-outline-secondary" id="sum${indice}"><i class="fas fa-plus"></i></button>
                  <button class= "btn btn-outline-secondary" id="rest${indice}"><i class="fas fa-minus"></i></button> 
              </div>
              <button class= "btn btn-danger" id="botonEliminar${indice}"><i class="fas fa-trash-alt"></i></button>
          </div>
          </div>
          </div>
      </div>
  `
});

cargarCarrito(cursosDelStorage);
compraTotal(cursosDelStorage);

}

let cursosDelStorage;

botonCarrito.addEventListener('click', () => {
  cursosDelStorage = JSON.parse(localStorage.getItem('carrito'));
  cargarCursos(cursosDelStorage);
})

botonFinalizarCompra.addEventListener('click', () => {
    if(cursosDelStorage.length == 0){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'El carrito esta vacio',
          })
    }else{
    localStorage.setItem('carrito', JSON.stringify([]));
    swal("Gracias por su compra!", "Los productos seran enviados en la brevedad", "success");}
})
