let tableHardEl = document.getElementById("tabla");

// let data = ` {
//     "productos": [
//         { "nombre": "Yerba", "cantidad": "1kg", "precio": 200, "categoria": "almacen", "marca": "Taragüí"},
//         { "nombre": "Harina", "cantidad": "1kg", "precio": 50 , "categoria": "almacen", "marca": "Marolio"},
//         { "nombre": "Manzana", "cantidad": "500gr", "precio": 80, "categoria": "fruteria", "marca": "generico"},
//         { "nombre": "Lavandina", "cantidad": "2l", "precio": 40, "categoria": "limpieza", "marca": "Ayudín"},
//         { "nombre": "Shampoo", "cantidad": "500ml", "precio": 150, "categoria": "higiene personal", "marca": "Plusbelle"}
//     ],
//     "nombreSupermercado" : "Monarca"
// }`

//data en formato JSON
let data = `{
  "GPUS":[
  {
  "GPU_Name":"Radeon RX 6800 XT",
  "TEST_Date":"Nov 2020",
  "G3D_Mark":"25,312",
  "G2D_Mark":"1,095"
  },
  {
  "GPU_Name":"GeForce RTX 3090",
  "TEST_Date":"Sep 2020",
  "G3D_Mark":"24,921",
  "G2D_Mark":"985"
  },
  {
  "GPU_Name":"GeForce RTX 3080",
  "TEST_Date":"Sep 2020",
  "G3D_Mark":"23,855",
  "G2D_Mark":"992"
  },
  {
  "GPU_Name":"GeForce RTX 2080 Ti",
  "TEST_Date":"Sep 2018",
  "G3D_Mark":"21,594",
  "G2D_Mark":"949"
  },
  {
  "GPU_Name":"GeForce RTX 3070",
  "TEST_Date":"Oct 2020",
  "G3D_Mark":"21,409",
  "G2D_Mark":"943"
  },
  {
  "GPU_Name":"TITAN V",
  "TEST_Date":"Dec 2017",
  "G3D_Mark":"19,378",
  "G2D_Mark":"872"
  },
  {
  "GPU_Name":"GeForce RTX 2080 SUPER",
  "TEST_Date":"Jul 2019",
  "G3D_Mark":"19,376",
  "G2D_Mark":"940"
  },
  {
  "GPU_Name":"GeForce RTX 2080",
  "TEST_Date":"Sep 2018",
  "G3D_Mark":"18,580",
  "G2D_Mark":"930"
  },
  {
  "GPU_Name":"NVIDIA TITAN Xp",
  "TEST_Date":"Apr 2017",
  "G3D_Mark":"18,280",
  "G2D_Mark":"812"
  },
  {
  "GPU_Name":"GeForce RTX 2070 SUPER",
  "TEST_Date":"Jul 2019",
  "G3D_Mark":"18,117",
  "G2D_Mark":"906"
  },
  {
  "GPU_Name":"GeForce GTX 1080 Ti",
  "TEST_Date":"Mar 2017",
  "G3D_Mark":"17,663",
  "G2D_Mark":"927"
  },
  {
  "GPU_Name":"Radeon VII",
  "TEST_Date":"Feb 2019",
  "G3D_Mark":"17,041",
  "G2D_Mark":"780"
  },
  {
  "GPU_Name":"TITAN V CEO Edition",
  "TEST_Date":"Oct 2018",
  "G3D_Mark":"16,988",
  "G2D_Mark":"1,086"
  },
  {
  "GPU_Name":"Radeon RX 5700 XT",
  "TEST_Date":"Jul 2019",
  "G3D_Mark":"16,719",
  "G2D_Mark":"944"
  },
  {
  "GPU_Name":"Radeon RX 5700 XT 50th Anniversary",
  "TEST_Date":"Jul 2019",
  "G3D_Mark":"16,532",
  "G2D_Mark":"964"
  },
  {
  "GPU_Name":"GeForce RTX 2060 SUPER",
  "TEST_Date":"Jul 2019",
  "G3D_Mark":"16,396",
  "G2D_Mark":"887"
  },
  {
  "GPU_Name":"GeForce RTX 2070",
  "TEST_Date":"Oct 2018",
  "G3D_Mark":"16,168",
  "G2D_Mark":"859"
  },
  {
  "GPU_Name":"TITAN Xp COLLECTORS EDITION",
  "TEST_Date":"Dec 2017",
  "G3D_Mark":"16,023",
  "G2D_Mark":"825"
  },
  {
  "GPU_Name":"Radeon Pro W5700",
  "TEST_Date":"Jan 2020",
  "G3D_Mark":"14,807",
  "G2D_Mark":"876"
  },
  {
  "GPU_Name":"GeForce GTX 1080",
  "TEST_Date":"May 2016",
  "G3D_Mark":"14,803",
  "G2D_Mark":"869"
  },
  {
  "GPU_Name":"Radeon RX Vega 64",
  "TEST_Date":"Sep 2017",
  "G3D_Mark":"14,526",
  "G2D_Mark":"791"
  },
  {
  "GPU_Name":"Radeon RX 5700",
  "TEST_Date":"Jul 2019",
  "G3D_Mark":"14,482",
  "G2D_Mark":"905"
  },
  {
  "GPU_Name":"Radeon Pro WX 8200",
  "TEST_Date":"Aug 2018",
  "G3D_Mark":"14,190",
  "G2D_Mark":"759"
  },
  {
  "GPU_Name":"GeForce GTX 1070 Ti",
  "TEST_Date":"Nov 2017",
  "G3D_Mark":"14,045",
  "G2D_Mark":"851"
  },
  {
  "GPU_Name":"GeForce RTX 2060",
  "TEST_Date":"Jan 2019",
  "G3D_Mark":"14,039",
  "G2D_Mark":"773"
  },
  {
  "GPU_Name":"GeForce GTX 980 Ti",
  "TEST_Date":"Jun 2015",
  "G3D_Mark":"13,766",
  "G2D_Mark":"818"
  },
  {
  "GPU_Name":"Radeon Vega Frontier Edition",
  "TEST_Date":"Jun 2017",
  "G3D_Mark":"13,732",
  "G2D_Mark":"773"
  },
  {
  "GPU_Name":"NVIDIA TITAN X",
  "TEST_Date":"Aug 2016",
  "G3D_Mark":"13,660",
  "G2D_Mark":"912"
  },
  {
  "GPU_Name":"Radeon RX 5600 XT",
  "TEST_Date":"Jan 2020",
  "G3D_Mark":"13,480",
  "G2D_Mark":"887"
  },
  {
  "GPU_Name":"Radeon RX Vega 56",
  "TEST_Date":"Sep 2017",
  "G3D_Mark":"13,405",
  "G2D_Mark":"753"
  },
  {
  "GPU_Name":"GeForce GTX 1070",
  "TEST_Date":"Jun 2016",
  "G3D_Mark":"13,310",
  "G2D_Mark":"837"
  },
  {
  "GPU_Name":"Radeon Pro WX 9100",
  "TEST_Date":"Oct 2017",
  "G3D_Mark":"13,112",
  "G2D_Mark":"822"
  },
  {
  "GPU_Name":"GeForce GTX 1660 SUPER",
  "TEST_Date":"Nov 2019",
  "G3D_Mark":"12,668",
  "G2D_Mark":"827"
  },
  {
  "GPU_Name":"GeForce GTX TITAN X",
  "TEST_Date":"Mar 2015",
  "G3D_Mark":"12,653",
  "G2D_Mark":"777"
  },
  {
  "GPU_Name":"Radeon Pro Vega 56",
  "TEST_Date":"Mar 2018",
  "G3D_Mark":"12,209",
  "G2D_Mark":"826"
  },
  {
  "GPU_Name":"GeForce GTX 1660 Ti",
  "TEST_Date":"Feb 2019",
  "G3D_Mark":"12,197",
  "G2D_Mark":"764"
  },
  {
  "GPU_Name":"Radeon Pro 5700",
  "TEST_Date":"Aug 2020",
  "G3D_Mark":"11,814",
  "G2D_Mark":"846"
  },
  {
  "GPU_Name":"GeForce GTX 1660",
  "TEST_Date":"Mar 2019",
  "G3D_Mark":"11,553",
  "G2D_Mark":"793"
  },
  {
  "GPU_Name":"Radeon Pro 5700 XT",
  "TEST_Date":"Aug 2020",
  "G3D_Mark":"11,123",
  "G2D_Mark":"832"
  },
  {
  "GPU_Name":"GeForce GTX 980",
  "TEST_Date":"Sep 2014",
  "G3D_Mark":"11,081",
  "G2D_Mark":"786"
  },
  {
  "GPU_Name":"Radeon RX 5600",
  "TEST_Date":"Apr 2020",
  "G3D_Mark":"10,678",
  "G2D_Mark":"995"
  },
  {
  "GPU_Name":"GeForce GTX 1060",
  "TEST_Date":"Jul 2016",
  "G3D_Mark":"10,150",
  "G2D_Mark":"753"
  },
  {
  "GPU_Name":"GeForce GTX 1650 SUPER",
  "TEST_Date":"Nov 2019",
  "G3D_Mark":"9,803",
  "G2D_Mark":"755"
  },
  {
  "GPU_Name":"Radeon R9 Fury + Fury X",
  "TEST_Date":"Jul 2015",
  "G3D_Mark":"9,741",
  "G2D_Mark":"811"
  },
  {
  "GPU_Name":"Radeon Pro Duo",
  "TEST_Date":"Sep 2016",
  "G3D_Mark":"9,672",
  "G2D_Mark":"615"
  },
  {
  "GPU_Name":"GeForce GTX 970",
  "TEST_Date":"Sep 2014",
  "G3D_Mark":"9,652",
  "G2D_Mark":"749"
  },
  {
  "GPU_Name":"GeForce GTX 1060 3GB",
  "TEST_Date":"Aug 2016",
  "G3D_Mark":"9,602",
  "G2D_Mark":"737"
  },
  {
  "GPU_Name":"Radeon RX 590",
  "TEST_Date":"Nov 2018",
  "G3D_Mark":"9,508",
  "G2D_Mark":"799"
  },
  {
  "GPU_Name":"Radeon R9 390X",
  "TEST_Date":"Apr 2016",
  "G3D_Mark":"9,492",
  "G2D_Mark":"831"
  },
  {
  "GPU_Name":"Radeon Pro W5500",
  "TEST_Date":"Feb 2020",
  "G3D_Mark":"9,377",
  "G2D_Mark":"872"
  },
  {
  "GPU_Name":"GeForce GTX 780 Ti",
  "TEST_Date":"Nov 2013",
  "G3D_Mark":"9,221",
  "G2D_Mark":"629"
  },
  {
  "GPU_Name":"GeForce GTX TITAN Black",
  "TEST_Date":"Mar 2014",
  "G3D_Mark":"9,084",
  "G2D_Mark":"600"
  },
  {
  "GPU_Name":"Radeon RX 5500 XT",
  "TEST_Date":"Dec 2019",
  "G3D_Mark":"8,966",
  "G2D_Mark":"801"
  },
  {
  "GPU_Name":"Radeon R9 390",
  "TEST_Date":"Mar 2016",
  "G3D_Mark":"8,797",
  "G2D_Mark":"789"
  },
  {
  "GPU_Name":"Radeon RX 580",
  "TEST_Date":"Apr 2017",
  "G3D_Mark":"8,746",
  "G2D_Mark":"752"
  },
  {
  "GPU_Name":"GeForce GTX Titan",
  "TEST_Date":"Feb 2013",
  "G3D_Mark":"8,693",
  "G2D_Mark":"653"
  },
  {
  "GPU_Name":"Radeon R9 295X2",
  "TEST_Date":"May 2014",
  "G3D_Mark":"8,533",
  "G2D_Mark":"773"
  },
  {
  "GPU_Name":"Radeon RX 480",
  "TEST_Date":"Jun 2016",
  "G3D_Mark":"8,515",
  "G2D_Mark":"757"
  },
  {
  "GPU_Name":"Radeon RX 5500",
  "TEST_Date":"Nov 2019",
  "G3D_Mark":"8,494",
  "G2D_Mark":"878"
  },
  {
  "GPU_Name":"Radeon R9 290X / 390X",
  "TEST_Date":"Oct 2013",
  "G3D_Mark":"8,389",
  "G2D_Mark":"699"
  },
  {
  "GPU_Name":"GeForce GTX TITAN Z",
  "TEST_Date":"Jun 2014",
  "G3D_Mark":"8,238",
  "G2D_Mark":"797"
  },
  {
  "GPU_Name":"Radeon R9 290 / 390",
  "TEST_Date":"Nov 2013",
  "G3D_Mark":"8,150",
  "G2D_Mark":"695"
  },
  {
  "GPU_Name":"GeForce GTX 780",
  "TEST_Date":"May 2013",
  "G3D_Mark":"7,948",
  "G2D_Mark":"569"
  },
  {
  "GPU_Name":"Radeon RX 470",
  "TEST_Date":"Aug 2016",
  "G3D_Mark":"7,928",
  "G2D_Mark":"701"
  },
  {
  "GPU_Name":"Radeon RX 580X",
  "TEST_Date":"Feb 2019",
  "G3D_Mark":"7,798",
  "G2D_Mark":"885"
  },
  {
  "GPU_Name":"GeForce GTX 1650",
  "TEST_Date":"Apr 2019",
  "G3D_Mark":"7,730",
  "G2D_Mark":"622"
  },
  {
  "GPU_Name":"Radeon Pro 580X",
  "TEST_Date":"Sep 2019",
  "G3D_Mark":"7,540",
  "G2D_Mark":"698"
  },
  {
  "GPU_Name":"Radeon RX 570",
  "TEST_Date":"Apr 2017",
  "G3D_Mark":"6,967",
  "G2D_Mark":"626"
  },
  {
  "GPU_Name":"Radeon RX 5600M",
  "TEST_Date":"Jun 2020",
  "G3D_Mark":"6,682",
  "G2D_Mark":"541"
  },
  {
  "GPU_Name":"GeForce GTX 1050 Ti",
  "TEST_Date":"Oct 2016",
  "G3D_Mark":"6,376",
  "G2D_Mark":"643"
  },
  {
  "GPU_Name":"Radeon R9 280X",
  "TEST_Date":"Apr 2016",
  "G3D_Mark":"6,229",
  "G2D_Mark":"665"
  },
  {
  "GPU_Name":"Radeon R9 380X",
  "TEST_Date":"Jul 2015",
  "G3D_Mark":"6,180",
  "G2D_Mark":"688"
  },
  {
  "GPU_Name":"Radeon R9 380",
  "TEST_Date":"Mar 2016",
  "G3D_Mark":"6,177",
  "G2D_Mark":"659"
  },
  {
  "GPU_Name":"GeForce GTX 960",
  "TEST_Date":"Jan 2015",
  "G3D_Mark":"5,988",
  "G2D_Mark":"641"
  },
  {
  "GPU_Name":"GeForce GTX 770",
  "TEST_Date":"Jun 2013",
  "G3D_Mark":"5,887",
  "G2D_Mark":"555"
  },
  {
  "GPU_Name":"GeForce GTX 690",
  "TEST_Date":"May 2012",
  "G3D_Mark":"5,780",
  "G2D_Mark":"473"
  },
  {
  "GPU_Name":"GeForce GTX 680",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"5,595",
  "G2D_Mark":"516"
  },
  {
  "GPU_Name":"Radeon HD 7990",
  "TEST_Date":"May 2013",
  "G3D_Mark":"5,566",
  "G2D_Mark":"766"
  },
  {
  "GPU_Name":"Radeon R9 285 / 380",
  "TEST_Date":"Jan 2015",
  "G3D_Mark":"5,550",
  "G2D_Mark":"655"
  },
  {
  "GPU_Name":"Radeon R9 280",
  "TEST_Date":"Apr 2016",
  "G3D_Mark":"5,544",
  "G2D_Mark":"621"
  },
  {
  "GPU_Name":"GeForce GTX 950",
  "TEST_Date":"Aug 2015",
  "G3D_Mark":"5,359",
  "G2D_Mark":"588"
  },
  {
  "GPU_Name":"GeForce GTX 1050",
  "TEST_Date":"Oct 2016",
  "G3D_Mark":"5,352",
  "G2D_Mark":"497"
  },
  {
  "GPU_Name":"GeForce GTX 670",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"5,332",
  "G2D_Mark":"518"
  },
  {
  "GPU_Name":"Radeon HD 7970 / R9 280X",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"5,248",
  "G2D_Mark":"730"
  },
  {
  "GPU_Name":"Radeon HD 8990",
  "TEST_Date":"Nov 2013",
  "G3D_Mark":"5,214",
  "G2D_Mark":"658"
  },
  {
  "GPU_Name":"GeForce GTX 760 Ti",
  "TEST_Date":"Jan 2014",
  "G3D_Mark":"5,119",
  "G2D_Mark":"802"
  },
  {
  "GPU_Name":"Radeon R9 270X",
  "TEST_Date":"Oct 2013",
  "G3D_Mark":"4,853",
  "G2D_Mark":"592"
  },
  {
  "GPU_Name":"GeForce GTX 760",
  "TEST_Date":"Jun 2013",
  "G3D_Mark":"4,766",
  "G2D_Mark":"503"
  },
  {
  "GPU_Name":"Radeon HD 7950 / R9 280",
  "TEST_Date":"Jun 2012",
  "G3D_Mark":"4,765",
  "G2D_Mark":"691"
  },
  {
  "GPU_Name":"Radeon R9 370",
  "TEST_Date":"Apr 2016",
  "G3D_Mark":"4,722",
  "G2D_Mark":"781"
  },
  {
  "GPU_Name":"Radeon HD 7870",
  "TEST_Date":"Jun 2012",
  "G3D_Mark":"4,631",
  "G2D_Mark":"553"
  },
  {
  "GPU_Name":"GeForce GTX 580",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"4,520",
  "G2D_Mark":"408"
  },
  {
  "GPU_Name":"Radeon HD 7870 XT",
  "TEST_Date":"May 2013",
  "G3D_Mark":"4,470",
  "G2D_Mark":"661"
  },
  {
  "GPU_Name":"Radeon R7 370",
  "TEST_Date":"Apr 2016",
  "G3D_Mark":"4,427",
  "G2D_Mark":"562"
  },
  {
  "GPU_Name":"GeForce GTX 660 Ti",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"4,360",
  "G2D_Mark":"442"
  },
  {
  "GPU_Name":"Radeon R9 270 / R7 370",
  "TEST_Date":"Dec 2013",
  "G3D_Mark":"4,260",
  "G2D_Mark":"645"
  },
  {
  "GPU_Name":"GeForce GTX 1060 5GB",
  "TEST_Date":"Apr 2018",
  "G3D_Mark":"4,141",
  "G2D_Mark":"571"
  },
  {
  "GPU_Name":"Radeon RX 460",
  "TEST_Date":"Aug 2016",
  "G3D_Mark":"4,066",
  "G2D_Mark":"556"
  },
  {
  "GPU_Name":"GeForce GTX 480",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"4,034",
  "G2D_Mark":"421"
  },
  {
  "GPU_Name":"GeForce GTX 750 Ti",
  "TEST_Date":"Feb 2014",
  "G3D_Mark":"3,938",
  "G2D_Mark":"482"
  },
  {
  "GPU_Name":"GeForce GTX 660",
  "TEST_Date":"Sep 2012",
  "G3D_Mark":"3,937",
  "G2D_Mark":"449"
  },
  {
  "GPU_Name":"GeForce GTX 570",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"3,877",
  "G2D_Mark":"443"
  },
  {
  "GPU_Name":"Radeon HD 7850",
  "TEST_Date":"May 2012",
  "G3D_Mark":"3,719",
  "G2D_Mark":"529"
  },
  {
  "GPU_Name":"Radeon Pro WX 4100",
  "TEST_Date":"Mar 2017",
  "G3D_Mark":"3,665",
  "G2D_Mark":"654"
  },
  {
  "GPU_Name":"Radeon RX 560",
  "TEST_Date":"Mar 2017",
  "G3D_Mark":"3,644",
  "G2D_Mark":"504"
  },
  {
  "GPU_Name":"Radeon RX 560X",
  "TEST_Date":"Aug 2018",
  "G3D_Mark":"3,520",
  "G2D_Mark":"524"
  },
  {
  "GPU_Name":"GeForce GTX 750",
  "TEST_Date":"Feb 2014",
  "G3D_Mark":"3,420",
  "G2D_Mark":"453"
  },
  {
  "GPU_Name":"GeForce GTX 590",
  "TEST_Date":"Mar 2011",
  "G3D_Mark":"3,340",
  "G2D_Mark":"520"
  },
  {
  "GPU_Name":"GeForce GTX 650 Ti BOOST",
  "TEST_Date":"Apr 2013",
  "G3D_Mark":"3,271",
  "G2D_Mark":"441"
  },
  {
  "GPU_Name":"GeForce GTX 470",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"3,211",
  "G2D_Mark":"396"
  },
  {
  "GPU_Name":"Radeon R7 360",
  "TEST_Date":"Jun 2015",
  "G3D_Mark":"3,099",
  "G2D_Mark":"478"
  },
  {
  "GPU_Name":"Radeon HD 7790",
  "TEST_Date":"Apr 2013",
  "G3D_Mark":"3,090",
  "G2D_Mark":"459"
  },
  {
  "GPU_Name":"GeForce GTX 560 Ti",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"3,062",
  "G2D_Mark":"392"
  },
  {
  "GPU_Name":"Radeon R7 260X",
  "TEST_Date":"Oct 2013",
  "G3D_Mark":"3,061",
  "G2D_Mark":"487"
  },
  {
  "GPU_Name":"Radeon R9 360",
  "TEST_Date":"Oct 2015",
  "G3D_Mark":"3,032",
  "G2D_Mark":"460"
  },
  {
  "GPU_Name":"Radeon HD 6970",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,946",
  "G2D_Mark":"424"
  },
  {
  "GPU_Name":"Radeon HD 6990",
  "TEST_Date":"Mar 2011",
  "G3D_Mark":"2,933",
  "G2D_Mark":"563"
  },
  {
  "GPU_Name":"Radeon R7 260",
  "TEST_Date":"Jul 2014",
  "G3D_Mark":"2,892",
  "G2D_Mark":"559"
  },
  {
  "GPU_Name":"GeForce GTX 465",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,826",
  "G2D_Mark":"521"
  },
  {
  "GPU_Name":"Radeon RX 550",
  "TEST_Date":"Jun 2017",
  "G3D_Mark":"2,823",
  "G2D_Mark":"484"
  },
  {
  "GPU_Name":"Radeon HD 6950",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,733",
  "G2D_Mark":"374"
  },
  {
  "GPU_Name":"GeForce GTX 560",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,712",
  "G2D_Mark":"362"
  },
  {
  "GPU_Name":"GeForce GT 1030",
  "TEST_Date":"May 2017",
  "G3D_Mark":"2,621",
  "G2D_Mark":"441"
  },
  {
  "GPU_Name":"GeForce GTX 650 Ti",
  "TEST_Date":"Oct 2012",
  "G3D_Mark":"2,532",
  "G2D_Mark":"384"
  },
  {
  "GPU_Name":"GeForce GTX 460",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,279",
  "G2D_Mark":"364"
  },
  {
  "GPU_Name":"Radeon R7 250X",
  "TEST_Date":"Aug 2015",
  "G3D_Mark":"2,269",
  "G2D_Mark":"637"
  },
  {
  "GPU_Name":"Radeon HD 5870",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,246",
  "G2D_Mark":"358"
  },
  {
  "GPU_Name":"Radeon HD 5970",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,239",
  "G2D_Mark":"305"
  },
  {
  "GPU_Name":"Radeon HD 6870",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"2,213",
  "G2D_Mark":"433"
  },
  {
  "GPU_Name":"GeForce GTX 745",
  "TEST_Date":"Mar 2014",
  "G3D_Mark":"2,197",
  "G2D_Mark":"474"
  },
  {
  "GPU_Name":"Radeon HD 7770",
  "TEST_Date":"Jun 2012",
  "G3D_Mark":"2,165",
  "G2D_Mark":"448"
  },
  {
  "GPU_Name":"Radeon RX Vega 11",
  "TEST_Date":"Feb 2018",
  "G3D_Mark":"2,118",
  "G2D_Mark":"539"
  },
  {
  "GPU_Name":"Radeon HD 8950",
  "TEST_Date":"Aug 2014",
  "G3D_Mark":"2,100",
  "G2D_Mark":"405"
  },
  {
  "GPU_Name":"Radeon RX 550X",
  "TEST_Date":"Apr 2019",
  "G3D_Mark":"2,041",
  "G2D_Mark":"487"
  },
  {
  "GPU_Name":"GeForce GTX 460 v2",
  "TEST_Date":"Oct 2011",
  "G3D_Mark":"2,012",
  "G2D_Mark":"430"
  },
  {
  "GPU_Name":"Radeon HD 6850",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,999",
  "G2D_Mark":"403"
  },
  {
  "GPU_Name":"Radeon HD 5850",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,968",
  "G2D_Mark":"367"
  },
  {
  "GPU_Name":"Radeon R9 350",
  "TEST_Date":"Oct 2016",
  "G3D_Mark":"1,964",
  "G2D_Mark":"514"
  },
  {
  "GPU_Name":"Radeon R7 450",
  "TEST_Date":"Oct 2016",
  "G3D_Mark":"1,963",
  "G2D_Mark":"544"
  },
  {
  "GPU_Name":"GeForce GTX 460 SE",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,961",
  "G2D_Mark":"396"
  },
  {
  "GPU_Name":"GeForce GTX 555",
  "TEST_Date":"Feb 2012",
  "G3D_Mark":"1,935",
  "G2D_Mark":"495"
  },
  {
  "GPU_Name":"Radeon RX 570X",
  "TEST_Date":"Jan 2020",
  "G3D_Mark":"1,923",
  "G2D_Mark":"750"
  },
  {
  "GPU_Name":"GeForce GTX 645",
  "TEST_Date":"May 2013",
  "G3D_Mark":"1,885",
  "G2D_Mark":"418"
  },
  {
  "GPU_Name":"GeForce GTX 560 SE",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,880",
  "G2D_Mark":"487"
  },
  {
  "GPU_Name":"Radeon RX 540",
  "TEST_Date":"Dec 2017",
  "G3D_Mark":"1,851",
  "G2D_Mark":"432"
  },
  {
  "GPU_Name":"GeForce GTX 650",
  "TEST_Date":"Sep 2012",
  "G3D_Mark":"1,752",
  "G2D_Mark":"328"
  },
  {
  "GPU_Name":"Radeon HD 5830",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,747",
  "G2D_Mark":"348"
  },
  {
  "GPU_Name":"Radeon HD 7750",
  "TEST_Date":"Jun 2012",
  "G3D_Mark":"1,672",
  "G2D_Mark":"378"
  },
  {
  "GPU_Name":"Radeon HD 6790",
  "TEST_Date":"Apr 2011",
  "G3D_Mark":"1,666",
  "G2D_Mark":"326"
  },
  {
  "GPU_Name":"GeForce GTX 550 Ti",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,579",
  "G2D_Mark":"343"
  },
  {
  "GPU_Name":"Radeon Vega 8",
  "TEST_Date":"Feb 2018",
  "G3D_Mark":"1,576",
  "G2D_Mark":"428"
  },
  {
  "GPU_Name":"GeForce GT 740",
  "TEST_Date":"Jun 2014",
  "G3D_Mark":"1,557",
  "G2D_Mark":"329"
  },
  {
  "GPU_Name":"GeForce GTX 285",
  "TEST_Date":"Apr 2009",
  "G3D_Mark":"1,555",
  "G2D_Mark":"304"
  },
  {
  "GPU_Name":"Radeon HD 4890",
  "TEST_Date":"Aug 2012",
  "G3D_Mark":"1,520",
  "G2D_Mark":"168"
  }
  ]
  }
`
//convertimos la data en formato JSON a un objeto JS para poder acceder a sus propiedades
let dataParseada = JSON.parse(data);

//obtenemos las claves del objeto persona
let clavesProducto = Object.keys(dataParseada.GPUS[0]);