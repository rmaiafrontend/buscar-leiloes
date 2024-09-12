export function formatarParaReal(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export function ajustarParaFusoBrasilia(dataHora) {
  const data = new Date(dataHora);

  // Obter a data no fuso horário de Brasília
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Obter a hora e minutos no fuso horário de Brasília (sem segundos)
  const horaFormatada = data.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // formato 24 horas
  });

  return {
    data: dataFormatada,
    hora: horaFormatada,
  };
}
