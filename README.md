
Jogo de Stop 
Este projeto implementa uma versão interativa do jogo "Stop" (também conhecido como Adedanha, Salada de Frutas, etc.) em uma aplicação web. Os jogadores têm o desafio de pensar em palavras que se encaixem em categorias atribuídas e comecem com uma letra aleatória. Um temporizador exibe o tempo restante para a rodada, e ao final, as respostas corretas e incorretas são destacadas, e a pontuação é atualizada.

Funcionalidades Principais
Iniciar Jogo:

Ao clicar no botão "Iniciar Jogo", uma letra aleatória é sorteada e exibida.
Categorias e campos de entrada são apresentados para o jogador preencher.
Temporizador:

Um cronômetro regressivo inicia junto com o jogo, mostrando o tempo restante.
Verificar Palavras:

Ao clicar no botão "Verificar Palavras", as palavras inseridas são avaliadas.
As palavras corretas têm um destaque verde, e as incorretas, vermelho.
Pontuação:

A pontuação é calculada com base no número de palavras corretas e incorretas.
Acertos somam 10 pontos, erros subtraem 5 pontos.
Popup de Pontuação:

Um popup exibe a contagem de acertos e erros após verificar as palavras.
O popup desaparece após alguns segundos.
Estrutura do Código
HTML (index.html):

Estrutura básica da página web.
Botões para iniciar o jogo e verificar palavras.
Áreas para mostrar a letra sorteada, categorias e entrada de palavras.
CSS (styles.css):

Estilização da interface para uma aparência agradável.
JavaScript (script.js):

Lógica do jogo, manipulação de DOM e interação com o usuário.
Funções para iniciar o jogo, verificar palavras, exibir pontuação e gerenciar o temporizador.
