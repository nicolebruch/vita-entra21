document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const codigo = document.getElementById('codigo').value;
  if (!validarCodigo(codigo)) {
    document.getElementById('codigo').classList.add('invalido');
    document.getElementById('codigo').value = '';
    return;
  }

  const sexo = document.getElementById('sexo').value;
  const data = document.getElementById('data').value;
  const local = document.getElementById('local').value;

  const doacao = {
    codigo: codigo,
    sexo: sexo,
    data: data,
    local: local
  };

  const doacoesAnteriores = JSON.parse(localStorage.getItem('doacoes')) || [];
  doacoesAnteriores.push(doacao);
  localStorage.setItem('doacoes', JSON.stringify(doacoesAnteriores));

  document.getElementById('form').reset();

  atualizarAgendamentos();
  atualizarRelogioDigital();
});

document.getElementById('limpar_doacoes').addEventListener('click', function() {
  localStorage.removeItem('doacoes');
  atualizarAgendamentos();
  atualizarRelogioDigital();
});

function calcularProximaDoacao() {
  const doacoes = JSON.parse(localStorage.getItem('doacoes')) || [];
  if (doacoes.length === 0) {
    return null; 
  }

  const ultimaDoacao = new Date(doacoes[doacoes.length - 1].data);
  const proximaDoacao = new Date(ultimaDoacao);
  proximaDoacao.setMonth(proximaDoacao.getMonth() + 2); 
  proximaDoacao.setDate(proximaDoacao.getDate() + 30);
  return proximaDoacao;
}

function atualizarAgendamentos() {
  const doacoes = JSON.parse(localStorage.getItem('doacoes')) || [];
  const doacoesDiv = document.getElementById('doacoes');
  doacoesDiv.innerHTML = '';

  doacoes.forEach(function(doacao, index) {
    const doacaoDiv = document.createElement('div');
    doacaoDiv.classList.add('doacao');
    doacaoDiv.innerHTML = `
      <strong>Doação de Sangue ${index + 1}:</strong><br>
      Data: ${doacao.data}<br>
      Local: ${doacao.local}<br>
      <hr>
    `;
    doacoesDiv.appendChild(doacaoDiv);
  });
}

function atualizarRelogioDigital() {
  const proximaDoacao = calcularProximaDoacao();
  if (!proximaDoacao) {
    document.getElementById('relogioDigital').innerText = "Nenhuma doação adicionada";
    return;
  }

  const agora = new Date();
  const diff = proximaDoacao.getTime() - agora.getTime();
  const diasRestantes = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('relogioDigital').innerHTML = `
    <p>Tempo restante para a próxima doação:</p><br>
    ${diasRestantes} dias ${horasRestantes} horas ${minutosRestantes} minutos ${segundosRestantes} segundos
  `;
}

atualizarRelogioDigital();
setInterval(atualizarRelogioDigital, 1000);

document.getElementById('codigo').addEventListener('input', function() {
  const codigo = this.value;
  if (codigo.length > 8) {
    this.value = codigo.slice(0, 8);
  }
});

function validarCodigo(codigo) {
  const codigosPermitidos = ["40028922", "88966790", "11735057" , "39192313", ];
  return codigosPermitidos.includes(codigo);
}