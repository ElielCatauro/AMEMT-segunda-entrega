'use strict'



let deleteRow = (elemento,i) => {


  const row = document.getElementById(`row${i}`);
  row.remove();


}


let modifiRow = (elemento, i) => {
  let btnOk = document.getElementById(`btnAceptar`);
  let btnCancel = document.getElementById('btnCancelar');
  //modifica en el html
  for (let clave in elemento) {
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
  let trEl = document.createElement("tr");
  trEl.setAttribute('id', `row${i}`)
  for (let clave in elemento) {
    let tdEl = document.createElement("td");
    tdEl.setAttribute('id', `${clave}${i}`)
    tdEl.innerHTML = elemento[clave];
    trEl.appendChild(tdEl);
  }
  let tdElimMod = document.createElement("td");
  let btnElim = document.createElement("button");
  let btnModif = document.createElement("button");
  btnElim.setAttribute('id', `btnElim${i}`);
  btnModif.setAttribute('id', `btnModif${i}`);
  btnModif.innerText = 'Modificar';
  btnElim.innerText = 'Eliminar';
  tdElimMod.appendChild(btnElim);
  tdElimMod.appendChild(btnModif);
  trEl.appendChild(tdElimMod);
  btnElim.addEventListener("click", () => { deleteRow(elemento,i);  });
  btnModif.addEventListener("click", () => { modifiRow(elemento, i);  });
  //devolvemos la fila creada
  return trEl;
};




let createBody = (elementos) => {

  let tbodyEl = document.createElement("tbody");
  for (let i = 0; i < elementos.length; i++) {
    tbodyEl.appendChild(createRow(elementos[i], i));
  }
  tableHardEl.appendChild(tbodyEl);
};


let createTable = (claves, arregloObjet) => {
  createHeader(claves);
  createBody(arregloObjet);
  createInputs(claves);
}


window.addEventListener("load", () => {
  loadGPUStable();
});

let tableHardEl = document.getElementById("tabla");
let inputsEl = document.getElementById("inputs");

//convertimos la data en formato JSON a un objeto JS para poder acceder a sus propiedades



/* intento de carga desde un json */
let loadGPUStable = () => {
  fetch('https://api.jsonbin.io/b/5fc69853045eb86f1f89c24d').then((res) => {  //fetch('"../json/CPUS.json"').then((res)=>{
    res.json().then(
      dataProcess => {
        let dataParseada = dataProcess;

        //obtenemos las claves del objeto
        let claves = Object.keys(dataParseada.GPUS[0]);
        createTable(claves, dataParseada.GPUS);
      }
          ,

    )
  }
    ,

  );
}

