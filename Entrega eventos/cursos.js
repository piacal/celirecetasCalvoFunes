const cursoPanaderia = document.getElementById("cursoPanaderia");
console.log(cursoPanaderia);
cursoPanaderia.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE PANADERIA TIENE UN COSTO DE $ 2000`;
});

const cursoPasteleria = document.getElementById("cursoPasteleria");
console.log(cursoPasteleria);
cursoPanaderia.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE PASTELERIA TIENE UN COSTO DE $ 2500`;
});

const cursoCocineritos = document.getElementById("cursoCocineritos");
console.log(cursoCocineritos);
cursoCocineritos.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE COCINERITOS TIENE UN COSTO DE $ 1500`;
});

const cursoGastronomia = document.getElementById("cursoGastronomia");
console.log(cursoGastronomia);
cursoGastronomia.addEventListener("click", () => {
    const informacionPresupuesto = document.getElementById("informacionPresupuesto");
    informacionPresupuesto.innerHTML = `EL CURSO DE GASTRONOMIA TIENE UN COSTO DE $ 1000`;
});