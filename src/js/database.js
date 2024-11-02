const perguntas = [
    {
      "pergunta": "Quem foi o primeiro homem criado por Deus?",
      "alternativa1": "Noé",
      "alternativa2": "Abraão",
      "alternativa3": "Adão",
      "alternativa4": "Moisés",
      "alternativaCorreta": "Adão"
    },
    {
      "pergunta": "Quem foi a primeira mulher criada por Deus?",
      "alternativa1": "Eva",
      "alternativa2": "Sara",
      "alternativa3": "Rebeca",
      "alternativa4": "Raquel",
      "alternativaCorreta": "Eva"
    },
    {
      "pergunta": "Qual é o primeiro livro da Bíblia?",
      "alternativa1": "Êxodo",
      "alternativa2": "Gênesis",
      "alternativa3": "Levítico",
      "alternativa4": "Números",
      "alternativaCorreta": "Gênesis"
    },
    {
      "pergunta": "Qual personagem bíblico construiu uma arca para salvar sua família e animais do dilúvio?",
      "alternativa1": "Moisés",
      "alternativa2": "Abraão",
      "alternativa3": "Noé",
      "alternativa4": "José",
      "alternativaCorreta": "Noé"
    },
    {
      "pergunta": "Quem libertou o povo hebreu do Egito?",
      "alternativa1": "Davi",
      "alternativa2": "Josué",
      "alternativa3": "Moisés",
      "alternativa4": "Salomão",
      "alternativaCorreta": "Moisés"
    },
    {
      "pergunta": "Quem foi lançado na cova dos leões por orar a Deus?",
      "alternativa1": "José",
      "alternativa2": "Elias",
      "alternativa3": "Daniel",
      "alternativa4": "Davi",
      "alternativaCorreta": "Daniel"
    },
    {
      "pergunta": "Qual discípulo traiu Jesus?",
      "alternativa1": "Pedro",
      "alternativa2": "Judas",
      "alternativa3": "João",
      "alternativa4": "Tiago",
      "alternativaCorreta": "Judas"
    },
    {
      "pergunta": "Quantos mandamentos existem na Bíblia?",
      "alternativa1": "5",
      "alternativa2": "10",
      "alternativa3": "7",
      "alternativa4": "12",
      "alternativaCorreta": "10"
    },
    {
      "pergunta": "Quem foi lançado em uma fornalha ardente e sobreviveu?",
      "alternativa1": "Daniel",
      "alternativa2": "Sadraque, Mesaque e Abede-Nego",
      "alternativa3": "José",
      "alternativa4": "Jonas",
      "alternativaCorreta": "Sadraque, Mesaque e Abede-Nego"
    },
    {
      "pergunta": "Quantos dias e noites choveu durante o dilúvio?",
      "alternativa1": "7",
      "alternativa2": "30",
      "alternativa3": "40",
      "alternativa4": "50",
      "alternativaCorreta": "40"
    },
    {
      "pergunta": "Quem interpretava sonhos no Egito?",
      "alternativa1": "José",
      "alternativa2": "Daniel",
      "alternativa3": "Abraão",
      "alternativa4": "Jacó",
      "alternativaCorreta": "José"
    },
    {
      "pergunta": "Qual o nome do filho de Abraão?",
      "alternativa1": "Ismael",
      "alternativa2": "Isaac",
      "alternativa3": "Jacó",
      "alternativa4": "Esaú",
      "alternativaCorreta": "Isaac"
    },
    {
      "pergunta": "Quem foi o rei que construiu o Templo de Jerusalém?",
      "alternativa1": "Davi",
      "alternativa2": "Salomão",
      "alternativa3": "Saul",
      "alternativa4": "Herodes",
      "alternativaCorreta": "Salomão"
    },
    {
      "pergunta": "Quem teve seu nome mudado para Israel?",
      "alternativa1": "Abraão",
      "alternativa2": "Isaac",
      "alternativa3": "Jacó",
      "alternativa4": "Moisés",
      "alternativaCorreta": "Jacó"
    },
    {
      "pergunta": "Qual era a profissão de Pedro antes de seguir Jesus?",
      "alternativa1": "Pescador",
      "alternativa2": "Carpinteiro",
      "alternativa3": "Agricultor",
      "alternativa4": "Ferreiro",
      "alternativaCorreta": "Pescador"
    },
    {
      "pergunta": "Qual foi a primeira praga do Egito?",
      "alternativa1": "Rã",
      "alternativa2": "Sangue",
      "alternativa3": "Moscas",
      "alternativa4": "Piolhos",
      "alternativaCorreta": "Sangue"
    },
    {
      "pergunta": "Quem foi o profeta que desafiou os profetas de Baal?",
      "alternativa1": "Elias",
      "alternativa2": "Eliseu",
      "alternativa3": "Isaías",
      "alternativa4": "Jeremias",
      "alternativaCorreta": "Elias"
    },
    {
      "pergunta": "Quem foi o apóstolo conhecido como 'o incrédulo'?",
      "alternativa1": "Pedro",
      "alternativa2": "Tomé",
      "alternativa3": "Mateus",
      "alternativa4": "André",
      "alternativaCorreta": "Tomé"
    },
    {
      "pergunta": "Qual foi a primeira cidade conquistada pelos israelitas na Terra Prometida?",
      "alternativa1": "Jericó",
      "alternativa2": "Ai",
      "alternativa3": "Hebrom",
      "alternativa4": "Betel",
      "alternativaCorreta": "Jericó"
    },
    {
      "pergunta": "Quem foi a mãe de Samuel?",
      "alternativa1": "Ana",
      "alternativa2": "Sara",
      "alternativa3": "Rebeca",
      "alternativa4": "Raquel",
      "alternativaCorreta": "Ana"
    },
    {
      "pergunta": "Quem foi o rei de Israel que teve muitas esposas, incluindo a rainha Jezabel?",
      "alternativa1": "Davi",
      "alternativa2": "Salomão",
      "alternativa3": "Saul",
      "alternativa4": "Ezequias",
      "alternativaCorreta": "Salomão"
    },
    {
      "pergunta": "Quantos livros compõem o Novo Testamento?",
      "alternativa1": "25",
      "alternativa2": "27",
      "alternativa3": "29",
      "alternativa4": "21",
      "alternativaCorreta": "27"
    },
    {
      "pergunta": "Quem foi o apóstolo que escreveu o Livro de Apocalipse?",
      "alternativa1": "Paulo",
      "alternativa2": "Pedro",
      "alternativa3": "João",
      "alternativa4": "Tiago",
      "alternativaCorreta": "João"
    },
    {
      "pergunta": "Qual o nome da cidade onde Jesus nasceu?",
      "alternativa1": "Jerusalém",
      "alternativa2": "Nazarete",
      "alternativa3": "Belém",
      "alternativa4": "Bete-Seda",
      "alternativaCorreta": "Belém"
    },
    {
      "pergunta": "Quem foi o pai de Davi?",
      "alternativa1": "Jesse",
      "alternativa2": "Saul",
      "alternativa3": "Eli",
      "alternativa4": "Abinadabe",
      "alternativaCorreta": "Jesse"
    },
    {
      "pergunta": "Qual a última praga do Egito?",
      "alternativa1": "Rã",
      "alternativa2": "Morte dos primogênitos",
      "alternativa3": "Piolhos",
      "alternativa4": "Gafanhotos",
      "alternativaCorreta": "Morte dos primogênitos"
    },
    {
      "pergunta": "Qual era o nome do paralítico que foi curado por Pedro e João?",
      "alternativa1": "Bartimeu",
      "alternativa2": "Ezequias",
      "alternativa3": "Esdras",
      "alternativa4": "Um homem coxo",
      "alternativaCorreta": "Um homem coxo"
    },
    {
      "pergunta": "Qual o nome do lugar onde Jesus foi crucificado?",
      "alternativa1": "Gólgota",
      "alternativa2": "Getsemâni",
      "alternativa3": "Betânia",
      "alternativa4": "Cafarnaum",
      "alternativaCorreta": "Gólgota"
    },
    {
      "pergunta": "Quem foi o primeiro mártir da igreja cristã?",
      "alternativa1": "Tiago",
      "alternativa2": "Estêvão",
      "alternativa3": "Pedro",
      "alternativa4": "Paulo",
      "alternativaCorreta": "Estêvão"
    },
    {
      "pergunta": "Qual é o maior livro da Bíblia?",
      "alternativa1": "Gênesis",
      "alternativa2": "Salmos",
      "alternativa3": "Isaías",
      "alternativa4": "Mateus",
      "alternativaCorreta": "Salmos"
    },
    {
      "pergunta": "Quem fez um voto de nazireu?",
      "alternativa1": "Elias",
      "alternativa2": "Sansão",
      "alternativa3": "Davi",
      "alternativa4": "Samuel",
      "alternativaCorreta": "Sansão"
    },
    {
      "pergunta": "Qual o nome da esposa de Abraão?",
      "alternativa1": "Sara",
      "alternativa2": "Eva",
      "alternativa3": "Raquel",
      "alternativa4": "Rebeca",
      "alternativaCorreta": "Sara"
    },
    {
      "pergunta": "Quem foram os pais de João Batista?",
      "alternativa1": "Maria e José",
      "alternativa2": "Zacarias e Isabel",
      "alternativa3": "Joaquim e Ana",
      "alternativa4": "Abraham e Sara",
      "alternativaCorreta": "Zacarias e Isabel"
    },
    {
      "pergunta": "Qual foi a primeira mulher a ser mencionada na genealogia de Jesus?",
      "alternativa1": "Eva",
      "alternativa2": "Maria",
      "alternativa3": "Raquel",
      "alternativa4": "Tamar",
      "alternativaCorreta": "Tamar"
    },
    {
      "pergunta": "Quem escreveu os Salmos?",
      "alternativa1": "Davi",
      "alternativa2": "Salomão",
      "alternativa3": "Moises",
      "alternativa4": "Todos os anteriores",
      "alternativaCorreta": "Todos os anteriores"
    },
    {
      "pergunta": "Qual é o último livro da Bíblia?",
      "alternativa1": "Judas",
      "alternativa2": "Apocalipse",
      "alternativa3": "Hebreus",
      "alternativa4": "Tito",
      "alternativaCorreta": "Apocalipse"
    },
    {
      "pergunta": "Qual a história do homem que ficou três dias e três noites no ventre de um grande peixe?",
      "alternativa1": "Moisés",
      "alternativa2": "Elias",
      "alternativa3": "Daniel",
      "alternativa4": "Jonas",
      "alternativaCorreta": "Jonas"
    },
    {
      "pergunta": "Qual era o nome do faraó durante a época de Moisés?",
      "alternativa1": "Ramsés",
      "alternativa2": "Tutancâmon",
      "alternativa3": "Cleópatra",
      "alternativa4": "Nefertiti",
      "alternativaCorreta": "Ramsés"
    },
    {
      "pergunta": "Quem foram os irmãos de Moisés?",
      "alternativa1": "Davi e Salomão",
      "alternativa2": "Elias e Eliseu",
      "alternativa3": "Aarão e Miriam",
      "alternativa4": "José e Benjamin",
      "alternativaCorreta": "Aarão e Miriam"
    },
    {
      "pergunta": "Quem é conhecido como o pai da fé?",
      "alternativa1": "Moisés",
      "alternativa2": "Davi",
      "alternativa3": "Abraão",
      "alternativa4": "Isaac",
      "alternativaCorreta": "Abraão"
    },
    {
      "pergunta": "Quantos anos Davi reinou em Israel?",
      "alternativa1": "30",
      "alternativa2": "40",
      "alternativa3": "20",
      "alternativa4": "50",
      "alternativaCorreta": "40"
    },
    {
      "pergunta": "Quem foi o profeta que viu uma visão de um vale de ossos secos?",
      "alternativa1": "Jeremias",
      "alternativa2": "Ezequiel",
      "alternativa3": "Isaías",
      "alternativa4": "Daniel",
      "alternativaCorreta": "Ezequiel"
    },
    {
      "pergunta": "Qual foi o maior milagre de Jesus?",
      "alternativa1": "Transformar água em vinho",
      "alternativa2": "Acalmar a tempestade",
      "alternativa3": "Ressuscitar Lázaro",
      "alternativa4": "Curar o cego de Jericó",
      "alternativaCorreta": "Ressuscitar Lázaro"
    },
    {
      "pergunta": "Qual o nome do irmão de Moisés que foi seu porta-voz?",
      "alternativa1": "Aarão",
      "alternativa2": "Josué",
      "alternativa3": "Davi",
      "alternativa4": "Gideão",
      "alternativaCorreta": "Aarão"
    },
    {
      "pergunta": "Qual era a mensagem principal de Jesus?",
      "alternativa1": "Amar ao próximo",
      "alternativa2": "Seguir a Lei",
      "alternativa3": "Cultuar em Templo",
      "alternativa4": "Fazer sacrifícios",
      "alternativaCorreta": "Amar ao próximo"
    },
    {
      "pergunta": "Qual é a primeira frase da Bíblia?",
      "alternativa1": "No princípio, Deus criou os céus e a terra.",
      "alternativa2": "E a terra era sem forma e vazia.",
      "alternativa3": "E disse Deus: Haja luz.",
      "alternativa4": "E viu Deus que era bom.",
      "alternativaCorreta": "No princípio, Deus criou os céus e a terra."
    }
  ];

export { perguntas };