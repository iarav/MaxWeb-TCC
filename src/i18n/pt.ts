const pt = {
  description: {
    title: "O que eu faço?",
    obtencaoConhecimento: "Obtenção do Conhecimento:",
    obtencaoConhecimentoDescription:
      "A obtenção do conhecimento é um processo pelo qual uma pessoa, chamada aqui de 'Engenheiro do Conhecimento', procura capturar informações e insights específicos que estão na posse de outra pessoa, conhecida como 'Agente do Conhecimento'. O objetivo é adquirir esse saber de maneira estruturada para poder aplicá-lo em diferentes contextos, como projetos, pesquisas ou solução de problemas específicos.",
    comoFunciona: "Como Funciona na Prática:",
    comoFunciona1: "1. Para o Engenheiro do Conhecimento:",
    comoFunciona1Description1Meta: "Meta: ",
    comoFunciona1Description1MetaDescription:
      "Sua tarefa é definir claramente o que precisa saber. Isso é feito através da Questão Focal, onde você especifica o tópico e o contexto.",
    comoFunciona1Description1Geracao: "Geração e Uso do Código: ",
    comoFunciona1Description1GeracaoDescription:
      "Ao fornecer a Questão Focal e o nome do agente, um código é gerado. Esse código, uma vez enviado ao agente, permite que ele saiba exatamente sobre o que será questionado.",
    comoFunciona2: "2. Para o Agente do Conhecimento:",
    comoFunciona2Topic: "Responder através do Chatbot: ",
    comoFunciona2TopicDescription:
      "Ao usar o código para acessar o site, o agente é levado a um chatbot. Aqui, o agente responde a perguntas que ajudam a descompactar e transferir seu conhecimento de forma que possa ser facilmente compreendido e utilizado pelo engenheiro.",
    finalidade: "Finalidade:",
    finalidadeDescription:
      "Este sistema é projetado para garantir que a transferência de conhecimento seja feita de forma eficiente e que o engenheiro do conhecimento possa utilizar as informações adquiridas de forma produtiva. Por outro lado, o agente tem a oportunidade de compartilhar sua expertise de uma forma que seja reconhecida e valorizada.",
  },
  getStarted: {
    alertMessage: "Por favor, preencha todos os campos",
    modal: {
      head: "Antes de  prosseguirmos, confirme se compreendemos corretamente sua questão focal: ",
      informedFocalQuestion: "Questão Focal Informada: ",
    },
    title: "Vamos Começar?",
    focalQuestionInput: "digite a questão focal",
    agentInput: "digite o nome do agente",
    emailInput: "digite o seu email",
    submitButton: "enviar",
    cancelButton: "cancelar",
    description: `Aqui você deve informar a questão focal e o agente da qual você deseja obter o conhecimento. A questão focal(QF) deve conter <strong>AGENTE, CONCEITO E DOMÍNIO</strong>. Além disso, ela deve estar no seguinte formato:
<br><br>”O QUE <strong>[AGENTE]</strong> VOCÊ PENSA SOBRE O <strong>[CONCEITO]</strong> NO CONTEXTO DE <strong>[DOMÍNIO]</strong>?”
<br><br>Por exemplo, a pergunta pode ser: <strong>“O que você pensa sobre o autoconhecimento no contexto de sucesso?”</strong>, na qual o você seria o agente, AUTOCONHECIMENTO seria o CONCEITO e SUCESSO seria o DOMÍNIO.`,
  },
  confirmFocalQuestionModal: {
    info: "Se algum campo estiver incorreto, corrija-o antes de prosseguir.",
  },
  codigoModal: {
    title: "Transferência de conhecimento iniciada com sucesso!",
    description:
      "Envie o código para seu agente e instrua-o a iniciar a conversa com o seu chatbot personalizado",
    codigo: "Código: ",
    linkAcesso: "Link para Acesso: ",
  },
  insertCode: {
    title: "digite o código para ingressar no chat:",
    codigo: "código",
    description:
      "Olá! Para acessar nosso chatbot e conseguir responder todas as perguntas necessárias, digite o código de acesso que foi passado para você! Após isso você será direcionado para o nosso chat, onde poderá responder todas as perguntas! Até lá!",
  },
  commons: {
    close: "Fechar",
    agent: "Agente",
    concept: "Conceito",
    domain: "Domínio",
  },
};

export default pt;
