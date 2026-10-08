// Base de dados com resultados fictícios de Junho/2025
let resultados = {
  "ARG": {
    nome: "Argentina",
    data: "10/06/2025",
    placar: "ARG 1 x 1 COL"
  },
  "BRA": {
    nome: "Brasil",
    data: "12/06/2025",
    placar: "BRA 2 x 0 URU"
  },
  "COL": {
    nome: "Colômbia",
    data: "10/06/2025",
    placar: "COL 1 x 1 ARG"
  },
  "URU": {
    nome: "Uruguai",
    data: "12/06/2025",
    placar: "URU 0 x 2 BRA"
  },
  "CHI": {
    nome: "Chile",
    data: "15/06/2025",
    placar: "CHI 3 x 2 PER"
  }
};

// Solicita ao usuário a sigla do time
let sigla = prompt("Digite a sigla do time (ex: ARG, BRA, COL):").toUpperCase();

// Verifica se existe resultado para a sigla
if (resultados[sigla]) {
  let jogo = resultados[sigla];
  alert(`Resultado da última partida de ${jogo.nome}:\n\nData do jogo: ${jogo.data}\nPlacar: ${jogo.placar}`);
} else {
  alert("Sigla não encontrada. Verifique e tente novamente.");
}
