'use strict'


let tablaEl = document.getElementById("tabla");
let inputsEl = document.getElementById("inputs");
let inputsBtnsEl = document.getElementById("inputsBtns");
let tituloModalEL = document.getElementById("tituloModal");


let processBarEl = document.getElementById("processBar");
let processPercEl = document.getElementById("processPerc");
let dataParseada = [];
const timecarga = 2000;



let createBtnModel = () => {
  let btnOk = document.createElement('button');
  let btnCancel = document.createElement('button');
  btnOk.setAttribute('id', 'btnAceptar');
  btnOk.setAttribute('class', 'btn  btn-secondary');
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





let barrProceso = () => {


  processBarEl.classList.toggle("d-none");
  inputsEl.classList.toggle("d-none");
  btnOk.classList.toggle("disabled");
  btnCancel.classList.toggle("disabled");
  let auxtime = 0;
  let count = 0;
  let cargar = () => {
    auxtime += timecarga / 20;
    count += 5;
    processPercEl.style = `width: ${count}%`;
    if (count == 100) {
      clearInterval(contar);
      processBarEl.classList.toggle("d-none");
      inputsEl.classList.toggle("d-none");
      btnOk.classList.toggle("disabled");
      btnCancel.classList.toggle("disabled");
      $('#modalDelModAdd').modal('hide');
      processPercEl.style = `width: 0%`;
    }
  }
  let contar = setInterval(cargar, timecarga / 20);
}

let deleteRow = (elemento, i) => {
  tituloModalEL.innerText = "Eliminando fila, esta seguro?";
  let idEl = parseInt(document.getElementById(`id${i}`).innerText);

  for (let clave in elemento) {
    let inpEL = document.getElementById(`inp-${clave}`);
    let tdEl = document.getElementById(`${clave}${i}`);
    inpEL.value = tdEl.innerHTML;
    inpEL.disabled = true;
    let sip = () => {
      const row = document.getElementById(`row${i}`);
      try {
        row.remove();
        dataParseada.splice(dataParseada.findIndex(e => e.id == idEl), 1);
        barrProceso();
       
      }
      catch (error) {
        console.log(error);
      }
      inpEL.value = '';
    };

    btnOk.onclick = sip;
  }
}


let modifiRow = (elemento, i) => {
  tituloModalEL.innerText = "Modificando Fila";

  console.log(elemento);
  //modifica en el html
  for (let clave in elemento) {
    let inpEL = document.getElementById(`inp-${clave}`);
    let tdEl = document.getElementById(`${clave}${i}`);
    inpEL.disabled = false;
    inpEL.value = tdEl.innerHTML;
  }

  let sip = () => {
    for (let clave in elemento) {
      let inpEL = document.getElementById(`inp-${clave}`);
      let tdEl = document.getElementById(`${clave}${i}`);
      tdEl.innerHTML = !!inpEL.value ? inpEL.value : tdEl.innerHTML;
      console.log(tdEl.innerHTML);
      try {
        console.log("antes", clave, elemento[clave]);
        console.log("antes", clave, inpEL.value);

        elemento[clave] = !!inpEL.value ? inpEL.value : elemento[clave];
        console.log("despues", clave, elemento[clave]);
        console.log("despues", clave, inpEL.value);
        barrProceso();
      
      }
      catch (error) {
        console.log(error);
      }
      inpEL.value = '';
      
    }
  };

  btnOk.onclick = sip;
}


let createInputs = (claves) => {
  inputsEl.innerHTML = "";
  for (let i = 0; i < claves.length; i++) {
    let divi = document.createElement('div');
    divi.setAttribute('class', `form-group row justify-content-between`);
    let inp = document.createElement('input');
    let inpLb = document.createElement('label');
    inp.setAttribute('id', `inp-${claves[i]}`);
    inpLb.setAttribute('for', `inp-${claves[i]}`);
    inpLb.innerText = claves[i];
    divi.appendChild(inpLb);
    divi.appendChild(inp);
    inputsEl.appendChild(divi);
  }
}

let createHeader = (claves) => {
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  //recorremos el arreglo de claves
  for (let i = 0; i < claves.length; i++) {
    let thEl = document.createElement("th");
    thEl.innerHTML = claves[i];
    trEl.appendChild(thEl);
  }
  let thEl = document.createElement("th");
  thEl.innerHTML = 'Modificar/Eliminar';
  trEl.appendChild(thEl);


  theadEl.appendChild(trEl);

  tablaEl.appendChild(theadEl);
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
  tbodyEl.setAttribute("id", "cuerpoTabla")
  for (let i = 0; i < elementos.length; i++) {
    tbodyEl.appendChild(createRow(elementos[i], i));
    
  }
  tablaEl.appendChild(tbodyEl);
};


let createTable = (claves, arregloObjet) => {
  tablaEl.innerHTML = "";
  createHeader(claves);
  createBody(arregloObjet);
  createInputs(claves);
}


window.addEventListener("load", () => {
  loadTable();
});


//get
let loadTable = () => {
  fetch("https://5fcbef5e51f70e00161f21d1.mockapi.io/ListaProductos")
    .then((res) => res.json().then((data) => {
      dataParseada = data;
      //obtenemos las claves del objeto
      let claves = Object.keys(dataParseada[0]);
      createTable(claves, dataParseada);
    }))
    .catch((error) => console.log(error));
};



// recupera del document todos los elementos de filtros
let btnFiltraEL = document.getElementById('filBTN');
let btnLimpiaTablaEL = document.getElementById('btnLimpia');

let produc_NameEL = document.getElementById('produc_Name');

let precioProdMinEL = document.getElementById('precioProdMin');
let precioProdMaxEL = document.getElementById('precioProdMax');



// implementaciond e los filtros

let filtrosGPU = (incluyen1 = "", min1, max1) => {

  let claves = Object.keys(dataParseada[0]);
  let dataFiltrada = dataParseada;


  dataFiltrada = dataFiltrada.filter(e => e.producto_name.indexOf(`${incluyen1}`) !== -1);
  dataFiltrada = (min1 === undefined) ? dataFiltrada : dataFiltrada.filter(e => parseFloat(e.precio) >= min1);
  dataFiltrada = (max1 === undefined) ? dataFiltrada : dataFiltrada.filter(e => parseFloat(e.precio) <= max1);


  // createTable(claves, fil6);
  createTable(claves, dataFiltrada);
}


// implementaciond boton para buscar con los filtros

btnFiltraEL.addEventListener('click', () => {

  let incluyen1 = `${produc_NameEL.value}`;
 
  let min1 = isNaN(parseFloat(precioProdMinEL.value)) ? undefined : parseFloat(precioProdMinEL.value);
  let max1 = isNaN(parseFloat(precioProdMaxEL.value)) ? undefined : parseFloat(precioProdMaxEL.value);

  filtrosGPU(incluyen1,min1, max1);
});


// implementacion limpiar filtrados 

btnLimpiaTablaEL.addEventListener('click', () => {
  createTable(Object.keys(dataParseada[0]), dataParseada)
  produc_NameEL.value = "";
  precioProdMinEL.value = "";
  precioProdMaxEL.value = "";

});

let addRow = () => {
  tituloModalEL.innerText = "Agregando una fila";
  let claves = Object.keys(dataParseada[0]);
  claves.forEach(e => {
    let inpEL = document.getElementById(`inp-${e}`);
    inpEL.disabled = false;
    inpEL.value = '';

  });

  let sip = () => {
    let aux = {};
    try {

      claves.forEach(e => {
        let inpEL = document.getElementById(`inp-${e}`);
        aux[e] = inpEL.value;
      })

      dataParseada.push(aux);

      document.getElementById("cuerpoTabla").appendChild(createRow(aux, dataParseada.length - 1));
      barrProceso();
    }
    catch (error) {
      console.log(error);
    }

  };

  btnOk.onclick = sip;
}

let addBTN = document.getElementById("addBTN");
addBTN.addEventListener('click', addRow);