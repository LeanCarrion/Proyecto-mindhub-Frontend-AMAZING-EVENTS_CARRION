let Evento 
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((res)=>res.json())
.then((datos)=>{
//   console.log(datos);
  Evento = datos.events
//   console.log(Evento)



  let otra = Evento.filter((elemento)=>(elemento.assistance))
  console.log(otra)
  let cave = otra.map((elemento) => (elemento.assistance * 100)/elemento.capacity);
  console.log(cave)
  let orden = cave.sort()
  console.log(orden)
  let masAsistencia = orden[0]
  console.log(masAsistencia)
  
  

  
  
})
// .catch((error)=>console.log(error))
// fetch('amazing.json')
// .then((res)=>res.json())
// .then((datos)=>{
//     console.log(datos);
//     let Evento = datos.events
//     console.log(Evento)
    
   
// })

// function porcentaje(objeto){
//   per = (objeto.assistance * 100)/objeto.capacity
//   return per    
// }

//  function arrayPorcentaje(array) {
//     Aper = array.map(porcentaje())
// }

// events.map((event) => {
//     event.percentageOfAssitance = (
//       (event.assistance *100)/ event.capacity 
//     ).toFixed(2);
//     event.revenues = event.assistance * event.price;
//   });



  function crearcheckbox(arrayDeDatos) {
    let checks = "";
    let cave = Evento.map((elemento) => (elemento.assistance * 100)/elemento.capacity);
    let catergorias = new Set(categoriasrepetidas);
    catergorias.forEach((elemento) => {
      checks += `<div class=" form-check form-check-inline ">
                      <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="${elemento}"
                      value="${elemento}">
                      <label class="form-check-label" for="${elemento}">${elemento}</label>
                  </div>`;
    });
    contenedorCheckbox.innerHTML = checks;
  }