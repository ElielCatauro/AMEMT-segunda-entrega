
let ligthMode = () => {
    let elementos0 = document.getElementsByClassName("bg-dark");
    let elementos1 = document.getElementsByClassName("bg-dark-2");
    let elementos2 = document.getElementsByClassName("bg-primary");
    let elementos3 = document.getElementsByClassName("bg-secundary");
    let elementos4 = document.getElementsByClassName("navbar-dark");
  
    for (let x = 0; x < elementos4.length; x++) {
      let elemn = elementos4[x];
      
      elemn.classList.toggle("navbar-dark");
      elemn.classList.toggle("navbar-light");
      console.log(elemn);
    }
    for (let x = 0; x < elementos0.length; x++) {
      let elemn = elementos0[x];
      elemn.classList.toggle("bg-dark");
      elemn.classList.toggle("bg-light");
      console.log(elemn);
    
    }
    for (let x = 0; x < elementos1.length; x++) {
      let elemn = elementos1[x];
      elemn.classList.toggle("bg-dark-2");
      elemn.classList.toggle("bg-light-2");
      console.log(elemn);
    
    }
    for (let x = 0; x < elementos2.length; x++) { let elemn = elementos2[x];
      elemn.classList.toggle("bg-primary");
      elemn.classList.toggle("bg-primary-2");
      console.log(elemn);
     
    }
    for (let x = 0; x < elementos3.length; x++) { let elemn = elementos3[x];
      elemn.classList.toggle("bg-secundary");
      elemn.classList.toggle("bg-secundary-2");
      console.log(elemn);
     
    }
  
  }
  let prenderLuz = document.getElementById("prenderLuz");
  prenderLuz.onclick = ligthMode;