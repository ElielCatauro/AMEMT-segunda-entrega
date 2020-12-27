'use strict'


let tableHardEl = document.getElementById("tabla");
let inputsEl = document.getElementById("inputs");
let inputsBtnsEl = document.getElementById("inputsBtns");
let tituloModalEL = document.getElementById("tituloModal");
//let modalEL = new bootstrap.Modal(document.getElementById("modalDelModAdd")); lineas 78-127-374


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
        //modalEL.hide();

      }
      catch (error) {
        console.log(error);
      }
      inpEL.value = '';
      //btnCancel.removeEventListener('click', nop, { once: true });
    };
    /*
    let nop = () => {
      inpEL.value = '';
      //btnOk.removeEventListener('click', sip, { once: true });
    };
    //btnCancel.addEventListener('click', nop, { once: true });
    btnCancel.onclick = nop;*/

    //btnOk.addEventListener('click', sip, { once: true });
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
        //modalEL.hide();

      }
      catch (error) {
        console.log(error);
      }
      inpEL.value = '';
      //btnCancel.removeEventListener('click', nop, { once: true });
    }
  };
  /*   let nop = () => {
      inpEL.value = '';
      // btnOk.removeEventListener('click', sip, { once: true });
    };
    //btnCancel.addEventListener('click', nop, { once: true });
    btnCancel.onclick = nop; */

  //btnOk.addEventListener('click', sip, { once: true });
  btnOk.onclick = sip;
}


let createInputs = (claves) => {
  inputsEl.innerHTML = "";
  claves.forEach(clave => {
 /*  for (let i = 0; i < claves.length; i++) { */
    let divi = document.createElement('div');
    divi.setAttribute('class', `form-group row justify-content-between`);
    let inp = document.createElement('input');
    let inpLb = document.createElement('label');
    inp.setAttribute('id', `inp-${clave}`);
    inpLb.setAttribute('for', `inp-${clave}`);
    inpLb.innerText = clave;
    divi.appendChild(inpLb);
    divi.appendChild(inp);
    inputsEl.appendChild(divi);
  })
}

let createHeader = (claves) => {
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  //recorremos el arreglo de claves
  claves.forEach(clave => {
/*   for (let i = 0; i < claves.length; i++) { */
    let thEl = document.createElement("th");
    thEl.innerHTML = clave;
    trEl.appendChild(thEl);
  })
  let thEl = document.createElement("th");
  thEl.innerHTML = 'Modificar/Eliminar';
  trEl.appendChild(thEl);


  theadEl.appendChild(trEl);

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
  tbodyEl.setAttribute("id", "cuerpoTabla")
  let i=0;
  elementos.forEach(elemento =>{
    tbodyEl.appendChild(createRow(elemento,i));
    i++;
  })
 /*  for (let i = 0; i < elementos.length; i++) {
    tbodyEl.appendChild(createRow(elementos[i], i));
  } */
  tableHardEl.appendChild(tbodyEl);
};


let createTable = (claves, arregloObjet) => {
  tableHardEl.innerHTML = "";
  createHeader(claves);
  createBody(arregloObjet);
  createInputs(claves);
}


window.addEventListener("load", () => {
  loadTable();
});


//get
let loadTable = () => {
  fetch("https://5fcbef5e51f70e00161f21d1.mockapi.io/gups")
    .then((res) => res.json().then((data) => {
      dataParseada = data;
      //obtenemos las claves del objeto
      let claves = Object.keys(dataParseada[0]);
      createTable(claves, dataParseada);
    }))
    .catch((error) => console.log(error));
};

/* intento de carga desde un json 
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
 
*/



// recupera del document todos los elementos de filtros
let btnFiltraEL = document.getElementById('filBTN');

let btnLimpiaTablaEL = document.getElementById('btnLimpia');

let filGPU_NameEL = document.getElementById('filGPU_Name');

