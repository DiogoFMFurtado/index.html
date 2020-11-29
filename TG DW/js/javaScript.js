function validaUser(){
  const par = document.getElementById("loginResultado");
  const nome = document.getElementById("nome");
  if (nome.value == "Diogo"){
    const pass = document.getElementById("pass");
    if (pass.value == "3000"){
      par.textContent = "Login bem sucedido";
      var x = document.getElementById("panel");
      if (x.style.display === "block") {
      x.style.display = "none";
      } else {
      x.style.display = "block";
  }
      return;
      
    }
  }
  par.textContent = "Login falhou!";
}

function registaUser(){
  const reg = document.getElementById("RegResultado");
  reg.textContent = "O registo foi bem sucedido";
}



