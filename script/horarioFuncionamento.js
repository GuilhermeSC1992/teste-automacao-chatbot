function verificarHorarioFuncionamento(dataAtual = new Date()) {
    const diaSemana = dataAtual.getDay(); // 0 = Domingo, 6 = Sábado
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const horaAtual = hora + minuto / 60;

    // Feriados fixos (exemplo)
    const feriados = [
        "2025-12-25",
        "2025-01-01"
    ];

    const dataISO = dataAtual.toISOString().split("T")[0];

    if (feriados.includes(dataISO)) {
        return "Fora do horário de funcionamento (Feriado)";
    }

    if (diaSemana === 0 || diaSemana === 6) {
        return "Fora do horário de funcionamento (Final de semana)";
    }

    if (diaSemana >= 1 && diaSemana <= 4) {
        if (horaAtual >= 8 && horaAtual < 20) {
            return "Dentro do horário de funcionamento";
        }
    }

    if (diaSemana === 5) {
        if (horaAtual >= 8 && horaAtual < 19) {
            return "Dentro do horário de funcionamento";
        }
    }

    return "Fora do horário de funcionamento";
}

console.log(verificarHorarioFuncionamento());
