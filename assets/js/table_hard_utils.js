let tableHardEl = document.getElementById("tabla");
let inputsEl = document.getElementById("inputs");

//convertimos la data en formato JSON a un objeto JS para poder acceder a sus propiedades

// let dataParseada = JSON.parse(data);

/* intento de carga desde un json */
let loadGPUStable=()=>{
  fetch('https://api.jsonbin.io/b/5fc69853045eb86f1f89c24d').then((res)=>{  //fetch('"../json/CPUS.json"').then((res)=>{
        res.json().then(
           dataProcess => {
               let dataParseada=dataProcess;
               //obtenemos las claves del objeto
               let claves = Object.keys(dataParseada.GPUS[0]);
               createHeader(claves);
               createBody(dataParseada.GPUS);
               createInputs(claves);
            }
          ,
      
        ) 
      }
    ,
    
    );
}
