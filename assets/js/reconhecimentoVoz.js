const frase = "I speak English";
frase.toUpperCase;

const elementoChute = document.getElementById("chute");
const resposta = document.getElementById("resposta");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  chute.toUpperCase;
  console.log(chute);
  console.log(frase);

  if (frase === chute) {
    resposta.innerHTML = `<br><br><span class="box-resposta">Certa a Pronuncia<?span>`;
  } else {
    resposta.innerHTML = `<br><br><span class="box-resposta">Incorreto. Tente Novamente.<?span>`;
  }

  exibeChutenaTela(chute);
}

function exibeChutenaTela(chute) {
  elementoChute.innerHTML = `
    <div class="vcDisse">Você disse</div>
    <span class="box">${chute}<?span>`;
}
