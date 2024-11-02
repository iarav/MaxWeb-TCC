# MaxWeb - TCC

Este repositório contém o sistema web desenvolvido como uma solução tecnológica para a elicitação do conhecimento, que integra uma **API em Python** e um **chatbot**. A solução é voltada para o armazenamento de dados em **mapas conceituais estendidos (MCE)**, permitindo a organização e recuperação eficiente das informações.

A elicitação do conhecimento ocorre de forma automatizada, por meio de perguntas estruturadas conduzidas pelo chatbot. Esse processo permite que o chatbot guie o usuário através de uma série de perguntas, coletando informações relevantes de maneira organizada. O chatbot foi denominado **MAX** - *Management and Acquisition eXpert* e foi desenvolvido para o Trabalho de Conclusão de Curso (TCC).

### Tecnologias Utilizadas

O sistema web foi desenvolvido com as seguintes tecnologias:
- **Ionic Framework**
- **React**
- **TypeScript**

<br>
<br>

## Sumário

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação e Execução com Docker](#instalação-e-execução-com-docker)
3. [Instalação e Execução sem Docker](#instalação-e-execução-sem-docker)
4. [Uso](#uso)
5. [Parar o Sistema](#parar-o-sistema)
6. [Limpeza do Ambiente](#limpeza-do-ambiente)

---

## Pré-requisitos

Para rodar o sistema, você precisará dos seguintes itens instalados no seu ambiente de desenvolvimento:

1. **Node.js e npm**: [Instale o Node.js](https://nodejs.org) (versão 16 ou superior).
2. **Ionic CLI**: Instale o Ionic CLI globalmente:
   ```bash
   npm install -g @ionic/cli
   ```
3. **Docker** (opcional, para rodar via contêineres): [Instale o Docker](https://docs.docker.com/get-docker/).
4. **Git**: [Instale o Git](https://git-scm.com/downloads) para clonar o repositório.

---

## Instalação e Execução com Docker

Para instalar e executar o MaxWeb usando Docker, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/iarav/MaxWeb-TCC.git
   ```
   ou, usando SSH:
   ```bash
   git clone git@github.com:iarav/MaxWeb-TCC.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd MaxWeb-TCC
   ```

3. **Construa a imagem Docker**:
   ```bash
   docker compose build
   ```

4. **Inicie o sistema**:
   ```bash
   docker compose up
   ```

<br>
<br>

## Instalação e Execução sem Docker

Caso prefira rodar o projeto sem Docker, execute o camando abaixo:

   ```bash
   npm install && ionic serve --host 0.0.0.0 --port 8100 --disableHostCheck
   ```
   Este comando instalará todas as bibliotecas necessárias listadas no `package.json` e o servidor deve iniciar em http://localhost:8100, onde você pode acessar o sistema.

<br>
<br>

## Uso

Para utilizar o sistema, você pode:

1. Como engenheiro do conhecimento, acessar a página inicial e começar uma nova elicitação, seguindo o fluxo instruido na tela e adquirir um código para passa-lo ao agente.

2. Como agente do conhecimento, acessar o chatbot com um código informado pelo engenheiro e conversar com o chatbot através da ingterface desenvolvida.

<br>
<br>

## Parar o Sistema

Para interromper a execução da aplicação quando estiver usando Docker, utilize o seguinte comando:
```bash
docker compose down
```

<br>
<br>

## Limpeza do Ambiente

Para limpar o ambiente após o uso, execute os seguintes comandos:

1. **Remova os recursos não utilizados do Docker**:
   ```bash
   docker system prune -f
   docker volume prune -f
   ```

2. **Remova o diretório `node_modules`** (caso seja necessário, delete manualmente ou execute):
   ```bash
   sudo rm -rf node_modules
   ```

