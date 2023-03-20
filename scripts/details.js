// constante

const queryString = location.search

const params = new URLSearchParams (queryString)

const id = params.get("id")
const datosTargetas = data.events.filter(evento => evento.id == id)
// console.log(datosTargetas)

const tarjetasfiltrada = datosTargetas.map(evento => {
  let aux = {}
  aux.image = evento.image
  aux.name = evento.name
  aux.descriptions = evento.descriptions
  aux._id = evento._id
  return aux
})


const tarjeta = tarjetasfiltrada.find(evento => evento._id === "id")

// console.log(tarjeta)



const contenedorCard = document.getElementById("card");
contenedorCard.innerHTML = `<div class="row g-0 m-4">
<div class="col-md-4 col-sm-12 d-flex pb-3 justify-content-center ">
    <img src="${evento.image}" alt="">
</div>
<div class="col-md-6 col-sm-12 ms-md-5 card ">
    <div class="card-body">
        <h5 class="${evento.name}">Titulo</h5>
        <p class="card-text">"${evento.descriptions}"</p>
        <p>Place:</p>
        <p>Date:</p>
        <p>Price</p>

    </div>
</div>
</div>
`


