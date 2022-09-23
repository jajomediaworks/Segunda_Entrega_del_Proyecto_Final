const servicios = [
    {id:1, asesor:"Jhon Gomez", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-01-free-img.jpg", reserva: "Barba Express", precio: 80000, horario: "8:00am - 9:00am"},
    {id:2, asesor:"Joao Caetano", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-02-free-img.jpg", reserva: "Barba Lord", precio: 120000, horario: "9:00am - 10:00am"},
    {id:3, asesor:"Jairo Espitia", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-03-free-img.jpg", reserva: "Barba Lord Superior", precio: 60000, horario: "10:00am - 11:00am"},
    {id:4, asesor:"Armando Escandalo", img:"https://www.labarberia.com.co/wp-content/uploads/2020/02/barber-01-free-img.jpg", reserva: "Barba Oxford", precio: 60000, horario: "10:00am - 11:00am"},
  ];


str = ``;
  servicios.forEach( function (value, index){
    // console.log(value, index);
    str = str + `<div class="col-md-3"> <div class="card mb-3">
    <img class="card-img-top" src="${value.img}" alt="">
        <div class="card-body text-center">
          <h5 class="card-title">${value.asesor} sera tu asesor</h5>
          <h6>Reserva: ${value.reserva}</h6>
          <small class="card-price">Precio: <b>$ ${value.precio}</b></small>
          <p class="card-hour">${value.horario}</div>
          <div><button for='${value.id}#${value.precio}' onclick='respuesta(this)' class="btn btn-warning mb-3" type="button">Ver Regalo</button></div>
        </div>
  </div> </div>`
  })

//   console.log(str);
  document.getElementById("maindiv").innerHTML = str;
  arr1 = [];
  arr2 = [];
  function respuesta(myvar){
    // console.log(myvar)
    let  resp = myvar.attributes.for.value;
    // console.log(resp);
    let resp1 = resp.split("#");
    console.log(resp1);

    let position = arr1.indexOf(resp1[0]);
    console.log(position);
    if(position == -1){
        arr1.push(resp1[0]);
        arr2.push(resp1[1]);
        msg = "Adicionar Reserva";
    }else{
        msg = "Reserva ya Existe";
    }

    // console.log(arr1);
    console.log(arr2);

    document.getElementById("msg").innerHTML = msg;


    final_idReserva = arr1.join(" , ");
    console.log(final_idReserva);
    document.getElementById("idReserva").innerHTML = final_idReserva;

    final_total = arr2.join("+");
    let totalReserva = eval(final_total);

    document.getElementById("total").innerHTML = totalReserva;
    myvar.style.opacity = ".5"
  }

