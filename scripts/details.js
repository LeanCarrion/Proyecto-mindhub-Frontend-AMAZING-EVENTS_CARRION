

const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');
console.log(id);

// aca arranca

const datosTargetas = data.events.filter(evento => evento._id == id);
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
containerCard.innerHTML = `<div class="row g-0 m-4">
<div class="col-md-4 col-sm-12 d-flex pb-3 justify-content-center ">
    <img src="${tarjeta.image}" alt="${tarjeta.name}">
</div>
<div class="col-md-6 col-sm-12 ms-md-5 card ">
    <div class="card-body">
        <h5 class="">${tarjeta.name}</h5>
        <p class="card-text">${tarjeta.description}</p>
        <p>Place: ${tarjeta.place}</p>
        <p>Date: ${tarjeta.date}</p>
        <p>Price: ${tarjeta.price}</p>

    </div>
</div>
</div>
`
