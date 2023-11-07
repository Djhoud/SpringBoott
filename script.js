let letraSorteada = '';
let categoriasInputs = {};
let pontuacao = 0;

function iniciarJogo() {
  pontuacao = 0;
  let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letraSorteada = letras[Math.floor(Math.random() * letras.length)];
  let letraSorteadaElement = document.getElementById('letraSorteada');
  letraSorteadaElement.textContent = `Letra sorteada: ${letraSorteada}`;

  let categorias = document.querySelectorAll('#categorias .categoria');
  categoriasInputs = {};
  categorias.forEach(categoria => {
    let input = categoria.querySelector('input');
    categoriasInputs[categoria.id] = input;
    input.value = '';
    categoria.classList.remove('box-verde', 'box-vermelha');
    input.disabled = false;
  });

  startTimer(30);
}

function verificarPalavras() {
  let palavrasCorretas = 0;
  let palavrasErradas = 0;
  for (let categoria in categoriasInputs) {
    let input = categoriasInputs[categoria];
    let palavras = input.value.trim().toUpperCase();
    let categoriaElement = document.getElementById(categoria);
    if (palavras.startsWith(letraSorteada)) {
      categoriaElement.classList.add('box-verde');
      categoriaElement.classList.remove('box-vermelha');
      pontuacao += 10;
      palavrasCorretas++;
    } else {
      categoriaElement.classList.add('box-vermelha');
      categoriaElement.classList.remove('box-verde');
      pontuacao -= 5;
      palavrasErradas++;
    }
  }
  exibirPontuacao(palavrasCorretas, palavrasErradas);
}

function exibirPontuacao(acertos, erros) {
  let pontuacaoElement = document.getElementById('pontuacao');
  pontuacaoElement.textContent = `Pontuação: ${pontuacao} (Acertos: ${acertos}, Erros: ${erros})`;
  pontuacaoElement.classList.add('show');

  setTimeout(function () {
    pontuacaoElement.classList.remove('show');
  }, 3000);
}

function startTimer(duration) {
  let timer = duration;
  let minutes;
  let seconds;
  let countdownTimer = setInterval(function () {
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

  let historicoPontuacoes = [];

function exibirPontuacao(acertos, erros) {
  let pontuacaoElement = document.getElementById('pontuacao');
  pontuacaoElement.textContent = `Pontuação: ${pontuacao} (Acertos: ${acertos}, Erros: ${erros})`;
  pontuacaoElement.classList.add('show');

  setTimeout(function () {
    pontuacaoElement.classList.remove('show');
  }, 3000);

  atualizarHistorico(acertos, erros);
}

function atualizarHistorico(acertos, erros) {
  let historicoElement = document.getElementById('lista-pontuacoes');
  let historicoItem = document.createElement('li');
  historicoItem.textContent = `Pontuação: ${pontuacao} (Acertos: ${acertos}, Erros: ${erros})`;
  historicoElement.appendChild(historicoItem);
  historicoPontuacoes.push(pontuacao);
}
}
