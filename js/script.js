window.addEventListener('load', iniciar);
 
function iniciar() {
 
  var btBackgroundAmarelo =
    document.querySelector('#btBackground');
  btBackgroundAmarelo.addEventListener('click', trocarBackground);
 
  var chkTextoVermelho =
    document.querySelector('#chkMudarTexto');
  chkTextoVermelho.addEventListener('change', trocarCorDoTexto);
 
  var chkTextoVermelho =
    document.querySelector('#chkMudarTamanho');
  chkTextoVermelho.addEventListener('change', habilitarMudarTamanho);

  var chkitalico =
  document.querySelector('#chkTituloItalico');
  chkitalico.addEventListener('change', TrocarColunaItalico);

  var chkdata =
  document.querySelector('#chkInverterDiaMes');
  chkdata.addEventListener('change', trocarData);
}
 
function habilitarMudarTamanho() {
 
  var tabela = document.querySelector('#dadosBanda');
  var celulas = tabela.querySelectorAll('td');
 
  if(this.checked) {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].addEventListener('mouseover', aumentarTexto);
      celulas[i].addEventListener('mouseout', diminuirTexto);
    }
  }
  else {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].removeEventListener('mouseover', aumentarTexto);
      celulas[i].removeEventListener('mouseout', diminuirTexto);
    }
  }
}
 
function aumentarTexto() {
  this.classList.add('textoMaior');
}
 
function diminuirTexto() {
  this.classList.remove('textoMaior');
}
 
function trocarCorDoTexto() {
 
  var classe = 'novaCorTexto';
  var tabela = document.querySelector('#dadosBanda');
 
  //Aqui, "this" é o checkbox!
  if(this.checked) {
    tabela.classList.add(classe);
  }
  else {
    tabela.classList.remove(classe);
  }
}
 
function trocarBackground() {
 
  var classeBG = 'novoBackground';
  var tabela   = document.querySelector('#dadosBanda');
 
  //Verificando se a classe já existe no body
  if(tabela.classList.contains(classeBG)) {
 
    //Se entrou aqui, significa que o background
    //já estava amarelo. Então removemos a classe
    //e alteramos o texto do botão
    tabela.classList.remove(classeBG);
 
    //'this' representa o elemento que invocou a
    //função. Neste caso, foi o botão cujo id é
    //'btBackgroundAmarelo'
    this.value = 'Background amarelo';
  }
  else {
 
    //Se entrou aqui, significa que o background
    //está com a cor padrão. Então adicionamos a classe
    //e alteramos o texto do botão
    tabela.classList.add(classeBG);
    this.value = 'Background padrão';
  }
}
function TrocarColunaItalico() {

    var classe = 'colunaDescricao';
    var tabela = document.querySelector('#cabecalhoBanda');
    if(this.checked){
        tabela.classList.add(classe);
    }
    else{
        tabela.classList.remove(classe);
    }
}

function trocarData(){
    console.log("oii");

    var datainverter = document.querySelectorAll('td.nascimento');
    for (var i = 0 ; i < datainverter.length; i++ ){
        
        var data = datainverter[i].innerHTML;
        data = data.toString().split("/");
        datainverter[i].innerHTML = data[1]+"/"+data[0]+"/"+data[2];
    }
    
}