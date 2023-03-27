// constante
const contenedorCard = document.getElementById("card");
const input = document.getElementById("inputsearch");
const contenedorCheckbox = document.getElementById("checkcontainer");



//eventos
input.addEventListener("input", filtroDoble);

contenedorCheckbox, addEventListener("change", filtroDoble);

//llamadas de funciones

// mostrarCard(data.events, contenedorCard);

// crearcheckbox(data.events);

//funciones

function mostrarCard(array, contenedor) {
  if (array.length == 0) {
    contenedor.innerHTML = "<h2>no matches!</h2>";
    return;
  }
  let tarjetas = "";
  for (dato of array) {
    if (fecha < dato.date) {
      tarjetas += `<div class="card m-3 mx-5 p-0" style="width: 17rem;">
                          <img src="${dato.image}" class="card-img-top" alt="">
                          <div class="card-body">
                              <h5 class="card-title">${dato.name}</h5>
                              <p class="card-text">${dato.description}</p>
                              <div class="row">
                                  <p class="col">$${dato.price}</p>
                                  <a href="../details.html?id=${dato._id}" class="col btn btn-primary">detail</a>
                              </div>
      
                          </div>
                    </div>`;
    }
  }

  contenedor.innerHTML = tarjetas;
}

function filtroDoble() {
  let arrayFiltrado1 = filtrarPorTexto(NewEvento, input.value);
  let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1);
  mostrarCard(arrayFiltrado2, contenedorCard);
}

//search

function filtrarPorTexto(arrayDeDatos, texto) {
  let arrayFiltrado = arrayDeDatos.filter((elemento) =>
    elemento.name.toLowerCase().includes(texto.toLowerCase())
  );
  return arrayFiltrado;
}

//cheackbox

function crearcheckbox(arrayDeDatos) {
  let checks = "";
  let categoriasrepetidas = arrayDeDatos.map((elemento) => elemento.category);
  let catergorias = new Set(categoriasrepetidas);
  catergorias.forEach((elemento) => {
    checks += `<div class=" form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="${elemento}"
                    value="${elemento}">
                    <label class="form-check-label" for="${elemento}">${elemento}</label>
                </div>`;
  });
  contenedorCheckbox.innerHTML = checks;
}

function filtrarPorCategoria(arrayDeDatos) {
  let cheackboxes = document.querySelectorAll("input[type='checkbox']");
  console.log(cheackboxes);
  let arrayChecks = Array.from(cheackboxes);
  console.log(arrayChecks);
  let checkchecked = arrayChecks.filter((check) => check.checked);
  console.log(checkchecked);
  if (checkchecked.length == 0) {
    return arrayDeDatos;
  }
  let checkvalue = checkchecked.map((check) => check.value);
  console.log(checkvalue);
  let arrayFiltrado = arrayDeDatos.filter((elemento) =>
    checkvalue.includes(elemento.category)
  );
  console.log(arrayFiltrado);
  return arrayFiltrado;
}

//Nuevos datos
// renderTarjetas();
let NewEvento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
  console.log(datos);
  NewEvento = datos.events
  fecha = datos.currentDate
  console.log(fecha);
  console.log(NewEvento)
  // pintarCards(NewEvento)
  mostrarCard(NewEvento,contenedorCard)
  crearcheckbox(NewEvento)
 
  
})
.catch((error)=>console.log(error))
fetch('amazing.json')
.then((res)=>res.json())
.then((datos)=>{
    console.log(datos);
    NewEvento = datos.events
    fecha = datos.currentDate
  console.log(NewEvento)
  mostrarCard(NewEvento,contenedorCard)
  crearcheckbox(NewEvento)
})



