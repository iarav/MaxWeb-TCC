# MaxWeb - TCC
Este repositório visa desenvolver o sistema web desenvolvido de uma solução tecnológica para a elicitação do conhecimento, que integrará uma API em Python e um chatbot. A solução é voltada para o armazenamento dos dados em mapas conceituais estendidos (MCE), uma abordagem que permite organizar e recuperar as informações de maneira eficiente.<br>
A elicitação do conhecimento ocorre de forma automatizada por meio de perguntas estruturadas conduzidas pelo chatbot. Este processo permite que o chatbot guie o usuário através de uma série de perguntas, coletando informações relevantes para o sistema de maneira organizada. <br>
O chatbot foi denominado de `MAX` - `Management and Acquisition eXpert` e foi desenvolvido para o Trabalho de Conclusão de Curso (TCC).
Aqui está o README melhorado, em português e com algumas correções para padronização:

<br>

### Tecnologias Utilizadas

O sistema web foi desenvolvido com as seguintes tecnologias:
- **Ionic Framework**
- **React**
- **TypeScript**

<br>


## Instalação

Para instalar o MaxWeb, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:

    HTTP:
    ```bash
    git clone https://github.com/iarav/MaxWeb-TCC.git
    ```
    OU SSH:

    ```bash
    git clone git@github.com:iarav/MaxWeb-TCC.git
    ```

2. Acesse o diretório do projeto:
   ```bash
   cd MaxWeb-TCC
   ```
3. Construa a imagem Docker:
   ```bash
   docker compose build
   ```
4. Inicie o sistema:
   ```bash
   docker compose up
   ```

## Uso

Para utilizar o MaxWeb, basta abrir a plataforma de chat integrada ao sistema e iniciar uma conversa com o bot MAX. O usuário pode responder às perguntas estruturadas para colaborar na elicitação de conhecimento ou, conforme a configuração, fazer perguntas e obter assistência em diversas tarefas.

## Parar o Sistema

Para interromper a execução da aplicação, utilize o seguinte comando:
```bash
docker compose down
```

## Limpeza do Ambiente

Para limpar o ambiente após o uso, execute os seguintes comandos:

1. Remova os recursos não utilizados do Docker:
   ```bash
   docker system prune -f
   docker volume prune -f
   ```
2. Remova o diretório `node_modules` (caso seja necessário, delete manualmente ou execute):
   ```bash
   sudo rm -rf node_modules
   ```

---

Esse README padronizado oferece uma visão clara e orientada para a instalação, uso e manutenção do sistema MaxWeb.