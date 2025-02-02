# Criar um pacote de tokens no Design System

### Primeiro passo é criar uma pasta para tokens e nela iniciar o npm com o seguinte comando: npm init -y

### Criaremos o arquivo de colors com as cores e exportaremos também em um index para facilitar o import da lib

### Depois configuramos o typescript no projeto dentro ainda dos tokens com os comandos: npm i -D typescript, npx tsc --init

### Instalar o tsup, uma ferramenta de conversão do código em um pacote JS ou ES6 que vai poder ser carregado em outras aplicações: npm i tsup -D

### Configurar o package.json

##### -------------------------------------------------------------------------------------------------------------------------------------------

# React - Tem que ser o 18 para ter compatibilidade com o Stitches

### Criar um pacote react e inicia-lo, depois instalar o ts: npm init -y, npm i typescript -D

### Instalar o tsup, uma ferramenta de conversão do código em um pacote JS ou ES6 que vai poder ser carregado em outras aplicações: npm i tsup -D

### Instalar o react como dependencia de DESENVOLVIMENTO: npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18

### Configurar o package.json

### No projeto principal, antes da pasta packages iniciar com o init: npm init -y

### Configurar os arquivos packages do projeto e depois instalar o npm na root (design-system): npm i

##### -------------------------------------------------------------------------------------------------------------------------------------------

# Configuração do TypeScript

## Criar uma configuração do ts para ser compartilhavel entre vários pacotes, não sendo legal ter uma config de ts para cada uma

### Criar um pacote ts-config e iniciá-lo e configurar o arquivo package.json: npm init -y

### Criar as configurações dos arquivos base e react (basciamente copiar e colar)

### Criar o arquivo tsconfig no pacote react e alterar o tsconfig do pacote tokens

### Rodar o install na root do projeto e o build em cada pacote (react e tokens)

##### -------------------------------------------------------------------------------------------------------------------------------------------

# ESLint

## Criar um pacote eslint-config

### Iniciar o pacote com: npm init -y

### Configurar o arquivo package

### Instalar duas dependencias: npm i -D eslint @rocketseat/eslint-config

### Criar o arquivo de configuração do eslint index.js e configurar o package

### Fazer as importações nos packages dos pacotes tokens e react do eslint-config

### Rodar o install no root para pegagar todas as configurações

##### -------------------------------------------------------------------------------------------------------------------------------------------

# Configuração do Stitches no React 18

## Instalar o Stiches em produção no pacote do react: npm i @stitches/react

### Criar um arquivo em uma pasta no styles index.ts para configuração

##### -------------------------------------------------------------------------------------------------------------------------------------------

# Criar uma aplicação no Storybook

## Criar uma pasta em packages "docs" e iniciar o sb: npx storybook@latest init

### Remover os eslint padrões que vem na instalação e add o eslint do projeto

### Limpar todos os arquivos e deixar somente o package.json, vite.config.ts, criar um .eslintrc.json e deixar na pasta src somente uma stories vazia, add o primeiro storie

### Configurar o arquivo main.ts para deixar apontando para as pastas certas as documentações mdx e tsx

### Instalar: npm install --save-dev @storybook/manager-api @storybook/theming

### Configurar o tema dark, criar um arquivo manager.ts

### Configurar o arquivo main.ts novamente

##### -------------------------------------------------------------------------------------------------------------------------------------------

# TurboRepo

## Precisa configurar o git no repositório: git init

### Instalar o turbo: npm i turbo@latest -D

### O turbo repo serve quando estamos trabalhando com monorepo, rodar script em todos os pacotes ao mesmo tempo, acelera o processo de build da aplicação guardando um cache local (alterando somente os arquivos que foram alterados na hora da build)

### Criar um arquivo turbo.json e configurá-lo, configurando também o arquivo package.json add um "packageManager"

##### -------------------------------------------------------------------------------------------------------------------------------------------

# Publicação do projeto

## Instalar o pacote de daploy do storybook: npm i @storybook/storybook-deployer --save-dev

### Subir o projeto para o Github

### Criar uma pasta .github na raiz do projeto, dentro uma pasta workflows com o arquivo: deploy-docs.yml

##### -------------------------------------------------------------------------------------------------------------------------------------------

# Changeset

## Ajuda no versionamento quando se usa o monorepo, principalmente quando se vai utilizar o npm

### Instalar: npm i @changesets/cli -D

### Iniciá-lo: npx changeset init

### Configurar o arquivo config.json na pasta .changeset

### Fazer login no terminal na conta do npm

### Criar uma organização no npm

### Rodar o comando para adicionar os pacotes alterados: npm run changeset

### Rodar o comando para criar as versões dos pacotes: npm run version-packages 

### Rodar o comando para fazer o deploy: npm run release

##### -------------------------------------------------------------------------------------------------------------------------------------------

# Criar um remote caching para um externo CI/CD através da Vercel

### Criar um token na vercel e configurar o arquivo deploy-docs.yml

### Configurar o arquivo yml também para Github Actions com cach

-------------------------------------------------------------------------------------------------------------------------------------------

# Criar um CI/CD dos pacotes NPM

### Criar um arquivo "release.yml" e adcionar o conteúdo

### Criar um token no NPM

### Adicionar esse token nas Actions Security do projeto no Github