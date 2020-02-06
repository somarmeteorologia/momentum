[![CircleCI](https://circleci.com/gh/somarmeteorologia/momentum.svg?style=svg)](https://circleci.com/gh/somarmeteorologia/momentum)
[![codecov](https://codecov.io/gh/somarmeteorologia/momentum/branch/master/graph/badge.svg)](https://codecov.io/gh/somarmeteorologia/momentum)

# Momentum

> Design System utilizado nos produtos e projetos da Somar Meteorologia.

## Para desenvolvedores

### Instale as dependências

```sh
yarn
```

### Rodando aplicação em desenvolvimento

Utilizamos o Storybook para tornar o desenvolvimento dos componentes com a melhor experiência possível, rode o comando abaixo para iniciar em modo de desenvolvimento.

```sh
yarn start
```

### Executando os testes

@todo

### Gerando uma nova versão

O primeiro passo após suas novas alterações estarem feitas e já com o merge na master é confirmar se a master está atualizada através do `git pull`, também verificar se a versão no `package.json` foi alterada para a devida. Lembrando que utilizamos versionamento semântico, saiba mais [aqui](https://semver.org/).

Agora, é necessário gerar o build com as novas alterações,

```sh
yarn build
```

Para publicar sua nova versão, utilize o comando abaixo, lembrando que você já deve estar logado em sua conta do NPM através do NPM CLI.

```
npm publish --access public
```

Todos esses comandos são executados no diretório raiz do repositório.

## Dúvidas ou sugestões

Você pode abrir uma [issue](https://github.com/somarmeteorologia/momentum/issues/new) ou entrar no [Gitter](https://gitter.im/barragens/community#) do projeto.
