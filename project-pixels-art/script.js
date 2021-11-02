const cliqueNaPaleta = document.getElementById('color-palette');

// Função feita com ajuda do nosso querido amigo Rod;
// a função abaixo deve selecionar a cor que o usuário
// clicar na paleta
function selecionaCor(evento) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  evento.target.classList.add('selected');
}
cliqueNaPaleta.addEventListener('click', selecionaCor);
// a linha acima escuta o evento do usuário selecionar uma cor

// a funcao abaixo deve pintar o pixel com a cor que o usuário
// selecionou na paleta
const cliqueNoPixel = document.getElementById('pixel-board');

function coloreOPixel(event) {
// feito com ajuda do nosso amigo Rod
  const cor = document.querySelector('.selected');
  const corSelecionada = window
    .getComputedStyle(cor, null)
    .getPropertyValue('background-color');
  console.log(corSelecionada);
  event.target.style.backgroundColor = corSelecionada;
}
cliqueNoPixel.addEventListener('click', coloreOPixel);

const limpaQuadro = document.getElementById('clear-board');
// a funcao abaixo recarrega a pagina, limpando todos os pixels.
// site que usei para entender o funcionamento do location.reload:
// https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
function limparOQuadro() {
  window.location.reload();
}
limpaQuadro.addEventListener('click', limparOQuadro);
