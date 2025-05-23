// src/i18n/pt.js
import { pt } from 'vuetify/locale'

export default {
  $vuetify: { ...pt },
  all: "Todo | Todos",
  close: "Fechar",
  cancel: "Cancelar",
  restart: "Reiniciar",
  restarted: "Reiniciada",
  refresh: "Atualizar",
  disconnect: "Desconectar",
  sure: "Tem certeza?",
  save: "Salvar",
  step: "Passo {step}",
  instance: "Instância | Instâncias",
  search: "Pesquisar",
  loading: "Carregando",
  noInstances: "Nenhuma instância encontrada",
  unknown: "Desconhecido",
  required: "{field} é obrigatório",
  maxLength: "{field} deve ter no máximo {length} caracteres",
  https: "{field} deve começar com https://",
  httpHttps: "{field} deve começar com http:// ou https://",
  enabled: "Habilitado",
  events: "Eventos",
  name: "Nome",
  version: {
    availableFrom: "Disponível a partir da versão {version}",
  },
  status: {
    close: "Desconectado",
    connecting: "Conectando",
    open: "Conectado",
  },
  about: {
    title: "Sobre",
    description: "O ChatCoreAPI Manager facilita a gestão de suas APIs com uma interface intuitiva. Ele foi criado por desenvolvedores independentes, focando em melhorar a experiência do usuário e a administração das funcionalidades da API.",
    contribute: "Contribua com o projeto",
    dataProcess: {
      title: "Processamento de dados",
      description: "O processamento e armazenamento de dados ocorre <b>localmente</b> no seu navegador, sem uso de um backend centralizado. Isso reforça a segurança e privacidade, mantendo suas informações confidenciais e protegidas.",
      https: "Por conta de todo o processamento ser realizado no navegador, é necessário que o servidor da Evolution API seja acessado através de uma conexão segura (HTTPS)."
    },
    version: "Versão",
  },

  connection: {
    title: "Configurar conexão",
    action: "Conectar",
    saved: "Conexão salva | Conexões salvas",
  },
  instanceTabs: {
    settings: "Configurações",
    message: "Mensagens",
    profile: "Perfil",
  },
  connectPhone: {
    title: "Telefone não conectado",
    apiGenericError: "Não foi possível carregar o QR Code, se o erro persistir, reinicie a API e tente novamente."
  },
  options: {
    title: "Comportamento",
    rejectCall: "Rejeitar chamada",
    msgCall: "Mensagem de rejeição",
    groupsIgnore: "Ignorar grupos",
    alwaysOnline: "Sempre online",
    readMessages: "Marcar mensagens como lidas",
    readStatus: "Marcar status como visto",
  },
  webhook: {
    byEvents: "Webhook por eventos",
    byEventsHelp: "Adiciona o nome do evento no final da URL (ex: /webhook/event_name )",
  },
  rabbitmq: {
    info: "O RabbitMQ é utilizado pela API para o enfileiramento das notificações. Ele NÃO é utilizado para o envio de mensagens."
  },
  chatwoot: {
    account_id: "ID da conta",
    token: "Token da conta",
    signMsg: "Assinar mensagens",
    signMsgHelp: "Adiciona o nome do atendente na primeira linha da mensagem",
    signDelimiter: "Separador da assinatura da mensagem",
    signDelimiterHelp: "Delimitador utilizado para separar a assinatura da mensagem (\\n para quebra de linha)",
    reopenConversation: "Reabrir conversa",
    reopenConversationHelp: "Reabre a conversa do cliente quando ele inicia uma nova conversa em vez de criar uma nova conversa",
    conversationPending: "Iniciar conversa como pendente",
    conversationPendingHelp: "Inicia a conversa como pendente ao invés de aberta",
    autoCreate: "Criar Caixa de Entrada",
    autoCreateHelp: "Cria a caixa de entrada no Chatwoot caso ela não exista",
    config: {
      btn: "Como configurar o chatwoot?",
      title: "Como configurar a caixa de entrada do Chatwoot?",
      fullDoc: "Ver documentação completa",
      steps: {
        "1": "Acesse as configurações > Caixa de Entrada e \"Adicionar Caixa\"",
        "2": "Selecione \"API\" como tipo de caixa",
        "3": "Preencha nome da caixa e webhook. Os valores devem ser exatamente os seguintes:",
        "4": "Adicione os agentes à caixa de entrada.",
        "5": "Pronto! Agora você pode receber mensagens.",
      }
    }
  },
  typebot: {
    typebot: "Nome do fluxo do Typebot",
    typebotHelp: "O nome do fluxo do Typebot que será utilizado",
    keywordFinish: "Palavra-chave de finalização",
    keywordFinishHelp: "Palavra-chave para finalizar o fluxo",
    expire: "Tempo de expiração (em minutos)",
    expireHelp: "Tempo para encerrar a sessão caso não haja interação",
    delayMessage: "Tempo de digitação da mensagem",
    delayMessageUnit: "em milisegundos",
    delayMessageHelp: "Tempo de simulação de digitação",
    unknownMessage: "Mensagem formato desconhecido",
    unknownMessageHelp: "Mensagem enviada quando o formato da mensagem não é reconhecido",
    listeningFromMe: "Ouvir mensagens enviadas por mim",
    listeningFromMeHelp: "Envia as mensagens enviadas por você para o fluxo do Typebot",
    session: {
      title: "Sessões do Typebot",
      btn: "Ver 0 sessões | Ver uma sessão | Ver {count} sessões",
      noData: "Nenhuma sessão encontrada",
      headers: {
        variables: "Variáveis",
        createdAt: "Iniciada em",
        updatedAt: "Última mensagem",
      }
    },
    status: {
      opened: "Aberto",
      paused: "Pausado",
      closed: "Fechado",
    }
  },
  sendMessage: {
    title: "Enviar mensagem",
    to: "Para",
    noContacts: "Sem contatos",
    message: "Mensagem",
    presence: "Presença",
    delay: "Atraso",
    delayHelp: "Atraso em milisegundos",
    send: "Enviar",
    success: "Mensagem enviada com sucesso | Mensagens enviadas com sucesso",
  },
  phoneHasWhatsApp: {
    title: "Tem WhatsApp?",
    phone: "Número do WhatsApp",
    verify: "Consultar",
    exists: "WhatsApp encontrado",
    notExists: "WhatsApp não encontrado",
    invalid: "Número inválido",
  },
  contacts: {
    title: "Meus contatos",
  },
  groups: {
    title: "Meus grupos",
    headers: { creation: "Criado em", }
  },
  chats: {
    title: "Minhas conversas",
    headers: { lastMsgTimestamp: "Última mensagem", }
  },
  profile: {
    title: "Nome e Recado",
    name: "Name",
    status: "Recado (status)"
  },
  profilePicture: {
    title: "Foto de perfil",
    noPhoto: "Sem foto de perfil",
    upload: "Selecionar Foto",
    remove: "Remover Foto",
  },
  privacy: {
    title: "Privacidade",
    lastSeen: "Visto por último",
    online: "Online",
    profilePhoto: "Foto de perfil",
    status: "Recado (status)",
    readreceipts: "Confirmação de leitura",
    groupadd: "Ser adicionado a grupos",
    options: {
      all: "Todos",
      contacts: "Meus contatos",
      contactBlacklist: "Meus contatos, exceto os da lista negra",
      matchLastSeen: "Igual ao visto por último",
      none: "Ninguém",
    }
  }
}