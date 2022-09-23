const content = () => {

function nombreUsuario(){
    
  alert("Biervenidos a Aneska - Asesroria de imagen");

  let nombre = prompt("Ingrese su nombre");

  if( nombre === ''){

    nombre = prompt("Ingrese su nombre");

 }

  alert(`Bienvenido ${nombre} ya puedes empezar a reservar`);

  
let cardAsesor = document.getElementById("cardAsesor");
const servicios = [
  {id:1, asesor:"Jhon Gomez", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-01-free-img.jpg", reserva: "Barba Express", precio: 80000, horario: "8:00am - 9:00am"},
  {id:2, asesor:"Joao Caetano", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-02-free-img.jpg", reserva: "Barba Lord", precio: 120000, horario: "9:00am - 10:00am"},
  {id:3, asesor:"Jairo Espitia", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-03-free-img.jpg", reserva: "Barba Lord Superior", precio: 60000, horario: "10:00am - 11:00am"},
];

let id = parseInt(prompt(('Reserva el servicio de tu interes: \n1: Barba Express \n2: Barba Lord \n3: Barba Lord Superior')));
// let cardAsesor = document.getElementById("cardAsesor");
let servicio = servicios.find(item => item.id === id);

if( servicios === undefined){
  alert("Servicio no identificado, por favor ingresa un servicio de la lista");
}else{
  
  alert(`${nombre} por registrarte tienes un DESCUENTO del 20% en ${servicio.reserva}`);
    let precioConDescuento = servicio.precio - (servicio.precio * 0.20);

    let itemTitle = document.createElement("div");
    itemTitle.innerHTML = `<h1 class="my-2">Bienvenido ${nombre}</h1><br><p>Gracias por preferirnos</p>`
    asesor.append(itemTitle);

    let item = document.createElement("div");
    item.innerHTML = `<div class="card mb-3">
                        <img class="card-img-top" src="${servicio.img}" alt="">
                            <div class="card-body text-center">
                              <h5 class="card-title">${servicio.asesor} sera tu asesor</h5>
                              <h6>Reserva: ${servicio.reserva}</h6>
                              <small class="card-price">Precio: <b>$ ${servicio.precio}</b> y con el descuento del 20% <span><b>$ ${precioConDescuento}</b></span></small>
                              <p class="card-hour">${servicio.horario}</div>
                              <div><button id="reservaP" class="btn btn-warning mb-3" type="button">Ver Regalo</button></div>
                            </div>
                      </div>
                      `
        cardAsesor.append(item);
}
const respuesta = () => {
  let itemTitle2 = document.createElement("div");
  itemTitle2.innerHTML = `<p class="my-2">Gracias ${nombre}<br> con este código <b class="text-warning">506077Barber</b> obtendras un descuento del 30% en tu proxima sesion</p><br><p>Te esperamos!!</p>`
  gracias.append(itemTitle2);
}
let boton = document.getElementById("reservaP");
boton.addEventListener("click", respuesta);

return nombre;

}
nombreUsuario();
}

let button = document.getElementById("reserva");
button.addEventListener("click", content)


