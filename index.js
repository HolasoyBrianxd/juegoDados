// da un numero aleatorio del 1 al 6 Primer Dado
let randomNumer1 = Math.floor(Math.random() * 6) + 1;

let randomPng1 = "dice" + randomNumer1 + ".png";

let randomImagen1 = "images/" + randomPng1;//images/dice1.png

// cambia la imagen del dado aleatoriamente al refrescar la pagina
let imagenes1 = document.querySelectorAll("img")[0];//el cero entre corchetes especifica el index en este caso hay 2 img y  seleccionamos el primero que tiene indice cero
imagenes1.setAttribute('src', randomImagen1);


// da un numero aleatorio del 1 al 6 Segundo Dado
let randomNumer2 = Math.floor(Math.random() * 6) + 1;

let randomPng2 = "dice" + randomNumer2 + ".png";

let randomImagen2 = "images/" + randomPng2;

// cambia la imagen del dado aleatoriamente al refrescar la pagina
let imagenes2 = document.querySelectorAll("img")[1];
imagenes2.setAttribute("src", randomImagen2);


// Ganador Player 1, player 2 o Empate
if(randomNumer1 > randomNumer2){
    console.log("gano el numero uno");
    document.querySelector("h1").innerHTML = "Gana Player 1";
}else if(randomNumer2 > randomNumer1){
    console.log("gano el numero dos");
    document.querySelector("h1").innerHTML = "Gana Player 2";
}else{
    console.log("empate");
    document.querySelector("h1").innerHTML = "Empate";
}