# Notas dos alunos

Este projeto é um exemplo de como utilizar paginação em uma lista de dados utilizando React.

## Como compilar e rodar o projeto

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Clone este repositório na sua máquina local.
3. Abra o terminal na pasta raiz do projeto e execute o comando `npm install` para instalar as dependências do projeto.
4. Após a instalação das dependências, execute o comando `npm start` para rodar o projeto no modo de desenvolvimento.
5. Abra o navegador e acesse o endereço `http://localhost:3000` para visualizar o projeto em execução.

## Funcionalidades

O projeto consiste em uma lista de notas de alunos, ordenada pelo nome em ordem alfabética. A lista é dividida em páginas de 3 itens cada, e é possível navegar entre as páginas utilizando a paginação presente no fim da lista.

Cada item da lista apresenta o nome do aluno e sua respectiva nota. Os nomes são exibidos em verde caso a nota seja maior ou igual a 5 e em vermelho caso a nota seja menor que 5.

## Estrutura do projeto

O projeto é composto pelos seguintes arquivos:

- `App.js`: componente principal do projeto, que define a página atual e as funções de navegação.
- `Notas.js`: componente que renderiza a lista de notas e a paginação.
- `Paginacao.js`: componente que renderiza os botões de navegação e a numeração das páginas.
- `data.js`: arquivo contendo os dados dos alunos e o número de itens por página.

## Tecnologias utilizadas

- React
- JavaScript
- HTML5
- CSS3

## Resultado

![Sem título](https://user-images.githubusercontent.com/20405745/236128352-817f9c5c-c7e2-4386-8d7c-9a592078e8de.png)


## Autor 

Nicoli Stefani


