

const contenedorCard = document.getElementById('card')


function mostrarCard (array,contenedor){
    let tarjetas = ''
for (dato of array) {
            tarjetas += `<div class="card m-3 mx-5" style="width: 18rem;">
                    <img src="${dato.image}" class="card-img-top" alt="">
                    <div class="card-body">
                    <h5 class="card-title">${dato.name}</h5>
                    <p class="card-text">${dato.description}</p>
                    <a href="../details.html" class="btn btn-primary">detail</a>
                    </div>
                </div>`
                 
}

contenedor.innerHTML = tarjetas
}

mostrarCard(data.events,contenedorCard)

// filtros

// constante

const input = document.getElementById('inputsearch')

//eventos

input.addEventListener('input',()=>{
    let arrayFiltrado = filtrarPorTexto(data.events, input.value)
    mostrarCard(arrayFiltrado,contenedorCard)
})

//llamadas de fUnciones

//funciones

function filtrarPorTexto(arrayDeDatos, texto){
    let arrayFiltrado = arrayDeDatos.filter(elemento=> 
    elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}


