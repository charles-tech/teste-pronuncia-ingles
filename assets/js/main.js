const variasFrasesIngles = document.getElementById("variasFrasesIngles");

const variasFrases = [];

const teste = "teste1";
const teste2 = "I SPEAK ENGLISH";
const teste3 = "YOU SPEAK ENGLISH";
const teste4 = "HE SPEAKS ENGLISH";
const teste5 = "SHE SPEAKS ENGLISH";
const teste6 = "THEY SPEAK ENGLISH";
const teste7 = "WE SPEAK ENGLISH";
const teste8 = "I WAS THINKING ABOUT HAVING A TATTOO";
const teste9 = "MANY CHILDREN TODAY SPEND HOURS IN FRONT OF A COMPUTER";

variasFrases.push(
  teste,
  teste2,
  teste3,
  teste4,
  teste5,
  teste6,
  teste7,
  teste8,
  teste9
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
