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

  for (let clave in elemento) {
    let inpEL = document.getElementById(`inp-${clave}`);
    let tdEl = document.getElementById(`${clave}${i}`);
    inpEL.value = tdEl.innerHTML;
    inpEL.disabled = true;


    let sip = () => {
      const row = document.getElementById(`row${i}`);
      try { row.remove(); }
      catch (error) {
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
  inputsEl.innerHTML="";
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
  tableHardEl.innerHTML="";
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

let filtrosGPU = (incluyen1 ="",incluyen2 ="",min1 = 200,max1 = 30000,min2 = 0,max2 = 2000 ) => {

  let claves = Object.keys(dataParseada[0]);
  let fil1=dataParseada.filter(e => e.GPU_Name.indexOf(`${incluyen1}`) !== -1 );
  console.log(fil1);
  let fil2=fil1.filter(e => e.TEST_Date.indexOf(`${incluyen2}`) !== -1 );
  console.log(fil2);
  let fil3=fil2.filter(e => (e.G3D_Mark>= min1 && e.G3D_Mark<= max1 ));
  console.log(fil3);
  let fil4=fil3.filter(e => (e.G2D_Mark>=min2 && e.G2D_Mark<=max2 ));
  console.log(fil4);

  createTable(claves,fil4);
}
