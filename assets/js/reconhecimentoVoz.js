const frase = "I speak English";
frase.toUpperCase;

const elementoChute = document.getElementById("chute");
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
    alert("O Miserável é um Gênio ");
  } else {
    alert("errou, da zero para ele");
  }

  exibeChutenaTela(chute);
}

function exibeChutenaTela(chute) {
  elementoChute.innerHTML = `
    <div class="vcDisse">Você disse</div>
    <span class="box">${chute}<?span>`;
}
