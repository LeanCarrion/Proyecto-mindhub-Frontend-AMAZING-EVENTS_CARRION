let Evento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{

  //   console.log(datos);
  
Evento = datos.events
Evento.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
Evento.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})

  
  console.log(Evento)

let eventsUtiles = Evento.filter((elemento)=>(elemento.assistance))
  console.log(eventsUtiles)
  eventsUtiles.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
  eventsUtiles.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})
  
  

// console.log(Evento)
console.log(eventsUtiles)
  
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

let tEventStat = document.getElementById("firstTable");

    function primeratabla(elemtento1, elemtento2,elemento3) {
      tEventStat.innerHTML += `
                <tr>
                <td>${elemtento1.name} - ${elemtento1.porcentage}%</td>
                <td>${elemtento2.name} - ${elemtento2.porcentage}%</td>
                <td>${elemento3.name} - ${elemento3.capacity}</td>
                
              </tr>
                `;
    }
primeratabla(mostAftendances,lowestPercentage,mostCapacity);

//tabla Upcoming events Statistics




let EventsForCategory = [];
    EventsForCategory.push(Evento.filter((event) => event.category === "Food"));
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Cinema")
    );
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Party")
    );
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Books")
    );
    EventsForCategory.push(Evento.filter((event) => event.category === "Race"));
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Concert")
    );
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Museum")
    );

    EventsForCategory = EventsForCategory.filter((array) => array.length !== 0);
    console.log(EventsForCategory)


  





  
  

  
  
  

  
  
})
.catch((error)=>console.log(error))
fetch('amazing.json')
.then((res)=>res.json())
.then((datos)=>{
   
    //   console.log(datos);
  
Evento = datos.events
Evento.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
Evento.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})

  
  console.log(Evento)

let eventsUtiles = Evento.filter((elemento)=>(elemento.assistance))
  console.log(eventsUtiles)
  eventsUtiles.map((elemento) => { elemento.porcentage = ((elemento.assistance * 100)/elemento.capacity).toFixed(2);})
  eventsUtiles.map((elemento) => { elemento.revenues = ((elemento.assistance * elemento.price).toFixed(2));})
  
  

// console.log(Evento)
console.log(eventsUtiles)
  
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

//tabla Upcoming events Statistics




let EventsForCategory = [];
    EventsForCategory.push(Evento.filter((event) => event.category === "Food"));
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Cinema")
    );
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Party")
    );
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Books")
    );
    EventsForCategory.push(Evento.filter((event) => event.category === "Race"));
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Concert")
    );
    EventsForCategory.push(
      Evento.filter((event) => event.category === "Museum")
    );

    EventsForCategory = EventsForCategory.filter((array) => array.length !== 0);
    console.log(EventsForCategory)
   
})

