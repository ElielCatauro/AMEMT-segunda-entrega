let estilo = document.getElementById('estilos');
let prenderLuz = document.getElementById("prenderLuz");


let ligthMode = () => {
  //estilo.href -= 'style.css';
  //estilo.href += 'styleLight.css';
  estilo.href ="assets/css/styleLight.css"

  prenderLuz.onclick = darkMode;
}
let darkMode = () => {

  //estilo.href -= 'styleLight.css';
  //estilo.href += 'style.css';
  estilo.href ="assets/css/style.css"
  prenderLuz.onclick = ligthMode;
}

prenderLuz.onclick = ligthMode;
