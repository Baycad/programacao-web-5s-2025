const estaVazio = (valor) => !valor || !valor.trim();

const setErro = (input, mensagem) => {
  input.classList.add('is-invalid');
  input.nextElementSibling
    ? (input.nextElementSibling.textContent = mensagem)
    : input.insertAdjacentHTML(
        'afterend',
        `<div class="invalid-feedback">${mensagem}</div>`
      );
};

const limpaErro = (input) => input.classList.remove('is-invalid');

document
  .getElementById('formAgendamento')
  .addEventListener('submit', (e) => {
    let formularioValido = true;

    const obrigatorios = [
      'nome',
      'sobrenome',
      'cpf',
      'dataNascimento',
      'telefone',
      'cep',
      'clinica',
      'especialidade',
      'dataDaConsulta',
      'horarioDaConsulta',
    ].map((id) => document.getElementById(id));

    obrigatorios.forEach((campo) => {
      limpaErro(campo);
      const eSelect = campo.tagName === 'SELECT';
      const valorCampo = eSelect ? campo.value : campo.value.trim();

      if (
        estaVazio(valorCampo) ||
        (eSelect && campo.selectedIndex === 0)
      ) {
        setErro(campo, 'Preencha este campo');
        formularioValido = false;
      }
    });

    if (formularioValido) {
      const dataConsulta = new Date(
        document.getElementById('dataDaConsulta').value +
          'T' +
          document.getElementById('horarioDaConsulta').value
      );
      const agora = new Date();

      if (isNaN(dataConsulta) || dataConsulta <= agora) {
        setErro(
          document.getElementById('dataDaConsulta'),
          'A data/horário da consulta deve ser posterior ao momento atual'
        );
        formularioValido = false;
      }
    }

    if (!formularioValido) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
