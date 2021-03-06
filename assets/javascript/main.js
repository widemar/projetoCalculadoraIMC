function subEscopo() {
  let formulario = document.querySelector("#formulario");

  function calculaIMC(evento) {
    evento.preventDefault();

    let altura = Number(document.querySelector("#altura").value);
    let peso = Number(document.querySelector("#peso").value);
    let resultado = document.querySelector("#resultado");
    
    let IMC = peso / (altura * altura);
    
    if (IMC > 0 && IMC < 18.5) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Abaixo do peso";
    } else if ((peso == 0 || Number.isNaN(peso)) && (altura == 0 || Number.isNaN(altura))) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Peso e altura inválidos";
    } else if (peso == 0 || Number.isNaN(peso)) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Peso inválido";
    } else if (altura == 0 || Number.isNaN(altura)) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Altura inválida";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      document.getElementById("resultado").style.backgroundColor = "#00FF7F";
      return resultado.innerHTML = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.9) {
      document.getElementById("resultado").style.backgroundColor = "#ffd700";
      return resultado.innerHTML = "Sobrepeso";
    } else if (IMC >= 30 && IMC <= 34.9) {
      document.getElementById("resultado").style.backgroundColor = "#ff4040";
      return resultado.innerHTML = "Obesidade Grau 1";
    } else if (IMC >= 35 && IMC <= 39.9) {
      document.getElementById("resultado").style.backgroundColor = "#ff0000";
      return resultado.innerHTML = "Obesidade Grau 2";
    } else if (IMC > 40) {
      document.getElementById("resultado").style.backgroundColor = "#cc0000";
      return resultado.innerHTML = "Obesidade Grau 3";
    }

  }
  formulario.addEventListener("submit", calculaIMC);

}
subEscopo();
