'use strict'


let tableHardEl = document.getElementById("tabla");
let inputsEl = document.getElementById("inputs");
let inputsBtnsEl = document.getElementById("inputsBtns");
let tituloModalEL = document.getElementById("tituloModal");

let createBtnModel = () => {
  let btnOk = document.createElement('button');
  let btnCancel = document.createElement('button');
  btnOk.setAttribute('id', 'btnAceptar');
  btnOk.setAttribute('class', 'btn  btn-secondary');
  btnOk.setAttribute('data-dismiss', "modal");
  btnCancel.setAttribute('id', 'btnCancelar');
  btnCancel.setAttribute('class', 'btn btn-dark');
  btnCancel.setAttribute('data-dismiss', "modal");
  btnCancel.innerHTML = 'Cancelar';
  btnOk.innerHTML = 'Aceptar';
  inputsBtnsEl.appendChild(btnCancel);
  inputsBtnsEl.appendChild(btnOk);
}
createBtnModel();
let btnOk = document.getElementById(`btnAceptar`);
let btnCancel = document.getElementById('btnCancelar');





let deleteRow = (elemento, i) => {
  tituloModalEL.innerText = "Eliminando fila, esta seguro?";

  for (let clave in elemento) {
    let inpEL = document.getElementById(`inp-${clave}`);
    let tdEl = document.getElementById(`${clave}${i}`);
    inpEL.value = tdEl.innerHTML;
    inpEL.disabled = true;


    let sip = () => {
      const row = document.getElementById(`row${i}`);
      row.remove();
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


let modifiRow = (elemento, i) => {
  tituloModalEL.innerText = "Modificando Fila";
  //modifica en el html
  for (let clave in elemento) {
    let inpEL = document.getElementById(`inp-${clave}`);
    let tdEl = document.getElementById(`${clave}${i}`);
    inpEL.disabled = false;
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
  thEl.innerHTML = 'Modificar/Eliminar';
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
  tdElimMod.setAttribute('class', 'btn-group');
  let btnElim = document.createElement("button");
  let btnModif = document.createElement("button");
  btnElim.setAttribute('id', `btnElim${i}`);
  btnElim.setAttribute('class', `btn btn-secondary`);
  btnElim.setAttribute('data-toggle', `modal`);
  btnElim.setAttribute('data-target', `#modalDelModAdd`);
  btnModif.setAttribute('id', `btnModif${i}`);
  btnModif.setAttribute('class', `btn btn-secondary`);
  btnModif.setAttribute('data-toggle', `modal`);
  btnModif.setAttribute('data-target', `#modalDelModAdd`);

  btnModif.innerText = 'Modificar';
  btnElim.innerText = 'Eliminar';
  tdElimMod.appendChild(btnModif);
  tdElimMod.appendChild(btnElim);
  trEl.appendChild(tdElimMod);
  btnElim.addEventListener("click", () => { deleteRow(elemento, i); });
  btnModif.addEventListener("click", () => { modifiRow(elemento, i); });
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

