//1

const INDICE = 13
let SOMA = 0
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K; }

console.log(SOMA); // A SOMA foi igual a 91

//2

let numero = 8;
let array_fibonacci = [0, 1];

while (array_fibonacci[array_fibonacci.length - 1] < numero) {
    let doisUltimos = array_fibonacci.slice(-2);
    let soma = doisUltimos[0] + doisUltimos[1];
    array_fibonacci.push(soma);
}

if (array_fibonacci.includes(numero)) {
    console.log('O número pertence a sequência');
} else {
    console.log('O número não pertence a sequência');
}

console.log(array_fibonacci);

//3

dados = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let array_valores = []

for (let i = 0; i < dados.length; i++) {
    array_valores.push(dados[i].valor)
  }

  maiorValor = Math.max(...array_valores);
  menorValor = Math.min(...array_valores);

  const array_valores_sem_zero = array_valores.filter((valor) => valor !== 0);

  media_mensal = array_valores_sem_zero.reduce((acc, valor) => acc + valor, 0)/array_valores_sem_zero.length

  dias_faturamento =  array_valores_sem_zero.filter((valor) => valor >media_mensal);

  console.log(`o menor valor de faturamento ocorrido em um dia do mês foi : ${menorValor}`)
  console.log(`o maior valor de faturamento ocorrido em um dia do mês foi: ${maiorValor}`)
  console.log(`Em ${dias_faturamento.length} dias o faturamento foi maior que a média mensal`)

//4


dados_estados = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

let array_valores_estados = []

for (let i = 0; i < dados_estados.length; i++) {
    array_valores_estados.push(dados_estados[i].valor)
  }

total = array_valores_estados.reduce((acc, valor) => acc + valor, 0)

for (let i = 0; i < array_valores_estados.length; i++) {
    calculo_percentual = (dados_estados[i].valor/total)*100;
    console.log(`Estado: ${dados_estados[i].estado}, Percentual de representação: ${calculo_percentual.toFixed(2)} %`);
  }

//5

const palavra = 'TARGET'
let palavra_invertida = ''

for (let i = palavra.length - 1; i >= 0; i--) {
    palavra_invertida += palavra[i];
  }
  console.log(palavra_invertida)
