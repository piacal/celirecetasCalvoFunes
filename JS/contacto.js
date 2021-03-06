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
    
    //Tomo los id que ya estan definidos en la card de Bootstrap para no crear uno diferente
    let nombre = document.getElementById("formGroupExampleInput").value;
    let email = document.getElementById("inputEmail4").value;
    let telefono = document.getElementById("formGroupExampleInput2").value;
    let consultaFormulario = document.getElementById("floatingTextarea2").value;
    
    let persona = new Persona(nombre, email, telefono, consultaFormulario);

    listaPersonas.push(persona);
  
    localStorage.setItem('Personas', JSON.stringify(listaPersonas));   
    document.getElementById("form").reset();
})

