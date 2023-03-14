
const contenedorCard = document.getElementById('card')
  

function mostrarCard (array,contenedor){
    let tarjetas = ''
    
    
for (dato of array) {
    if(data.currentDate<dato.date){
        tarjetas += `<div class="card m-3 mx-5" style="width: 18rem;">
                        <img src="${dato.image}" class="card-img-top" alt="">
                        <div class="card-body">
                        <h5 class="card-title">${dato.name}</h5>
                        <p class="card-text">${dato.description}</p>
                        <a href="../details.html" class="btn btn-primary">detail</a>
                        </div>
                    </div>`

    }
}

contenedor.innerHTML = tarjetas
}

mostrarCard(data.events,contenedorCard)