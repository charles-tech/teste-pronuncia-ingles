const variasFrasesIngles = document.getElementById("variasFrasesIngles");

const variasFrases = [];

const frase1 = "I SPEAK ENGLISH";
const frase2 = "YOU SPEAK ENGLISH";
const frase3 = "HE SPEAKS ENGLISH";
const frase4 = "SHE SPEAKS ENGLISH";
const frase5 = "THEY SPEAK ENGLISH";
const frase6 = "WE SPEAK ENGLISH";
const frase7 = "I WAS THINKING ABOUT HAVING A TATTOO";
const frase8 = "MANY CHILDREN TODAY SPEND HOURS IN FRONT OF A COMPUTER";
const frase9 = "A CHEAP CHIP ON THE SHEEP SHIP";

variasFrases.push(
  frase1,
  frase2,
  frase3,
  frase4,
  frase5,
  frase6,
  frase7,
  frase8
);

function sortear(a, b) {
  return parseInt(Math.random() * (b - a) + 1);
}

resposta.innerHTML = ` <button id="variasFrasesIngles" class="btn-Nova-frase">Nova Frase</button>`;

document.body.addEventListener("click", (e) => {
  if (e.target.id == "variasFrasesIngles") {
    const numeroFrase = sortear(1, variasFrases.length);
    var fraseEscolhida = variasFrases[numeroFrase];

    variasFrasesIngles.innerHTML = `<span class="box-pergunta">${fraseEscolhida}<?span>`;

    const frase = fraseEscolhida;
    // const fraSee = frase.toUpperCase();
    // console.log(fraSee);

    const elementoChute = document.getElementById("chute");
    const resposta = document.getElementById("resposta");
    window.SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "en";
    recognition.start();

    recognition.addEventListener("result", onSpeak);

    function onSpeak(e) {
      chute = e.results[0][0].transcript;
      const chuTee = chute.toUpperCase();
      console.log(chuTee);

      if (frase === chuTee) {
        resposta.innerHTML = `<br><br><span class="box-resposta">Certa a Pronuncia<?span>
        
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
        contador += 1;
      } else {
        resposta.innerHTML = `<br><br><span class="box-resposta-incorreto">Incorreto. Tente Novamente.<?span>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
      }

      exibeChutenaTela(chute);
    }

    function exibeChutenaTela(chute) {
      elementoChute.innerHTML = `
    <div class="vcDisse">Você disse</div>
    <span class="box">${chute}<?span>`;
    }

    document.body.addEventListener("click", (e) => {
      if (e.target.id == "jogar-novamente") {
        window.location.reload();
      }
    });
  }
});
