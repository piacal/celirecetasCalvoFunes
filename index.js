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
        console.log('La receta es: ' + this.nombre);
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



