const variasFrasesIngles = document.getElementById("variasFrasesIngles");

const variasFrases = [];

const teste = "teste1";
const teste2 = "I speak English";
const teste3 = "you speak English";
const teste4 = "he speaks English";
const teste5 = "she speaks English";
const teste6 = "we speak English";
const teste8 = "open the door";
const teste7 = "they speak English";
const teste9 = "I have a car";

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

resposta.innerHTML = ` <button id="variasFrasesIngles" class="btn-jogar">Nova Frase</button>`;

document.body.addEventListener("click", (e) => {
  if (e.target.id == "variasFrasesIngles") {
    const numeroFrase = sortear(1, variasFrases.length);
    var fraseEscolhida = variasFrases[numeroFrase];

    variasFrasesIngles.innerHTML = `<span class="box-pergunta">${fraseEscolhida}<?span>`;

    const frase = fraseEscolhida;
    console.log(fraseEscolhida);

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

      if (frase === chute) {
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
