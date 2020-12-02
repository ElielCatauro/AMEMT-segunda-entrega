'use strict'

let createInputs = (claves) => {
  for (let i = 0; i < claves.length; i++) {
    let inp = document.createElement('input');
    inp.setAttribute('id', `inp-${claves[i]}`);
    inputsEl.appendChild(inp);
  }
  let btnOk = document.createElement('button');
  let btnCancel = document.createElement('button');
  btnOk.setAttribute('id', 'btnAceptar');
  btnCancel.setAttribute('id', 'btnCancelar');
  btnCancel.innerHTML = 'Cancelar';
  btnOk.innerHTML = 'Aceptar';
  inputsEl.appendChild(btnOk);
  inputsEl.appendChild(btnCancel);
}

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
  thEl.innerHTML = 'Modificar';
  trEl.appendChild(thEl);
  //agregamos el elemento tr al thead
  theadEl.appendChild(trEl);
  //agregamos el thead a nuestra tabla
  tableHardEl.appendChild(theadEl);
};

let createRow = (elemento, i) => {
  //elemento es el objeto que queremos mostrar en cada filaa --> {nombre: "Juan", apellido: "Gonzalez", edad: 31, email: "juan_gonzalez@gmail.com"}
  let trEl = document.createElement("tr");
  trEl.setAttribute('id', `row${i}`)
  //iteramos sobre las propiedades de nuestro objeto
  for (let clave in elemento) {
    //creamos un elemento td para cada propiedad
    let tdEl = document.createElement("td");
    tdEl.setAttribute('id', `${clave}${i}`)
    //cambiamos su innerHTML para que muestre el valor de cada propiedad
    tdEl.innerHTML = elemento[clave];
    //agregamos el elemento td al elemento tr
    trEl.appendChild(tdEl);
  }
  let tdElimMod = document.createElement("td");
  let btnElim = document.createElement("button");
  let btnModif = document.createElement("button");
  btnElim.setAttribute('id', `btnElim${i}`);
  btnModif.setAttribute('id', `btnModif${i}`);
  btnElim.value = i;
  btnModif.value = i;
  btnModif.innerText = 'Modificar';
  btnElim.innerText = 'Eliminar';
  tdElimMod.appendChild(btnElim);
  tdElimMod.appendChild(btnModif);

  trEl.appendChild(tdElimMod);
  //devolvemos la fila creada
  return trEl;
};



let modifi = (elemento, i) => {
  let btnOk = document.getElementById(`btnAceptar`);
  let btnCancel = document.getElementById('btnCancelar');
  //modifica en el html
  for (let clave in elemento) {
    if ((clave != 'elim') && (clave != 'mod') && (clave != 'row')) {
      let inpEL = document.getElementById(`inp-${clave}`);
      let tdEl = document.getElementById(`${clave}${i}`);

      inpEL.value = tdEl.innerHTML;

      let sip = () => {
        tdEl.innerHTML = !!inpEL.value ? inpEL.value : tdEl.innerHTML;
        inpEL.value = '';
        btnCancel.removeEventListener('click', nop, { once: true });
      };
      let nop = () => {
        inpEL.value = '';
        btnOk.removeEventListener('click', sip, { once: true });
      };

      btnOk.addEventListener('click', sip, { once: true });

      btnCancel.addEventListener('click', nop, { once: true });
    }
  }
}



let createBody = (elementos) => {

  let tbodyEl = document.createElement("tbody");
  for (let i = 0; i < elementos.length; i++) {
    tbodyEl.appendChild(createRow(elementos[i], i));
  }
  tableHardEl.appendChild(tbodyEl);
  // agrega funcionalidad de borrar y modificar a la tabla 
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].row = document.getElementById(`row${i}`);
    elementos[i].elim = document.getElementById(`btnElim${i}`);
    elementos[i].mod = document.getElementById(`btnModif${i}`);
    elementos[i].elim.addEventListener("click", () => {
      elementos[i].row.parentNode.removeChild(elementos[i].row);
    });
    elementos[i].mod.addEventListener("click", () => {
      modifi(elementos[i], i);
    });
  }
};



window.addEventListener("load", () => {
  loadGPUStable();
});

