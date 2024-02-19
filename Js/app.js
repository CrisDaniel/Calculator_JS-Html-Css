let mostrarOperacion = document.getElementById("operacion");
let mostrarResultado = document.getElementById("resultado");
let firstValor, secondValor, arrayNum;

function agregar(idNumero) {
  mostrarOperacion.innerHTML == "0"
    ? (mostrarOperacion.innerHTML = idNumero.innerHTML)
    : (mostrarOperacion.innerHTML += idNumero.innerHTML);
}

function mostrar(resultado) {
  mostrarResultado.innerHTML = resultado;
}

function limpiar() {
  mostrarOperacion.innerHTML = "0";
  mostrarResultado.innerHTML = "0";
}

function prender(id) {
  console.log(id.innerHTML);
}

function apagar(id) {
  console.log(id.innerHTML);
}

function borrar(idBorrar) {
  if (mostrarOperacion.innerHTML == "") {
    limpiar();
  } else {
    let newArrayNum = mostrarOperacion.innerHTML.slice(
      0,
      mostrarOperacion.innerHTML.length - 1
    );
    mostrarOperacion.innerHTML = newArrayNum;
  }
}

function resolver(id) {
  arrayNum = mostrarOperacion.innerHTML.split("");
  let operadores = ["+", "-", "*", "/"];

  let operador = arrayNum.filter((char) => operadores.includes(char)).join("");
  let indice = arrayNum.indexOf(operador);
  firstValor = parseFloat(arrayNum.slice(0, indice).join(""), 10);
  secondValor = parseFloat(arrayNum.slice(indice + 1).join(""), 10);

  switch (operador) {
    case "+":
      let suma = firstValor + secondValor;
      mostrar(suma);
      break;
    case "-":
      let resta = firstValor - secondValor;
      mostrar(resta);
      break;
    case "*":
      let mul = firstValor * secondValor;
      mostrar(mul);
      break;
    case "/":
      let div = firstValor / secondValor;
      mostrar(div);
      break;
    default:
      break;
  }
}
