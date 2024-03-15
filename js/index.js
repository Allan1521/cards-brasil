/* para declarar um vetor sempre devemos usar a palavra var, seguida do nome do vetor.Exemplo: var nomes = [] os conchetes indicam que a variável é um vetor */
var nomes = ['jogador1', 'jogador2', 'jogador3', 'jogador4'];

/*Para acessar uma informação do vetor, deve-se utilizar o nome do vetor seguido de sua posição. Exemplo abaixo:*/
nomes[1]

/* console.log()= é um comando de sáida que exibe algo no console do navegador */
console.log(nomes[0])

/* chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
colchetes [ ] para indicar um array;
dois pontos : para separar a chave e seu valor correspondente;
vírgula , para indicar a separação entre os elementos.*/

console.log('Cards do Brasil')
/* Melhor forma de selecionar qualque informação é "document.querySelector() " */
/* Guarda o elemento com a classe cards dentro da variável cards */
let cards = document.querySelector('.cards')

/* fetch - Lê e carrega as informaçõs de algum lugar netsa caso de um arquivo json, qdo o fetch carrega informações de um json as informações são convertidas em string(texto)*/
fetch('jogadores-brasil.json') /* then - depois que carregou, faça o seguinte passo... */
    /* recebe as informações vindas de uma outra função ou método que no caso seria o método fetch.
    o then deverá receber as informções em uma variável que no caso é a variável resposta e redirecionar estas informações para algum lugar que no caso será para um arquivo json novamente: resposta.json()*/
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((jogador) => {

        /* criar um card padrão */
        let card = document.createElement('div')

        /* classlist.add = adiciona uma classe a um elemento html */
        card.classList.add('card')
        console.log(card)

        /* colocar cada card debtro da div cards */
        cards.appendChild(card)

        /* preecher os dados de cada jogador */
        card.innerHTML = `
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4> `

    })
    )


