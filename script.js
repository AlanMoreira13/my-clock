function uploadTime() {
  let display = document.querySelector(".display");

  let agora = new Date();

  let horario =
    format(agora.getHours()) +
    ":" +
    format(agora.getMinutes()) +
    ":" +
    format(agora.getSeconds());

  display.textContent = horario;
}

function format(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}

uploadTime();
setInterval(uploadTime, 1000);
