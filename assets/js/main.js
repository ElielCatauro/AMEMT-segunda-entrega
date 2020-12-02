'use strict'

let createHeader = (claves) => {
  //claves es un array con los nombres de las claves de nuestro objeto --> ["nombre", "cantidad", "categoria", "precio", "marca"]
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  //recorremos el arreglo de claves
  for (let i = 0; i < claves.length; i++) {
    //creamos un elemento th para cada clave
    let thEl = document.createElement("th");
    //cambiamos el innerHTML del th para que muestre cada clave
    thEl.innerHTML = claves[i];
    //agregamos el elemento th al elemento tr
    trEl.appendChild(thEl);
  }
  let thEl = document.createElement("th");
  thEl.innerHTML ='Modificar';
  trEl.appendChild(thEl);
  //agregamos el elemento tr al thead
  theadEl.appendChild(trEl);
  //agregamos el thead a nuestra tabla
  tableHardEl.appendChild(theadEl);
};

let createRow = (elemento,i) => {
  //elemento es el objeto que queremos mostrar en cada filaa --> {nombre: "Juan", apellido: "Gonzalez", edad: 31, email: "juan_gonzalez@gmail.com"}
  let trEl = document.createElement("tr");
  trEl.setAttribute('id',`row${i}`)
  //iteramos sobre las propiedades de nuestro objeto
  for (let clave in elemento) {
    //creamos un elemento td para cada propiedad
    let tdEl = document.createElement("td");
    //cambiamos su innerHTML para que muestre el valor de cada propiedad
    tdEl.innerHTML = elemento[clave];
    //agregamos el elemento td al elemento tr
    trEl.appendChild(tdEl);
  }
  let tdElimMod = document.createElement("td");
  let btnElim = document.createElement("button");
  let btnModif = document.createElement("button");
  btnElim.setAttribute('id',`btnElim${i}`);
  btnModif.setAttribute('id',`btnModif${i}`);
  btnElim.value=i;
  btnModif.value=i;
  btnModif.innerText='Modificar';
  btnElim.innerText='Eliminar';
  tdElimMod.appendChild(btnElim);
  tdElimMod.appendChild(btnModif);

  trEl.appendChild(tdElimMod);
  //devolvemos la fila creada
  return trEl;
};

let createBody = (elementos) => {
  //elementos es un arreglo con todos los objetos que queremos mostrar en nuestra tabla [{}, {}, {}]
  let tbodyEl = document.createElement("tbody");
  for (let i = 0; i < elementos.length; i++) {
    //recorremos el arreglo de objetos e invocamos la función de crear fila para cada uno de ellos
    //la función nos devuelve un elemento tr y lo agregamos a nuestro elemento tbody
    tbodyEl.appendChild(createRow(elementos[i],i));
  }
  //agregamos el elemento tbody a nuestro elemento tabla
  tableHardEl.appendChild(tbodyEl);
  // agrega funcionalidad de borrar y modificar a la tabla 
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].row=document.getElementById(`row${i}`);
    elementos[i].elim=document.getElementById(`btnElim${i}`);
    elementos[i].mod=document.getElementById(`btnModif${i}`);
    elementos[i].elim.addEventListener("click",()=>{
          elementos[i].row.parentNode.removeChild(elementos[i].row);
           });
    elementos[i].mod.addEventListener("click",()=>{});
  }
};

window.addEventListener("load", () => {
loadGPUStable();
});

