const btnLogin = document.getElementById('btn-login');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');

function validationLogin() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validationLogin);

const aceite = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');

// sites que pesquisei sobre a propriedade disabled:
// https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
// https://flaviocopes.com/how-to-disable-button-javascript/
function habilitarBotaoEnviar() {
  if (aceite.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
aceite.addEventListener('change', habilitarBotaoEnviar);
