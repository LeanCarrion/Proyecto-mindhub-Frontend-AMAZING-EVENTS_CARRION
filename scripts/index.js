

const contenedorCard = document.getElementById('card')
const contenedorCheckbox = document.getElementById('checkcontainer')


function mostrarCard (array,contenedor){
    if(array.length == 0 ){
        contenedor.innerHTML = "<h2>no matches!</h2>"
        return
    }
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



// filtros

// constante

const input = document.getElementById('inputsearch')

//eventos

input.addEventListener('input',()=>{
    let arrayFiltrado = filtrarPorTexto(data.events, input.value)
    mostrarCard(arrayFiltrado,contenedorCard)
})

//llamadas de funciones

mostrarCard(data.events,contenedorCard)

crearcheckbox(data.events)

//funcione

//search

function filtrarPorTexto(arrayDeDatos, texto){
    let arrayFiltrado = arrayDeDatos.filter(elemento=> 
    elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

//cheackbox

function crearcheckbox (arrayDeDatos){
    let checks = ''
    let categoriasrepetidas =arrayDeDatos.map(elemento => elemento.category)
    let catergorias = new Set(categoriasrepetidas)
    catergorias.forEach(elemento => {
        checks +=`<div class=" form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio"
                    value="option">
                    <label class="form-check-label" for="inlineRadio">${elemento}</label>
                </div>`
    })
    contenedorCheckbox.innerHTML = checks
} 

/* <div class=" form-check form-check-inline">
<input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio"
    value="option">
<label class="form-check-label" for="inlineRadio">papa</label>
</div> */