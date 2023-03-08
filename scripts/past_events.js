const contenedorCard = document.getElementById('card')
  

function mostrarCard (array,contenedor){
    let tarjetas = ''
    
    
for (dato of array) {
    if(data.currentDate>dato.date){
        tarjetas += `<div class="card m-3 mx-5" style="width: 14rem;">
                    <img src="${dato.image}" class="card-img-top mt-2 h-100" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${dato.name}</h5>
                        <p class="card-text">${dato.description}</p>
                    </div>

                    <div class="card-body row d-flex">
                        <p class="card-link d-flex col row">$${dato.price}</p>
                        <button type="button" class="btn btn-primary card-link col row">See more</button>
                    </div>
                 </div>`

    }
}

contenedor.innerHTML = tarjetas
}

mostrarCard(data.events,contenedorCard)