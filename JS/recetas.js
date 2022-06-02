const contenedorRecetas = document.getElementById("recetasVarias");

const RECETAS = [
  {
    nombre: "BROWNIE",
    imagen:
      "../img/08. Brownie.png",
    ingredientes: [
      "100g de manteca",
      "100 g de chocolate apto para celíacos",
      "2 huevos",
      "1 taza de Azúcar",
      "1 taza de premezcla",
    ],
    preparacion: [
      "Verter en un bol los 2 huevos y el azúcar y mezclar a mano",
      "Derretir el chocolate y la manteca y agregar a la mezcla",
      "Agregar la harina y mezclar hasta conseguir una mezcla homogenea",
      "Verter la mezcla en un molde apto para horno",
      "Hornear 8 minutos con el horno a temperatura media y luego 10 minutos a 200 grados",
    ],
    tiempo: 50,
    tipo: "DULCE",
  },

  {
    nombre: "CHEESECAKE",
    imagen:
      "../img/09. Cheesecake.png",
    ingredientes: [
      "225 gramos Galletas de Vainilla SIN TACC",
      "195 gramos Azucar",
      "60 gramos Manteca derretida",
      "500 gramos Ricota",
      "1 cucharadita Esencia de Vainilla",
      "1 Limon rallado",
      "200 cm Crema de Leche",
      "1 huevo",
      "2 Claras de huevo",
      "35 gramos Premezcla Santa Maria",
    ],
    preparacion: [
      "Encender el horno a 170 grados de temperatura",
      "Masa: Procesar las galletitas SANTA MARIA de vainilla. Agregar 45 gramos de azúcar y la manteca derretida. Mezclar. Presionar la mezcla de galletitas sobre los bordes y la base del molde de torta desmontable de 24 cm. de diámetro. Reservar en la heladera.",
      "Relleno: Batir la ricota con los 150 gramos de azúcar por 3 minutos. Agregar la esencia de vainilla, la ralladura de limón, la yema, la crema y la PREMEZCLA SANTA MARIA tamizada Batir las claras a nieve y agregar con movimientos envolventes sobre la mezcla de ricota.",
      "Volcar la preparación sobre la base de galletitas y cocinar por 40 minutos en el horno.",
      "Cuando la crema de queso este firme retirar del horno y dejar enfriar.",
      "Reservar en la heladera por 6 horas. Luego desmoldar y volcar sobre el queso la mermelada.",
    ],
    tiempo: 90,
    tipo: "DULCE",
  },

  {
    nombre: "PIZZA",
    imagen:
      "../img/15. Pizza.png",
    ingredientes: [
      "280 gramos Premezcla Santa Maria",
      "35 gramos Levadura fresca",
      "20 gramos Azucar",
      "6 gramos Sal",
      "1 cucharada Aceite de oliva o neutro",
      "240 cm Agua tibia",
      "200 cm Salsa para Pizza",
      "250 gramos Muzzarella",
    ],
    preparacion: [
      "Mezclar en la amasadora o procesadora la PREMEZCLA SANTA MARIA, el azúcar, la sal y la levadura fresca.",
      "Agregar el aceite y el agua tibia",
      "Batir por 3 minutos hasta que se forme una masa lisa y cremosa.",
      "Aceitar una pizzera de 30 cm. de diámetro.",
      "Volcar la masa en el centro. Utilizar una cuchara mojada en agua para extender la masa sobre la pizzera. Dejar levar hasta que duplique su volumen.",
      "Cocinar en la parte inferior de horno por 15 minutos para que dore la base.",
      "Retirar del horno, cubrir con salsa y muzzarella. Llevar nuevamente al horno en la rejilla del medio y cocinar por 10 minutos más.",
      "Retirar de horno, agregar las aceitunas y el orégano. Esperar 2 minutos para cortarla",
    ],
    tiempo: 35,
    tipo: "SALADO",
  },

  {
    nombre: "BOCADITOS DE MUZZARELLA",
    imagen:
      "../img/16. Bastoncitos.png",
    ingredientes: [
      "250 gramos Muzzarella",
      "1 Huevo",
      "50 gramos Premezcla Santa Maria",
      "100 gramos Rebozador Santa Maria",
      "12 cucharada Oregano",
      "1 pizca Sal",
    ],
    preparacion: [
      "Cortar la muzzarella de 1. 5 cm de espesor.",
      "Batir el huevo con la sal y el orégano.",
      "Pasar la muzzarella por la premezcla. Luego por el huevo. Luego por el REBOZADOR SANTA MARIA. Volver a pasar la muzzarella por el huevo y luego por el REBOZADOR SANTA MARIA.",
      "Reservar las muzzarellas tapadas en la heladera por 20 minutos.",
      "En una cacerola o sartén colocar abundante aceite. Cuando el aceite alcance los 175 grados de temperatura sumergir las muzzarellas y cocinar por un minuto hasta que estén doradas.",
      "Retirar y dejar poner sobre papel absorbente",
      "Servir de inmediato con una ensalada verde o salsita de tomate casera.",
    ],
    tiempo: 27,
    tipo: "SALADO",
  },
];

const getRecetas = (item) => {
  parte_1 = `
  <h3 class="h3 h3_borde">${item.nombre}</h3>
    <div class="card mb-3 container">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${item.imagen}" class="img-fluid rounded-start" alt="${item.nombre}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">TIPO: ${item.tipo}, TIEMPO DE PREPARACION: ${item.tiempo} mins</h4>
            <h4 class="card-title">INGREDIENTES</h4>
            <ul class="card-text">`;

  ingredientes = "";
  item.ingredientes.forEach((ing) => {
    ingredientes += `<li>` + ing + `</li>`;
  });

  parte_2 = ingredientes;
  parte_3 = `</ul>
            <h4 class="card-title">PROCEDIMIENTO</h4>
              <ol class="card-text">
                  `;

  preparacion = "";
  item.preparacion.forEach((a) => {
    preparacion += `<li>` + a + `</li>`;
  });

  parte_4 = preparacion;

  parte_5 = `  
        </ol>
    </div>
  </div>
</div>
</div>
`;

  return parte_1 + parte_2 + parte_3 + parte_4 + parte_5;
};

const tipoRecetas = (datos, carga) => {
  let acumulador = "";
  datos.forEach((el) => {
    acumulador += getRecetas(el);
  });
  carga.innerHTML = acumulador;
};

tipoRecetas(RECETAS, contenedorRecetas);
