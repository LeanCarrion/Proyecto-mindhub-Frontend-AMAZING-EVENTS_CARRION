

const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');
console.log(id);


// aca pruebo si funciona
// renderTarjetas();
let NewEvento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
  // console.log(datos);
  NewEvento = datos.events
  console.log(NewEvento)
  // pintarCards(NewEvento)
  // mostrarCard(NewEvento)
  // crearcheckbox(NewEvento)
  
const datosTargetas = NewEvento.filter(evento => evento._id == id);
console.log(datosTargetas)

const tarjetasfiltrada = datosTargetas.map(evento => {
  let aux = {};
  aux.image = evento.image;
  aux.name = evento.name;
  aux.description = evento.description;
  aux.place = evento.place;
  aux.date = evento.date;
  aux.price = evento.price;
  aux._id = evento._id;
  return aux;
});
console.log(tarjetasfiltrada)




const tarjeta = tarjetasfiltrada.find(evento => evento._id == id);

console.log(tarjeta);

const containerCard = document.getElementById("cardDetails");
containerCard.innerHTML = `
<div class="card mb-3 px-0  px-md-0" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${tarjeta.image}" class="img-fluid rounded-start" alt="${tarjeta.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${tarjeta.name}</h5>
        <p class="card-text">${tarjeta.description}</p>
        <p class="card-text" >Place: ${tarjeta.place}</p>
        <p class="card-text" >Date: ${tarjeta.date}</p>
        <p class="card-text" >Price: ${tarjeta.price}</p>
        
      </div>
    </div>
  </div>
</div>
`
  
})
.catch((error)=>console.log(error))


// aca arranca

// const datosTargetas = NewEvento.filter(evento => evento._id == id);
// console.log(datosTargetas)

// const tarjetasfiltrada = datosTargetas.map(evento => {
//   let aux = {};
//   aux.image = evento.image;
//   aux.name = evento.name;
//   aux.description = evento.description;
//   aux.place = evento.place;
//   aux.date = evento.date;
//   aux.price = evento.price;
//   aux._id = evento._id;
//   return aux;
// });
// console.log(tarjetasfiltrada)




// const tarjeta = tarjetasfiltrada.find(evento => evento._id == id);

// console.log(tarjeta);

// const containerCard = document.getElementById("cardDetails");
// containerCard.innerHTML = `
// <div class="card mb-3" style="max-width: 700px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="${tarjeta.image}" class="img-fluid rounded-start" alt="${tarjeta.name}">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${tarjeta.name}</h5>
//         <p class="card-text">${tarjeta.description}</p>
//         <p class="card-text" >Place: ${tarjeta.place}</p>
//         <p class="card-text" >Date: ${tarjeta.date}</p>
//         <p class="card-text" >Price: ${tarjeta.price}</p>
        
//       </div>
//     </div>
//   </div>
// </div>
// `
