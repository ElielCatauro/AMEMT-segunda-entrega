
let ligthMode = () => {
  /*
   let elementos0 = document.getElementsByClassName("bg-dark");
   let elementos1 = document.getElementsByClassName("bg-dark-2");
   let elementos2 = document.getElementsByClassName("bg-primary");
   let elementos3 = document.getElementsByClassName("bg-secundary");
   let elementos4 = document.getElementsByClassName("navbar-dark");
   
   console.log('imprimeinto elementos 0 tiene dentro ', elementos0.length);
   console.log(elementos0);
   console.log('imprimeinto elementos 1 tiene dentro ', elementos1.length);
   console.log(elementos1);
   console.log('imprimeinto elementos 2 tiene dentro ', elementos2.length);
   console.log(elementos2);
   console.log('imprimeinto elementos 3 tiene dentro ', elementos3.length);
   console.log(elementos3);
   console.log('imprimeinto elementos 4 tiene dentro ', elementos4.length);
   console.log(elementos4);
   console.log('-------------------------------------------------------------------------------');
   console.log('empiesa cambios');
 
  */

  let elementos4 = document.getElementsByClassName("navbar-dark");
  for (let item of elementos4) {
    let elemn = item;
    item.classList.toggle("navbar-dark");
    item.classList.toggle("navbar-light");
    console.log(elemn);
  }
  // console.log('-------------------------------------------------------------------------------');
  let elementos0 = document.getElementsByClassName("bg-dark");
  for (let item of elementos0) {
    let elemn = item;
    item.classList.toggle("bg-dark");
    item.classList.toggle("bg-light");
    console.log(elemn);

  }
  // console.log('-------------------------------------------------------------------------------');
  let elementos1 = document.getElementsByClassName("bg-dark-2");
  for (let item of elementos1) {
    let elemn = item;
    item.classList.toggle("bg-dark-2");
    item.classList.toggle("bg-light-2");
    console.log(elemn);

  }
  // console.log('-------------------------------------------------------------------------------');
  let elementos2 = document.getElementsByClassName("bg-primary");
  for (let item of elementos2) {
    let elemn = item;
    item.classList.toggle("bg-primary");
    item.classList.toggle("bg-primary-2");
    console.log(elemn);

  }
  // console.log('-------------------------------------------------------------------------------');
  let elementos3 = document.getElementsByClassName("bg-secundary");
  for (let item of elementos3) {
    let elemn = item;
    item.classList.toggle("bg-secundary");
    item.classList.toggle("bg-secundary-2");
    console.log(elemn);

  }
  /* 

    console.log('-------------------------------------------------------------------------------');
    console.log('imprimeinto elementos 0 tiene dentro ', elementos0.length);
    console.log(elementos0);
    console.log('imprimeinto elementos 1 tiene dentro ', elementos1.length);
    console.log(elementos1);
    console.log('imprimeinto elementos 2 tiene dentro ', elementos2.length);
    console.log(elementos2);
    console.log('imprimeinto elementos 3 tiene dentro ', elementos3.length);
    console.log(elementos3);
    console.log('imprimeinto elementos 4 tiene dentro ', elementos4.length);
    console.log(elementos4);
    console.log('empiesa cambios');
 */




}
let prenderLuz = document.getElementById("prenderLuz");
prenderLuz.onclick = ligthMode;