'use strict'
let producContEl = document.getElementById("productosCont")
let dataParseada = [];

let createProducCard = (elemento, i) => {
  let divCard = document.createElement("div");
  divCard.setAttribute("class", `card bg-secundary`);
  divCard.setAttribute("style", `width: 16rem;`);
  divCard.setAttribute("id", `produc-${i}`);
  /* agrega imagen a la card */
  let imgEl = document.createElement("img");
  imgEl.setAttribute("class", "card-img-top");
  imgEl.setAttribute("src", `${elemento["imagen"]}`);
  imgEl.setAttribute("alt", `imagen-de-${elemento["producto_name"]}`);
  divCard.appendChild(imgEl);

  let divCard_body = document.createElement("div");
  divCard_body.setAttribute("class", `card-body`);
  /* agrega el nombre del producto*/
  let titleEl = document.createElement("h5");
  titleEl.setAttribute("class", `card-title`);
  titleEl.innerText = `${elemento["producto_name"]}`;
  divCard_body.appendChild(titleEl);
  // agrego el stock
  let stockEl = document.createElement("p");
  stockEl.setAttribute("class", `card-title`);
  stockEl.innerText = `Stock ${elemento["stock"]}`;
  stockEl.value = elemento["stock"];
  divCard_body.appendChild(stockEl);
  //agrega precio y botton para agregar al carro
  let btnEl = document.createElement("button");
  btnEl.setAttribute("class", `btn btn-dark`);
  
  {
    let priceEl = document.createElement("lable");
    priceEl.setAttribute("class", `price`);
    priceEl.setAttribute("for", `addCart-${i}`);
    priceEl.innerText = `${elemento["precio"]}$  `;
    let addCartEl = document.createElement("span");
    addCartEl.setAttribute("id", `addCart-${i}`);
    addCartEl.setAttribute("class", `addCart`);
    addCartEl.innerText = `Añadir al carrito`;

    btnEl.appendChild(priceEl);
    btnEl.appendChild(addCartEl);
  }
  divCard_body.appendChild(btnEl);

  divCard.appendChild(divCard_body);
  //devuelvo la card con todos los datos del elemento
  return divCard;
}

let createProductList = (arregloObjet) => {
  producContEl.innerHTML = "";
  let i = 0;
  arregloObjet.forEach(element => {
    console.log(`producto ${element} id ${i}`);
    producContEl.appendChild(createProducCard(element, i));
    i++;
  });
}
//get
let loadProducts = () => {
  fetch("https://5fcbef5e51f70e00161f21d1.mockapi.io/ListaProductos")
    .then((res) => res.json().then((data) => {
      dataParseada = data;
      //obtenemos las claves del objeto
      createProductList(dataParseada);
    }))
    .catch((error) => console.log(error));
};


window.addEventListener("load", () => {
  loadProducts();
});

// dado un objeto devolver una cards con el siguiente formato
/* <div>
  <label class="input-group-text" for="filGPU_Name"> Contiene</label>
  <input id="filGPU_Name">
</div> */

/*  <div class="card" style="width: 18rem;">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
    </div>  */


