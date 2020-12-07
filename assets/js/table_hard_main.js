'use strict'


let tableHardEl = document.getElementById("tabla");
let inputsEl = document.getElementById("inputs");
let inputsBtnsEl = document.getElementById("inputsBtns");
let tituloModalEL = document.getElementById("tituloModal");
let dataParseada = [];

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
      }
      catch (error) {
        console.log(error);
      }
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
  let idEl = parseInt(document.getElementById(`id${i}`).innerText);
  console.log(elemento);
  //modifica en el html
  for (let clave in elemento) {
    let inpEL = document.getElementById(`inp-${clave}`);
    let tdEl = document.getElementById(`${clave}${i}`);
    inpEL.disabled = false;
    inpEL.value = tdEl.innerHTML;
    
    let sip = () => {
      tdEl.innerHTML = !!inpEL.value ? inpEL.value : tdEl.innerHTML;
      try {

        elemento[clave]=inpEL.value;
      
      }
      catch (error) {
        console.log(error);
      }
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

let filtContEl = document.getElementById('filtroscont');

let createFilInput = () => {
  let tableEl = document.createElement("table");
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  let thEl0 = document.createElement("th");
  let thEl1 = document.createElement("th");
  let thEl2 = document.createElement("th");
  let thEl3 = document.createElement("th");
  let thEl4 = document.createElement("th");
  let thEl5 = document.createElement("th");
  let btnFil = document.createElement('button');
  btnFil.setAttribute('class', `btn btn-secondary`);
  btnFil.setAttribute("id", "filBTN");
  btnFil.innerText = 'Filtrar';
  let btnLimpia = document.createElement('button');
  btnLimpia.setAttribute('class', `btn btn-secondary`);
  btnLimpia.setAttribute("id", "btnLimpia");
  btnLimpia.innerText = 'Limpiar';
  thEl5.setAttribute('class', 'btn-group')
  thEl5.appendChild(btnFil);
  thEl5.appendChild(btnLimpia);

  let filGPU_Name = document.createElement('input');
  filGPU_Name.setAttribute('id', 'filGPU_Name');

  let filTEST_Date = document.createElement('input');
  filTEST_Date.setAttribute('id', 'filTEST_Date');

  let filG3D_MarkMin = document.createElement('input');
  filG3D_MarkMin.setAttribute('id', 'filG3D_MarkMin');
  let filG3D_MarkMax = document.createElement('input');
  filG3D_MarkMax.setAttribute('id', 'filG3D_MarkMax');

  let filG2D_MarkMin = document.createElement('input');
  filG2D_MarkMin.setAttribute('id', 'filG2D_MarkMin');
  let filG2D_MarkMax = document.createElement('input');
  filG2D_MarkMax.setAttribute('id', 'filG2D_MarkMax');

  thEl1.innerHTML = 'contiene';
  thEl1.appendChild(filGPU_Name);

  thEl2.innerHTML = 'contiene';
  thEl2.appendChild(filTEST_Date);

  thEl3.innerHTML = 'min';
  thEl3.appendChild(filG3D_MarkMin);
  thEl3.innerHTML += 'max';
  thEl3.appendChild(filG3D_MarkMax);

  thEl4.innerHTML = 'min';
  thEl4.appendChild(filG2D_MarkMin);
  thEl4.innerHTML += 'max';
  thEl4.appendChild(filG2D_MarkMax);


  trEl.appendChild(thEl0);
  trEl.appendChild(thEl1);
  trEl.appendChild(thEl2);
  trEl.appendChild(thEl3);
  trEl.appendChild(thEl4);
  trEl.appendChild(thEl5);
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
  tableHardEl.appendChild(tableEl);
  filtContEl.appendChild(tableEl);

}
createFilInput();

let btnFiltraEL = document.getElementById('filBTN');

let btnLimpiaTablaEL = document.getElementById('btnLimpia');

let filGPU_NameEL = document.getElementById('filGPU_Name');

let filTEST_DateEL = document.getElementById('filTEST_Date');

let filG3D_MarkMinEL = document.getElementById('filG3D_MarkMin');
let filG3D_MarkMaxEL = document.getElementById('filG3D_MarkMax');

let filG2D_MarkMinEL = document.getElementById('filG2D_MarkMin');
let filG2D_MarkMaxEL = document.getElementById('filG2D_MarkMax');




let filtrosGPU = (incluyen1 = "", incluyen2 = "", min1 = 200, max1 = 30000, min2 = 0, max2 = 2000) => {

  let claves = Object.keys(dataParseada[0]);
  let fil1 = dataParseada.filter(e => e.GPU_Name.indexOf(`${incluyen1}`) !== -1);
  let fil2 = fil1.filter(e => e.TEST_Date.indexOf(`${incluyen2}`) !== -1);
  let fil3 = fil2.filter(e => e.G3D_Mark >= min1);
  let fil4 = fil3.filter(e => e.G3D_Mark <= max1);
  let fil5 = fil4.filter(e => e.G2D_Mark >= min2);
  let fil6 = fil5.filter(e => e.G2D_Mark <= max2);

  createTable(claves, fil6);
}



btnFiltraEL.addEventListener('click', () => {

  let incluyen1 = `${filGPU_NameEL.value}`;
  let incluyen2 = `${filTEST_DateEL.value}`;
  let min1 = isNaN(parseInt(filG3D_MarkMinEL.value)) ? undefined : parseInt(filG3D_MarkMinEL.value);
  let max1 = isNaN(parseInt(filG3D_MarkMaxEL.value)) ? undefined : parseInt(filG3D_MarkMaxEL.value);
  let min2 = isNaN(parseInt(filG2D_MarkMinEL.value)) ? undefined : parseInt(filG2D_MarkMinEL.value);
  let max2 = isNaN(parseInt(filG2D_MarkMaxEL.value)) ? undefined : parseInt(filG2D_MarkMaxEL.value);
  filtrosGPU(incluyen1, incluyen2, min1, max1, min2, max2);
});



btnLimpiaTablaEL.addEventListener('click', () => {
  filtrosGPU();
  filGPU_NameEL.value = "";
  filTEST_DateEL.value = "";
  filG3D_MarkMinEL.value = "";
  filG3D_MarkMaxEL.value = "";
  filG2D_MarkMinEL.value = "";
  filG2D_MarkMaxEL.value = "";
});
