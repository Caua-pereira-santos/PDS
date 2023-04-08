function mostrarSalgado() {
    document.getElementById("opcoesDoce").style.display = "none";
    document.getElementById("opcoesSalgado").style.display = "block";
  }
  
  function mostrarDoce() {
    document.getElementById("opcoesSalgado").style.display = "none";
    document.getElementById("opcoesDoce").style.display = "block";
  }
  
  
  
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  
  function mostrarCarneVermelha() {
      var opcoesMassa = document.getElementsByName('massas-salgado');
      var opcoesCarne = document.getElementById('opcoes_carne');
      if (opcoesMassa[1].checked) {
        opcoesCarne.style.display = 'block';
      } else {
        opcoesCarne.style.display = 'none';
      }
    }