
//Funcion
let primeraTabla = document.getElementById("firstTable");
let segundaTabla =  document.querySelector('#secondTable');
let terceraTabla =  document.querySelector('#thirdTable');

    function primeratabla(elemtento1, elemtento2,elemento3) {
      primeraTabla.innerHTML += `
                <tr>
                <td>${elemtento1.name} - ${elemtento1.porcentage}%</td>
                <td>${elemtento2.name} - ${elemtento2.porcentage}%</td>
                <td>${elemento3.name} - ${elemento3.capacity}</td>
                
              </tr>
                `;
    }

    function tablaUpcoming(item1) {
      for (var i = 0; i < item1.length ; i++) {
      segundaTabla.innerHTML += `
                <tr>
                <td>${item1[i].category}</td>
                <td>revenue</td>
                <td>percentaje</td>
                `;
      }
    }

let Evento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
  Evento = datos.events
  let fechaActual = datos.currentDate
  console.log(fechaActual)
  //   console.log(datos);


  

  // calculo y filtro de los porcentaje y ganancias

let eventsUtiles = Evento.filter((elemento)=>(elemento.assistance))
  // console.log(eventsUtiles)
  eventsUtiles.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
  eventsUtiles.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})
  
  

// console.log(eventsUtiles)

//ordenamiento de los datos segun capacidad
  
let eventsCapacity = eventsUtiles.sort(function (a, b) {
    if (a.capacity> b.capacity) {
      return 1;
    }
    if (a.capacity < b.capacity) {
      return -1;
    }
    
    return 0;
  });
  mostCapacity =eventsCapacity[eventsCapacity.length - 1]
  // console.log(mostCapacity)
  
//ordenamiento de los datos segun porcentaje de asistencia

let orden = eventsUtiles.sort(function (a, b) {
  if (a.porcentage> b.porcentage) {
    return 1;
  }
  if (a.porcentage < b.porcentage) {
    return -1;
  }
  
  return 0;
});

// seleccion de los mas y menos porcentajes de asistencia 

let lowestPercentage = orden[0]
// console.log(lowestPercentage)


let mostAftendances = orden[orden.length- 1]
// console.log(mostAftendances)

// llamado de funcion
primeratabla(mostAftendances,lowestPercentage,mostCapacity);


//tabla Upcoming events Statistics

let eventosPasados = Evento.filter(eventoPast => eventoPast.date < fechaActual)
let eventosFuturos =  Evento.filter(eventoUp => eventoUp.date > fechaActual);

console.log(eventosPasados)
console.log(eventosFuturos)

// agrego revenues y assistences a eventos futuros

eventosFuturos.map((ele) => { ele.porcentage = ((ele.estimate * 100)/ele.capacity).toFixed(2);})
eventosFuturos.map((ele) => { ele.revenues = ((ele.estimate * ele.price).toFixed(2));})


let categoriasEventosFuturos = [];
let categoriasEventosPasados = [];

function filtroCategorias(array, nuevoArray) {
  array.forEach( evento => {
    if (!nuevoArray.includes(evento.category)) {
      nuevoArray.push(evento.category);
    }
  })
  return nuevoArray;
}
filtroCategorias(eventosFuturos, categoriasEventosFuturos);
filtroCategorias(eventosPasados, categoriasEventosPasados);

console.log(categoriasEventosFuturos)
console.log(categoriasEventosPasados)

// encontrar los eventos que tengan las categorias filtradas.
let eventosFuturosConCategoria = []
let eventosPasadosConCategoria = []

function eventosQueCompartenCategoria(array, arrayNuevo, tipoEvento) {
  array.map( categoria => {
    //arrayNuevo.push( tipoEvento.filter(evento => evento.category === categoria))
    arrayNuevo.push({
      category: categoria,
      eventos: tipoEvento.filter(evento => evento.category === categoria)
    })
  })
  return arrayNuevo;
}
eventosQueCompartenCategoria(categoriasEventosFuturos, eventosFuturosConCategoria, eventosFuturos);
eventosQueCompartenCategoria(categoriasEventosPasados, eventosPasadosConCategoria, eventosPasados)

console.log(eventosFuturosConCategoria);
console.log(eventosPasadosConCategoria);

// tablaUpcoming(eventosFuturosConCategoria)

// GANANCIAS

//UPCOMING GANANCIAS

   
let arrayFinal = [];

for (i = 0 ; i < eventosFuturosConCategoria; i++) {
  let categoryInicial = 0

  for (evento of eventos){
    let revenuesInicial = 0
    let revenuesFinal = revenuesInicial + 1

  
  
}
arrayFinal.push({
  revenues: revenuesFinal
})
}





console.log(arrayFinal)


//
  
})

// a partir de aca ya no lo comento porque es repetir lo de arriba


.catch((error)=> {
  fetch('../amazing.json')
.then((res)=>res.json())
.then((datos)=>{
  Evento = datos.events
    //   console.log(datos);
    Evento.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
    Evento.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})
    
    //console.log(Evento)
  
  let eventsUtiles = Evento.filter((elemento)=>(elemento.assistance))
    //console.log(eventsUtiles)
    eventsUtiles.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
    eventsUtiles.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})
  
  // console.log(Evento)
  //console.log(eventsUtiles)
    
  let eventsCapacity = eventsUtiles.sort(function (a, b) {
      if (a.capacity> b.capacity) {
        return 1;
      }
      if (a.capacity < b.capacity) {
        return -1;
      }
      
      return 0;
    });
    mostCapacity =eventsCapacity[eventsCapacity.length - 1]
    // console.log(mostCapacity)

  let orden = eventsUtiles.sort(function (a, b) {
    if (a.porcentage> b.porcentage) {
      return 1;
    }
    if (a.porcentage < b.porcentage) {
      return -1;
    }
    
    return 0;
  });
  let lowestPercentage = orden[0]
  // console.log(lowestPercentage)
  
  
  let mostAftendances = orden[orden.length- 1]
  // console.log(mostAftendances)

  primeratabla(mostAftendances,lowestPercentage,mostCapacity);
})

})