let filTEST_DateEL = document.getElementById('filTEST_Date');

let filG3D_MarkMinEL = document.getElementById('filG3D_MarkMin');
let filG3D_MarkMaxEL = document.getElementById('filG3D_MarkMax');

let filG2D_MarkMinEL = document.getElementById('filG2D_MarkMin');
let filG2D_MarkMaxEL = document.getElementById('filG2D_MarkMax');


// implementaciond e los filtros

let filtrosGPU = (incluyen1 = "", incluyen2 = "", min1, max1, min2, max2) => {

  /*  let claves = Object.keys(dataParseada[0]);
   let fil1 = dataParseada.filter(e => e.GPU_Name.indexOf(`${incluyen1}`) !== -1);
   let fil2 = fil1.filter(e => e.TEST_Date.indexOf(`${incluyen2}`) !== -1);
   let fil3 = fil2.filter(e => e.G3D_Mark >= min1);
   let fil4 = fil3.filter(e => e.G3D_Mark <= max1);
   let fil5 = fil4.filter(e => e.G2D_Mark >= min2);
   let fil6 = fil5.filter(e => e.G2D_Mark <= max2);
   */

  let claves = Object.keys(dataParseada[0]);
  let dataFiltrada = dataParseada;


  dataFiltrada = dataFiltrada.filter(e => e.GPU_Name.indexOf(`${incluyen1}`) !== -1);
  dataFiltrada = dataFiltrada.filter(e => e.TEST_Date.indexOf(`${incluyen2}`) !== -1);
  dataFiltrada = (min1 === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G3D_Mark >= min1);
  dataFiltrada = (max1 === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G3D_Mark <= max1);
  dataFiltrada = (min2 === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G2D_Mark >= min2);
  dataFiltrada = (max2 === undefined) ? dataFiltrada : dataFiltrada.filter(e => e.G2D_Mark <= max2);

  // createTable(claves, fil6);
  createTable(claves, dataFiltrada);
}


// implementaciond boton para buscar con los filtros

btnFiltraEL.addEventListener('click', () => {

  let incluyen1 = `${filGPU_NameEL.value}`;
  let incluyen2 = `${filTEST_DateEL.value}`;
  let min1 = isNaN(parseInt(filG3D_MarkMinEL.value)) ? undefined : parseInt(filG3D_MarkMinEL.value);
  let max1 = isNaN(parseInt(filG3D_MarkMaxEL.value)) ? undefined : parseInt(filG3D_MarkMaxEL.value);
  let min2 = isNaN(parseInt(filG2D_MarkMinEL.value)) ? undefined : parseInt(filG2D_MarkMinEL.value);
  let max2 = isNaN(parseInt(filG2D_MarkMaxEL.value)) ? undefined : parseInt(filG2D_MarkMaxEL.value);
  filtrosGPU(incluyen1, incluyen2, min1, max1, min2, max2);
});


// implementacion limpiar filtrados 

btnLimpiaTablaEL.addEventListener('click', () => {
  createTable(Object.keys(dataParseada[0]), dataParseada)
  filGPU_NameEL.value = "";
  filTEST_DateEL.value = "";
  filG3D_MarkMinEL.value = "";
  filG3D_MarkMaxEL.value = "";
  filG2D_MarkMinEL.value = "";
  filG2D_MarkMaxEL.value = "";
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
      //modalEL.hide();

    }
    catch (error) {
      console.log(error);
    }

    //btnCancel.removeEventListener('click', nop, { once: true });
  };
  /*
  let nop = () => {
 
   // btnOk.removeEventListener('click', sip, { once: true });
  };
 
   //btnCancel.addEventListener('click', nop, { once: true });
   btnCancel.onclick=nop;*/

  //btnOk.addEventListener('click', sip, { once: true });
  btnOk.onclick = sip;
}

let addBTN = document.getElementById("addBTN");
addBTN.addEventListener('click', addRow);

