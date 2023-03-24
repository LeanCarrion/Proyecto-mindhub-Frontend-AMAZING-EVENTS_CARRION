// constante

// const contenedorCard = document.getElementById("card");
const input = document.getElementById("inputsearch");
const contenedorCheckbox = document.getElementById("checkcontainer");



//eventos

input.addEventListener("input", filtroDoble);

contenedorCheckbox, addEventListener("change", filtroDoble);

//llamadas de funciones

// mostrarCard(data.events, contenedorCard);



//funciones

// function mostrarCard(array, contenedor) {
//   if (array.length == 0) {
//     contenedor.innerHTML = "<h2>No matches!</h2>";
//     return;
//   }
//   let tarjetas = "";
//   for (dato of array) {
//     tarjetas += `<div class="card m-3 mx-5" style="width: 15rem;">
//                                     <img src="${dato.image}" class="card-img-top" alt="">
//                                     <div class="card-body">
//                                         <h5 class="card-title">${dato.name}</h5>
//                                         <p class="card-text">${dato.description}</p>
//                                         <div class="row">
//                                             <p class="col">$${dato.price}</p>
//                                             <a href="../details.html?id=${dato._id}" class="col btn btn-primary">details</a>
//                                         </div>
                                    
//                                     </div>
//                     </div>`;
//   }

//   contenedor.innerHTML = tarjetas;
// }

function filtroDoble() {
  let arrayFiltrado1 = filtrarPorTexto(NewEvento, input.value);
  let arrayFiltrado2 = filtrarPorCategoria(arrayFiltrado1);
  mostrarCard(arrayFiltrado2);
  // pintarCards(arrayFiltrado2)
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
    checks += `<div class=" form-check form-check-inline ">
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


//try y catch

// let tarjetaApi;
// const obtenerCard = async () => {
//   try {
//     const respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
//     tarjetaApi = await respuesta.json();
  
//     tarjeta1 = tarjetaApi.results
//     mostrarCard(tarjeta1, contenedorCard);
// }
//   catch(error){
//       console.log(error);
//       alert('Error')
//   }
// }
// console.log(obtenerCard);

// function mostrarCard(array, contenedor) { 
 
//   let tarjetas = "";
//   for (dato of array) {
//     tarjetas += `<div class="card m-3 mx-5" style="width: 15rem;">
//                                         <img src="${tarjetas.image}" class="card-img-top" alt="">
//                                        <div class="card-body">
//                                           <h5 class="card-title">${tarjetas.name}</h5>
//                                            <p class="card-text">${tarjetas.description}</p>
//                                             <div class="row">
//                                                 <p class="col">$${tarjetas.price}</p>
//                                               <a href="../details.html?id=${tarjetas._id}" class="col btn btn-primary">details</a>
//                                              </div>
                                        
//                                         </div>
//                         </div>`;
//   }

//   contenedor.innerHTML = tarjetas;
// }

// no sirve
// async function getTarjetas(){
//   let url = 'tarjetas.json';
//   try {
//     let respuesta = await fetch('https://mindhub-xj03.onrender.com/api/amazing');
//     return await respuesta.json();
//   } catch (error){
//     console.log(error)
//   }
// }

// async function renderTarjetas(){
//   let tarjetas = await getTarjetas();
//   let html = '';
//   tarjetas.forEach(tarjetas => {
//     let htmlSegment =`<div class="card m-3 mx-5" style="width: 15rem;">
//                                         <img src="${tarjetas.image}" class="card-img-top" alt="">
//                                        <div class="card-body">
//                                           <h5 class="card-title">${tarjetas.name}</h5>
//                                            <p class="card-text">${tarjetas.description}</p>
//                                             <div class="row">
//                                                 <p class="col">$${tarjetas.price}</p>
//                                               <a href="../details.html?id=${tarjetas._id}" class="col btn btn-primary">details</a>
//                                              </div>
                                        
//                                         </div>
//                         </div>`;
//         html += htmlSegment;
//   });
//   let container = document.querySelector('.container')
//   container.innerHTML = html;
// }

// renderTarjetas();
let NewEvento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
  console.log(datos);
  NewEvento = datos.events
  console.log(NewEvento)
  // pintarCards(NewEvento)
  mostrarCard(NewEvento)
  crearcheckbox(NewEvento)
  
})
.catch((error)=>console.log(error))



function mostrarCard(array) {
  if (array.length == 0) {
    contenedor.innerHTML = "<h2>No matches!</h2>";
    return;
  }
  let tarjetas = "";
  for (dato of array) {
    tarjetas += `<div class="card m-3 mx-4 p-0" style="width: 17rem;">
                                    <img src="${dato.image}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">${dato.name}</h5>
                                        <p class="card-text">${dato.description}</p>
                                        <div class="row">
                                            <p class="col">$${dato.price}</p>
                                            <a href="../details.html?id=${dato._id}" class="col btn btn-primary">details</a>
                                        </div>
                                    
                                    </div>
                    </div>`;
  }
  const contenedor = document.getElementById('card')
  contenedor.innerHTML = tarjetas;
}