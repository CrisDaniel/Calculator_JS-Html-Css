let mostrarOperacion = document.getElementById("operacion");
let mostrarResultado = document.getElementById("resultado");
const buttonContainer = document.getElementById("buttonContainer");
const button = buttonContainer.querySelector("button");
let firstValor,
  secondValor,
  arrayNum,
  encendido = false;

function prender() {
  encendido = !encendido;
  button.textContent = encendido ? "ON" : "OFF";
  button.classList.toggle("buttonOn");
  button.classList.toggle("buttonOff");

  if (encendido) {
    window.agregar = function agregar(idNumero) {
      mostrarOperacion.innerHTML == "0"
        ? (mostrarOperacion.innerHTML = idNumero.innerHTML)
        : (mostrarOperacion.innerHTML += idNumero.innerHTML);
    }

    window.mostrar = function mostrar(resultado) {
      mostrarResultado.innerHTML = resultado;
    }

    window.limpiar = function limpiar() {
      mostrarOperacion.innerHTML = "0";
      mostrarResultado.innerHTML = "0";
    }

    window.borrar = function borrar(idBorrar) {
      if (mostrarOperacion.innerHTML.length == 1) {
        limpiar();
      } else {
        mostrarOperacion.innerHTML = mostrarOperacion.innerHTML.slice(0, -1);
      }
    }

    window.resolver = function resolver() {
      arrayNum = mostrarOperacion.innerHTML.split("");
      let operadores = ["+", "-", "*", "/"];

      let operador = arrayNum
        .filter((char) => operadores.includes(char))
        .join("");
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
  } else {
    window.agregar = null;
    window.mostrar = null;
    limpiar();
    window.limpiar = null;
    window.borrar = null;
    window.resolver = null;
  }
}
