// Index.htm SECCION RECETAS aplicado con DOM
const contenedor = document.getElementById("recetas");

const RECETAS = [
    {   
        imagen: "../img/02. Salados.png",
        nombre: "SALADO",
        descripcion: "Pizzas, tartas, empanadas, etc",
    
        },
        { 
        imagen: "../img/05. PAN.png",
        nombre: "PANES",
        descripcion: "Lactal, masa madre, hamburguesa, etc",
    
    },
    { 
        imagen: "../img/03. Ensalada.png",
        nombre: "ENSALADA",
        descripcion: "Variedades para tus comidas",
    
    },
    {
        imagen: "../img/04. Dulce.png",
        nombre: "DULCE",
        descripcion: "Tortas, lemmon pie, cheesecake, etc",
    
    },
];

const getReceta = (item) => {
    return (
        `
        <div class="col">
            <div class="card">
                <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
                <div class="card-body">
                    <p class="card-text">${item.nombre}</p>
                    <p class="card-text">${item.descripcion}</p>
                </div>
            </div> 
        </div>       
        `
    );
};

const tipoRecetas = (datos, carga) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += getReceta(el);
    });
    carga.innerHTML = acumulador;
}

tipoRecetas(RECETAS, contenedor);





/* //PARA APLICAR OPERADORES AVANZADOS, LO APLICO EN USUARIO AUNQUE NO SE UTILICE LUEGO PARA EL PROYECTO FINAL

let inscricionCurso = prompt("¿Usted está inscripto a un curso?");

inscricionCurso === "si" 
    let usuario = prompt ("Ingrese usuario");

    while (usuario != "piacalvo"){
        alert ("Usuario incorrecto, ingrese nuevamente");
        usuario = prompt ("Ingrese usuario");
    }
        
    let contrasena = prompt ("Ingrese contraseña");
    let intentos = 0; 
        
    while (contrasena != "0000"){
        alert ("Contraseña invalida, intente nuevamente");
        contrasena = prompt ("Ingrese Contraseña");
    }
        
        alert ("Usted ha ingresado con exito")
} */