let letraSorteada = '';
let categoriasInputs = {};
let pontuacao = 0;
let countdownTimer;

function iniciarJogo() {
  pontuacao = 0;
  let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letraSorteada = letras[Math.floor(Math.random() * letras.length)];
  let letraSorteadaElement = document.getElementById('letraSorteada');
  letraSorteadaElement.textContent = letraSorteada;

  let categorias = document.querySelectorAll('#categorias .categoria');
  categoriasInputs = {};
  categorias.forEach((categoria, index) => {
    let input = categoria.querySelector('input');
    categoriasInputs[`categoria${index + 1}`] = input;
    input.value = '';
    input.style.backgroundColor = ''; // Limpar a cor de fundo
    input.disabled = false;
    input.addEventListener('input', function () {
      if (input.value.trim().toUpperCase()[0] !== letraSorteada) {
        input.style.backgroundColor = "#F08080"; // Cor de fundo vermelha se a primeira letra não for igual à letra sorteada
      } else {
        input.style.backgroundColor = ''; // Limpar a cor de fundo se a primeira letra for igual à letra sorteada
      }
    });
  });

  startTimer(45);
}

function verificarPalavras() {
  clearInterval(countdownTimer); // Encerrar o tempo

  let palavrasCorretas = 0;
  let palavrasErradas = 0;
  for (let categoria in categoriasInputs) {
    let input = categoriasInputs[categoria];
    let palavras = input.value.trim().toUpperCase();
    if (palavras.length > 0 && palavras[0] === letraSorteada) {
      palavrasCorretas++;
      input.style.backgroundColor = "#90EE90"; // Cor de fundo verde para palavras corretas
    } else {
      palavrasErradas++;
      input.style.backgroundColor = "#F08080"; // Cor de fundo vermelha para palavras incorretas
    }
    input.disabled = true;
  }
  pontuacao += palavrasCorretas * 10 - palavrasErradas * 5;
  exibirPontuacao(palavrasCorretas, palavrasErradas);
  exibirPopUp(palavrasCorretas, palavrasErradas);
}

function exibirPontuacao(acertos, erros) {
  let pontuacaoElement = document.getElementById('pontuacao');
  pontuacaoElement.textContent = `Pontuação: ${pontuacao} (Acertos: ${acertos}, Erros: ${erros})`;
  pontuacaoElement.classList.add('show');

  setTimeout(function () {
    pontuacaoElement.classList.remove('show');
  }, 4500);
}

function exibirPopUp(acertos, erros) {
  let popUp = document.getElementById('pop-up');
  popUp.textContent = `Acertos: ${acertos}, Erros: ${erros}`;
  popUp.classList.add('show');

  setTimeout(function () {
    popUp.classList.remove('show');
  }, 3000);
}

function startTimer(duration) {
  let timer = duration;
  let minutes;
  let seconds;
  countdownTimer = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('cronometro').textContent = `Tempo: ${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(countdownTimer);
      document.getElementById('cronometro').textContent = 'Tempo Esgotado!';
      for (let categoria in categoriasInputs) {
        let input = categoriasInputs[categoria];
        input.disabled = true;
      }
      verificarPalavras();
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  let popUp = document.getElementById('pop-up');
  if (popUp) {
    popUp.classList.remove('show');
  }
});
