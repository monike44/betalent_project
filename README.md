# Projeto BeTalent

Este é um projeto de front-end desenvolvido em React, utilizando TypeScript e Vite como ferramenta de build. O projeto é uma aplicação web que visa fornecer uma tabela com dados de funcionários, permitindo filtragem e pesquisa.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

* `src`: Pasta principal do projeto, contendo todos os arquivos de código.
	+ `components`: Pasta contendo componentes reutilizáveis do projeto.
		- `filters`: Pasta contendo componentes de filtragem.
		- `mobilescreen`: Pasta contendo componentes específicos para telas móveis.
		- `searchbar`: Pasta contendo componente de pesquisa.
		- `styles`: Pasta contendo estilos globais do projeto.
	+ `services`: Pasta contendo serviços de API.
	+ `types`: Pasta contendo definições de tipos do projeto.
	+ `utils`: Pasta contendo funções utilitárias do projeto.
	+ `App.tsx`: Arquivo principal da aplicação.
	+ `index.css`: Arquivo de estilos globais do projeto.
* `vite.config.ts`: Arquivo de configuração do Vite.
* `package.json`: Arquivo de configuração do projeto.

## Tecnologias Utilizadas

* React
* TypeScript
* Vite
* Styled Components
* Lucide React

## Funcionalidades

* Tabela com dados de funcionários
* Filtragem por cargo, nome e telefone
* Pesquisa por nome, cargo e telefone
* Responsividade para telas móveis

## Como Executar o Projeto

1. Clone o repositório do projeto.
2. Instale as dependências utilizando `yarn install` ou `npm install`.
3. Execute o comando `yarn dev` ou `npm run dev` para iniciar o servidor de desenvolvimento.
4. Acesse o endereço `http://localhost:3000` no seu navegador para visualizar a aplicação.

## Como Contribuir

Se você deseja contribuir com o projeto, por favor, siga os seguintes passos:

1. Faça um fork do repositório do projeto.
2. Crie uma nova branch para sua contribuição.
3. Faça as alterações necessárias e commit-as.
4. Envie um pull request para o repositório original.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.