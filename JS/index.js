// Index.htm SECCION RECETAS aplicado con DOM
const contenedor = document.getElementById("recetas");

const RECETAS = [
    {   
        imagen: "https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg",
        nombre: "SALADO",
        descripcion: "Pizzas, tartas, empanadas, etc",
    
        },
        { 
        imagen: "https://abmauri.es/wp-content/uploads/2020/08/articulo-1-imagen.jpg",
        nombre: "PANES",
        descripcion: "Lactal, masa madre, hamburguesa, etc",
    
    },
    { 
        imagen: "https://www.pcrm.org/sites/default/files/2019-12/Untitled%20%283%29_1.jpg",
        nombre: "ENSALADA",
        descripcion: "Variedades para tus comidas",
    
    },
    {
        imagen: "https://vivanatur.co/wp-content/uploads/2020/12/Cheessecake-frutos-rojos.jpg",
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