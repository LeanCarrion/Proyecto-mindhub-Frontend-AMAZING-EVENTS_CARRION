let NewEvento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
  console.log(datos);
  NewEvento = datos.events
  console.log(NewEvento)
})
.catch((error)=>console.log(error))
fetch('amazing.json')
.then((res)=>res.json())
.then((datos)=>{
    console.log(datos);
    datos = datos.events
    console.log(datos)
})