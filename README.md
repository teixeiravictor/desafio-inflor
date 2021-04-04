# Desafio Inflor

Desafio técnico para a vaga de front-end pleno.

Pequena aplicação que consome a API SWAPI e exibe os personagens da saga Star Wars.

## Instalação

Este projeto está rodando a versão v14.16.0 do [nodejs](https://nodejs.org/en/blog/release/v14.16.0/).

Use o [nvm](https://github.com/nvm-sh/nvm) para gerenciar as versões do nodejs.

Por exemplo:

```bash
nvm install 14.16.0
nvm use 14.16.0
```

Para conferir a versão do node, faça:

```bash
node -v
```

Utilize o gerenciador de pacotes [npm](https://www.npmjs.com/get-npm) para instalar as dependências do projeto.

Caso prefira utilizar o [yarn](https://classic.yarnpkg.com/en/docs/install/) , fique a vontade!

```bash
npm install
# or
yarn install
```

## Inicializando

Execute o npm script dev para rodar o ambient de desenvolvimento com [HMR](https://webpack.js.org/concepts/hot-module-replacement/) ativo.

```bash
npm run dev
# or
yarn dev
```

Agora, abra a seguinte URL [http://localhost:3000](http://localhost:3000) com o seu browser.

![running](https://media.giphy.com/media/OcMzKlif164N6a4J3H/giphy.gif)

## Comandos

- `dev`: executa a aplicação com HMR ativo em `localhost:3000`
- `build`: cria o build para produção
- `start`: inicia um servidor local com base nos arquivos gerados no build
- `lint`: executa o linter em todos os componentes
- `test`: executa os testes na aplicação
- `test:watch`: deixa os testes em segundo plano para visualizar em tempo de execução

## Stack

Foi usado a seguinte stack:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Cloud

https://desafio-inflor.vercel.app/

Aplicação está com problemas de CORS quando hospedada na Vercel. Tentei resolver inserindo CORS proxy, mas não obtive sucesso. Idem para consumo do endpoint /api/starships/.

## TODO ✓

- [ ] Escrever testes usando Jest
- [ ] Adicionar husky.js para git hooks
- [ ] Consumir a Custom Search API do Google para imagens

## License

[MIT](https://choosealicense.com/licenses/mit/)
