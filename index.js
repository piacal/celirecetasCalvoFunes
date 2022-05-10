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

//INGRESO A LA PAGINA COMO ESTUDIANTE O NO

let inscricionCurso = prompt("¿Usted está inscripto a un curso?");

if (inscricionCurso === "si"){
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
    }

// SI NO ESTA INSCRIPTO A NINGUN CURSO --> DAR LA POSIBILIDAD DE AVERIGUAR PRECIO, SINO DEJAR INGRESAR PARA VER RECETAS

if (inscricionCurso === "no"){
    const INSCRIPCION = 50;

    let tiposCurso = [
        {tipo: "Gastronomia", precio: 100},
        {tipo: "Cocineritos", precio: 200},
        {tipo: "Panaderia", precio: 150},
        {tipo: "Pasteleria", precio: 150},
    ]
    
    let averiguarCurso = prompt("¿Quiere averiguar el precio de los cursos?")
    if(averiguarCurso === "si"){
    let curso = prompt("¿Que curso quieres hacer? ¿Gastronomia, Cocineritos, Panaderia ó Pasteleria?");
    
        if(curso !== "Gastronomia" && curso !== "Cocineritos" && curso !== "Panaderia" && curso !== "Pasteleria"){
        
            alert ("Ingrese un curso válido");
            curso = prompt ("¿Que curso quieres hacer? ¿Gastronomia, Cocineritos, Panaderia ó Pasteleria?")
        }
    
    let seleccionCurso = tiposCurso.find(x => x.tipo === curso);
    
    let resultado = (seleccionCurso.precio) + INSCRIPCION;
    
    alert (`El curso que usted eligio es ${curso} y el precio es de ${resultado}`);
    }
    if(averiguarCurso === "no"){
        alert("Bienvenido a Celirecetas, usted podra ver todas las recetas que tenemos disponibles");
    }
} 

//FILTROS PARA LA SECCION RECETAS 

class recetas {
    constructor (nombre, ingredientes, preparacion, tiempo, tipo) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.preparacion = preparacion,
    this.tiempo = tiempo;
    this.tipo = tipo;
    }

    mostrar(){
        return this.nombre
    }
}

const recetaslista = [];
recetaslista.push(new recetas ("Cheescake",['licor', 'agua', 'tunel'],"Falta agregar informacion",70,"Dulce"));
recetaslista.push(new recetas ("Pizza",['Harina', 'Agua', 'Aceite', 'Tomate', 'Queso', 'Jamón'],"Falta agregar informacion",30,"Salado"));
recetaslista.push(new recetas ("Brownie",['Harina','Chocolate', 'Leche', 'Manteca'],"Falta agregar informacion",50,"Dulce"));

//console.log(recetaslista[0].ingredientes[1]);

for(const recetas of recetaslista){
    if (recetas.tipo === "Dulce"){
        console.log(recetas.mostrar());

        if(recetas.tiempo < 60){
            console.log(recetas.mostrar());
        }
        for (i=0; i < recetas.ingredientes.length; i++){
        if(recetas.ingredientes[i] == "Chocolate"){
            console.log(recetas.mostrar());
        }
        }
    }
    if (recetas.tipo === "Salado"){
        if(recetas.tiempo < 40){
            console.log(recetas.mostrar());
        }
        for (i=0; i < recetas.ingredientes.length; i++){
        if(recetas.ingredientes[i] == "Queso"){
            console.log(recetas.mostrar());
        }
        }
    }
}



