function escopoGlobal() {
  let formulario = document.querySelector("#formulario");

  function calculaIMC(evento) {
    evento.preventDefault();

    let altura = Number(document.querySelector("#altura").value);
    let peso = Number(document.querySelector("#peso").value);
    let resultado = document.querySelector("#resultado");

    let IMC = peso / (altura * altura);
  
    if (IMC < 18.5) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Abaixo do peso";
    } else if (IMC <= 24.9) {
      document.getElementById("resultado").style.backgroundColor = "#00FF7F";
      return resultado.innerHTML = "Peso normal";
    } else if (IMC <= 29.9) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Sobrepeso";
    } else if (IMC <= 34.9) {
      document.getElementById("resultado").style.backgroundColor = "#ff4040";
      return resultado.innerHTML = "Obesidade Grau 1";
    } else if (IMC <= 39.9) {
      document.getElementById("resultado").style.backgroundColor = "#ff0000";
      return resultado.innerHTML = "Obesidade Grau 2";
    } else {
      document.getElementById("resultado").style.backgroundColor = "#cc0000";
      return resultado.innerHTML = "Obesidade Grau 3";

    }


  }
  formulario.addEventListener("submit", calculaIMC);

}
escopoGlobal();
