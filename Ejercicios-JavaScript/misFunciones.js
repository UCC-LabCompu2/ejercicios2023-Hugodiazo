/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiar unidades
 * @param {string} id - id de metros, pulg, etc.
 * @param {number} valor - valor de los inputs de metros, pulg, etc.
 * @return 
 */


function cambiarunidades (id,valor){

  if (valor.includes(",")){
    valor = valor.replace(",",".");
  }  
    if (isNaN(valor)){
        alert("el valor ingresado no es valido");
        document.lasunidades.unid_metro.value = " ";
        document.lasunidades.unid_pulgada.value = " ";
        document.lasunidades.unid_pie.value = " ";
        document.lasunidades.unid_yarda.value = " ";
    }
    else if (id=="metro"){
        document.lasunidades.unid_pulgada.value = valor * 39.3701;
        document.lasunidades.unid_pie.value = valor * 3.2804;
        document.lasunidades.unid_yarda.value = valor * 1.09361;
    }
    else if (id=="pulgada"){
        document.lasUnidades.metro.value = valor * 0.0254;
        document.lasUnidades.pie.value = valor * 0.08333;
        document.lasUnidades.yarda.value = valor * 0.027778;
    }
    else if (id=="pie"){
        document.lasUnidades.metro.value = valor * 0.3048;
        document.lasUnidades.pulgada.value = valor * 12;
        document.lasUnidades.yarda.value = valor * 0.333333;
    }
    else if (id=="yardas"){
        document.lasUnidades.metro.value = valor * 0.9144;
        document.lasUnidades.pulgada.value = valor * 36;
        document.lasUnidades.pie.value = valor * 3;
    }
}

function convertirGR(id){
    if(id == "grados") {
        let gr = document.getElementById ("grados").value;
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    }
}

function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "valo_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularSuma() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
}

function calcularResta() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
}

function calcularMultiplicacion() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
}

function calcularDivision() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
}

let verletra = (id, value) => {
    if (isNaN(value)){
        document.getElementById(id).value = "";
    }
}

let generarurl = () => {
    const dist = document.getElementById("distancia").value
    const uni = document.getElementsByName("unidades")[0].value

    const urlcompl = `segundaWeb.html#${dist}#${uni}`
    window.open(urlcompl);
}

let cargarvalor = () => {
    let urlcompleta = window.location.href;
    console.log(urlcompleta);
    urlcompleta = urlcompleta.split("#");

    const distancia = urlcompleta[1];
    const unidad = urlcompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value
    const uni = document.getElementsByName("unidades")[0].value

    localStorage.setItem("distanciaLS", dist);
    localStorage,setItem("unidadLS", uni);
    window.open("web2.html");
}

let cargarLS = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let xmax = canvas.width;
    let ymax = canvas.height;
    ctx.fillStyle = "#333";
    ctx.arc(xmax/2, ymax/2, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

var bandera;
let dibujar = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let posx = Event.clientX;
    let posy = Event.clienty;
    console.log (posx, posy);

    canvas.onmousedown = function () {bandera=true};
    canvas.onmouseup = function () {bandera=false};

    if (bandera){
        ctx.fill();
        ctx.fillReact(posx, posy, 5, 5);
    }
    
}

function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}


function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

  //Dibujar lineas horizontales, reutilizar el codigo opara la cantidad
    ctx.beginPath();
    for(var i=0;i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#db890f";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

  //Dibujar lineas verticales consecutivamente
    ctx.beginPath();
    for(var i=0;i<anchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#db890f";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#0a35c5";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#0a35c5";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX,posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX,posY);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width = canvas.width;

    img.onload = function(){
        ctx.drawImage(img, posX, posY);
    }
}

x = 0;
dx = 2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }
    if(x>canvas.width){
        x = 0;
    }
    x+=dx;
}