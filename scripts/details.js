// constante

const queryString = location.search
const params = new URLSearchParams (queryString)
const id = params.get("id")
const datosTargetas = data.events.filter(evento => evento.id == id)
console.log(datosTargetas)

// const contenedorCard = document.getElementById("card");

//Funciones

// function mostrarCard(array, contenedor) {
    
//     let tarjetas = "";
//     for (dato of array) {
//       tarjetas += `<div class="row g-0 m-4">
//                         <div class="col-md-4 col-sm-12 d-flex pb-3 justify-content-center ">
//                             <img src="./assets/Museum_Tour.jpg" class="img-fluid rounded-start " alt="museo">
//                         </div>
//                         <div class="col-md-6 col-sm-12 ms-md-5 card ">
//                             <div class="card-body">
//                                 <h5 class="card-title">Titulo</h5>
//                                 <p class="card-text">description</p>
//                                 <p>Place:</p>
//                                 <p>Date:</p>
//                                 <p>Price</p>

//                             </div>
//                         </div>
//                     </div>`;
//     }
  
//     contenedor.innerHTML = tarjetas;
//   }

  //llamadas de funciones

// mostrarCard(data.events, contenedorCard);

// const div = document.querySelector(",container")
// div.innerHTML =`<div class="row g-0 m-4">
// <div class="col-md-4 col-sm-12 d-flex pb-3 justify-content-center ">
//     <img src="./assets/Museum_Tour.jpg" class="img-fluid rounded-start " alt="museo">
// </div>
// <div class="col-md-6 col-sm-12 ms-md-5 card ">
//     <div class="card-body">
//         <h5 class="card-title">Titulo</h5>
//         <p class="card-text">description</p>
//         <p>Place:</p>
//         <p>Date:</p>
//         <p>Price</p>

//     </div>
// </div>
// </div>`