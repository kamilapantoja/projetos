const escreveTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const adicionaTarefa = document.getElementById('criar-tarefa');

// a funcao abaixo cria uma lista de tarefas que o usuario
// adiciona através do input-text e clica no botão de adicionar tarefa.
function adicionarTarefasALista() {
  const lista = document.createElement('li');
  lista.innerText = escreveTarefa.value;
  listaTarefas.appendChild(lista);
  escreveTarefa.value = '';
}
adicionaTarefa.addEventListener('click', adicionarTarefasALista);
// a linha acima escuta o usuário clicar no botão de adicionar tarefas a lista

// abaixo temos um escutador de eventos que irá mudar a cor de fundo
// da tarefa selecionada sempre que o usuário clicar nela.
listaTarefas.addEventListener('click', (evento) => {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    tarefa.classList.remove('selected');
  }
  evento.target.classList.add('selected');
});

// Site que usei pra entender como funciona o Toggle:
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
listaTarefas.addEventListener('dblclick', (evento) => {
  evento.target.classList.toggle('completed');
});
