function Converter() {
    var valorDigitado = document.getElementById("valor").value;
    var valorAjustado = parseFloat(valorDigitado); //transformação para numero
    var valorCalculado = (valorDigitado * 5.22).toFixed(2);
  
    var valorNaTela = document.getElementById("valorConvertido");
    valorNaTela.innerHTML = "O valor em reais é " + valorCalculado;
  }
  