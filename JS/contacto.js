class Persona{
    constructor(nombre, email, telefono, consulta){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.consulta = consulta;
    }
}

const listaPersonas = [];

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault ();

    let nombre = document.getElementById("formGroupExampleInput").value;
    let email = document.getElementById("inputEmail4").value;
    let telefono = document.getElementById("formGroupExampleInput2").value;
    let consultaFormulario = document.getElementById("floatingTextarea2").value;
    
    let persona = new Persona(nombre, email, telefono, consultaFormulario);

    listaPersonas.push(persona);
  
    localStorage.setItem('Personas', JSON.stringify(listaPersonas));
})








/* let contacto = document.getElementById("formulario");
contacto.addEventListener("submit", validarContacto);
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let consultaFormulario = document.getElementById("consulta"); 

function validarContacto (e){
    e.preventDefault ();
    console.log("Consulta Enviada");

}

localStorage.setItem('nombre', JSON.stringify(nombre));
localStorage.setItem('email', JSON.stringify(email));
localStorage.setItem('consulta', JSON.stringify(consultaFormulario)); */



