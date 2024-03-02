document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const local = document.getElementById('local').value;

    const agendamento = {
        data: data,
        hora: hora,
        local: local
    };


    localStorage.removeItem('agendamentos');


    localStorage.setItem('agendamentos', JSON.stringify([agendamento]));


    document.getElementById('form').reset();


    atualizarAgendamentos();
});

document.getElementById('limpar_agendamentos').addEventListener('click', function() {
    localStorage.removeItem('agendamentos');
    atualizarAgendamentos();
});

function atualizarAgendamentos() {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const agendamentosDiv = document.getElementById('agendamentos');
    agendamentosDiv.innerHTML = '';

    agendamentos.forEach(function(agendamento, index) {
        const agendamentoDiv = document.createElement('div');
        agendamentoDiv.classList.add('agendamento');
        agendamentoDiv.innerHTML = `
            <strong>Agendamento:</strong><br>
            Data: ${agendamento.data}<br>
            Hora: ${agendamento.hora}<br>
            Local: ${agendamento.local}<br>
            <hr>
        `;
        agendamentosDiv.appendChild(agendamentoDiv);
    });
}

atualizarAgendamentos();
