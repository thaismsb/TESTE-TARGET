# Teste Técnico
```
Todo o código está no arquivo questoes.js, porém abaixo seguem os códigos, questões e prints dos outputs do terminal.
A linguagem escolhida para a resolução foi javascript.
```
## 1. 

Observe o trecho de código abaixo:
```c
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
Imprimir(SOMA);
```
Ao final do processamento, qual será o valor da variável SOMA?

**Resposta:**

```
const INDICE = 13
let SOMA = 0
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K; }

console.log(`A soma é igual a ${SOMA}`); 
```
![image](https://github.com/user-attachments/assets/4df8f7a4-8c04-431e-b348-f5ffffb49c0c)

---

## 2. 

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.

**IMPORTANTE:**
- Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código.

**Resposta:**

```
let numero = 8;
let array_fibonacci = [0, 1];

while (array_fibonacci[array_fibonacci.length - 1] < numero) {
    let doisUltimos = array_fibonacci.slice(-2);
    let soma = doisUltimos[0] + doisUltimos[1];
    array_fibonacci.push(soma);
}

console.log('Número escolhido ',numero);

console.log('Números da sequência = ',array_fibonacci);

if (array_fibonacci.includes(numero)) {
    console.log('O número pertence a sequência');
} else {
    console.log('O número não pertence a sequência');
}

```
![image](https://github.com/user-attachments/assets/720ff6f8-84f9-4c75-8400-ff90ecd19f9a)


---

## 3. 

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**IMPORTANTE:**
1. Usar o JSON ou XML disponível como fonte dos dados do faturamento mensal;
2. Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

**Resposta:**

```
let array_valores = []

//dados são os valores disponibilizados para o teste que estão no arquivo1.js
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
```
---
![image](https://github.com/user-attachments/assets/7966c476-173a-4128-9c0e-49c38caa4150)

## 4. 

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

- **SP** – R$67.836,43
- **RJ** – R$36.678,66
- **MG** – R$29.229,88
- **ES** – R$27.165,48
- **Outros** – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Resposta:**

```
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
```
![image](https://github.com/user-attachments/assets/e69c7b2d-295d-429a-b598-c4566669c949)
---

## 5. 

Escreva um programa que inverta os caracteres de uma string.

**IMPORTANTE:**
1. Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código.
2. Evite usar funções prontas, como, por exemplo, `reverse`.

**Resposta:**

```
const palavra = 'TARGET'
let palavra_invertida = ''

for (let i = palavra.length - 1; i >= 0; i--) {
    palavra_invertida += palavra[i];
  }
  console.log(palavra_invertida)
```
![image](https://github.com/user-attachments/assets/7c0a0442-ccf5-453f-abdb-85da93c9d80f)

---


