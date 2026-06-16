// Array com os dados dos produtos
const jogadores = [
    {
      name: "Weverton",
      description: "Goleiro.",
      imageUrl:"img/Weverton.png"
    },
    {
      name: "Mayke",
      description: "Lateral Direito.",
      imageUrl:"img/Mayke.png"
    },
    {
      name: "Piquerez",
      description: "Lateral Esquerdo.",
      imageUrl:"img/Piquerez.png"
    },
    {
      name: "Gustavo Gomez",
      description: "Zagueiro.",
      imageUrl:"img/Gustavo Gomez.png"
    },
    {
      name: "Murilo",
      description: "Zagueiro.",
      imageUrl:"img/Murilo.png"
    },
    {
      name: "Anibal Moreno",
      description: "Volante.",
      imageUrl:"img/Anibal_Moreno.png"
    },
    {
      name: "Zé Rafael",
      description: "Volante.",
      imageUrl:"img/Ze_Rafael.png"
    },
    {
      name: "Rafael Veiga",
      description: "Meia Campista.",
      imageUrl:"img/Rafael_Veiga.png"
    },
    {
      name: "Estevão",
      description: "Ponta Direita.",
      imageUrl:"img/Estevao.png"
    },
    {
      name: "Felipe Anderson",
      description: "Ponta Esquerda.",
      imageUrl:"img/Felipe_Anderson.png"
    },
    {
      name: "Flaco Lopez",
      description: "Atacante.",
      imageUrl:"img/Flaco_Lopez.png"
    },
    {
      name: "Abel Ferreira",
      description: "Tecnico.",
      imageUrl:"img/Abel_Ferreira.png"
    },

  ];

  // Seleciona o template e o container onde os produtos serão inseridos
  const template = document.getElementById('jogador-template');
  const jogadoresContainer = document.getElementById('jogadores-container');

  // Função para criar e inserir os cards de produto
  jogadores.forEach(jogador => {
    // Clona o conteúdo do template
    const jogadorElement = document.importNode(template.content, true);

    // Preenche o conteúdo do card com os dados do produto
    jogadorElement.querySelector('.jogador-name').textContent = jogador.name;
    jogadorElement.querySelector('.jogador-description').textContent = jogador.description;
    jogadorElement.querySelector('.jogador-image').src = jogador.imageUrl;

    // Adiciona o card preenchido no container
    jogadoresContainer.appendChild(jogadorElement);
  });

