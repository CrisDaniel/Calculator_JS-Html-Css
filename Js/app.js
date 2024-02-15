let mostrarOperacion = document.getElementById("operacion");
let firstVal;

function agregar(idNumero) {
    let numero = parseInt(idNumero.innerHTML);
    let mostrar = mostrarOperacion.innerHTML;

    mostrar === "0" ? mostrar= numero : mostrar += numero;
    firstVal = parseInt(mostrar);
    console.log(firstVal);
    /*if(isNaN){
        mostrarOperacion.innerHTML += numero;
    }*/
}

function sumar(idSumar){

    mostrarOperacion.innerHTML += idSumar.innerHTML;
    console.log(mostrarOperacion);
}

function restar(id){
    console.log(id.innerHTML);
}


function multiplicar(id){
    console.log(id.innerHTML);
}

function dividir(id){
    console.log(id.innerHTML);
}

function limpiar(){
    mostrarOperacion.innerHTML = "0";
}

function prender(id){
    console.log(id.innerHTML);
}

function apagar(id){
    console.log(id.innerHTML);
}

function borrar(idBorrar){
    console.log(idBorrar.innerHTML);
}

function mostrarResultado(id){
    console.log(id.innerHTML);
}