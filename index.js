/* let prodPremezcla= "premezcla";
let prodGalletas= "galletas";
let prodYerba= "yerba";

let cantPremezcla = 3;
let cantGalletas = 4;
let cantYerba = 4;

const precioPremezcla = 300;
const precioGalletas = 100;
const precioYerba = 600;

function compra(producto){
    switch(producto) {

        case "prodPremezcla":
            subTotal = cantPremezcla * precioPremezcla;
        break;

        case "prodGalletas":
            subTotal = cantGalletas * precioGalletas;
        break

        case "prodYerba":
            subTotal = cantYerba * precioYerba;
        break

        default: 
            alert("Ingrese producto existente");
    }

    return subTotal;
}

console.log("El precio total de premezcla es de " + "$" + compra("prodPremezcla"));
console.log("El precio total de galletas es de " + "$" + compra("prodGalletas"));
console.log("El precio total de Yerba es de " + "$" + compra("prodYerba"));

let total = 0
total = total + (cantPremezcla * precioPremezcla) + (cantGalletas * precioGalletas) + (cantYerba * precioYerba);
console.log("El precio a pagar por tu compra es de " + "$" + total)
*/


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
   
    
    
