let prevScrollPos = window.pageYOffset;
//Função que permite a tag header sumir quando oscila a barra de navegação.
window.onscroll = function() {
  
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {

    document.getElementById("idheader").style.top = "0";

  } else {

    document.getElementById("idheader").style.top = "-66px"; 

  }

  prevScrollPos = currentScrollPos;
}

//Função que gera textos automaticamente.
function exibirTextoComEfeito(idElemento, textoArray, velocidade) {
    let index = 0;
    let textoAtual = '';
  
    function exibirTexto() {

      textoAtual = textoArray[index];

      if (textoAtual.length > 0) {

        document.getElementById(idElemento).innerHTML += textoAtual.charAt(0);

        textoArray[index] = textoAtual.slice(1);

        setTimeout(exibirTexto, velocidade);
        
      } else {

        index++;

        if (index < textoArray.length) {

          document.getElementById(idElemento).innerHTML += '<br>';

          setTimeout(exibirTexto, 1000);

        }
      }
    }
  
    exibirTexto();
}

//Função que permite exibir um feixe de luz sobre a tag.
function showLight(tag) {
  // Selecionar o elemento .main-image
  const mainImage = document.querySelector(tag);

  // Verificar se o atributo data-apply-styles está definido
  const applyStyles = mainImage.getAttribute('data-apply-styles');

  // Adicionar ou remover a classe com base no valor do atributo
  if (applyStyles === 'true') {
    mainImage.classList.add('applyStyles');
    mainImage.setAttribute('data-apply-styles', 'false');
  } else {
    mainImage.classList.remove('applyStyles');
    mainImage.setAttribute('data-apply-styles', 'true');
  }
}

// Inicializar o atributo data-apply-styles como true
document.querySelector('.main-image').setAttribute('data-apply-styles', 'true');

// Passa um feixe de luz na imagem do dono do portifólio
setInterval(() => { showLight('.main-image') }, 3000);

// Passa um feixe de luz nos botões de navegação.
setInterval(() => { showLight('#sobre-mim') }, 3000);


// Seleciona o ícone do WhatsApp pelo ID
var whatsappIcon = document.getElementById('div_whatsapp_icons');

// Adiciona um ouvinte de evento de clique ao ícone do WhatsApp
whatsappIcon.addEventListener('click', function() {
  // Define o número de telefone ou link do WhatsApp
  var phoneNumber = '5564996753372';
  
  // Cria o link para o WhatsApp com o número de telefone ou link
  var whatsappLink = 'https://wa.me/' + phoneNumber;
  
  // Abre o link do WhatsApp em uma nova aba
  window.open(whatsappLink);
});
  
// Utilização para o texto das profissões
const profissoes = [
  "Analista de Sistemas",
  "Desenvolvedor Javascript Full Stack",
  "Pós-graduado em Engenharia de Software."
];
exibirTextoComEfeito('texto-profissoes', profissoes, 25);

// Utilização para o texto "about-me"
const textoAboutMe = [
  "Sou uma pessoa que enfrenta adversidades com determinação, apreciando desafios, especialmente aqueles que a maioria tende a evitar. Essa mentalidade perseverante foi cultivada desde a minha infância, uma fase da vida caracterizada por dificuldades. Na minha prática em programação, aplico os aprendizados extraídos da vida. Tenho o hábito de dedicar longas horas, por vezes até virando a noite, para resolver problemas (bugs) ou contemplar a implementação de funcionalidades mais intricadas."
];

exibirTextoComEfeito('about-me', textoAboutMe, 20);

// Utilização para o texto sobre minhas habilidades front end.
const mySkillsFrontEnd = [
    "HTML | CSS | Javascript | Java | Python | React | Angular | Typescript | Bootstrap | Tailwindcss | Bulma | Gimp | Gestão de Projetos de TI | Metodologia Ágil Scrum | Vercel | Netlify | Render | Git | GitHub."
];

exibirTextoComEfeito('languages-front-end', mySkillsFrontEnd, 85);

// Utilização para o texto sobre minhas habilidades front end.
const mySkillsBackEnd = [
    "NodeJs | Express | Api | Mongoose | Sequelize | Prisma | MongoDB | MySQL | PostgreSQL | WebSocket | Token | bcrypt."
];
  
exibirTextoComEfeito('languages-back-end', mySkillsBackEnd, 50);

// Utilização para o texto sobre minha formação.
const text_graduation = [
  "Análise e Desenvolvimento de Sistemas pela Universidade de Goiás 2020 - 2023"
];

exibirTextoComEfeito('text-graduation', text_graduation, 50);

const text_postgraduation = [
  "Engenharia de Software pela Universidade de Goiás 2023 - 2024"
];

exibirTextoComEfeito('text-postgraduate', text_postgraduation, 50);

const text_courses = [

  "Curso de Python pelo 'Curso em Video' - 2020",
  "Curso de Java com programação Orientado a Objeto pelo 'Curso em Video' - 2020",
  "Curso de Html, Css e Javascript pelo 'Curso em Video' - 2020",
  "Curso avaçando programador Javascript Full stack pela OneBitCode - 2021"

];

exibirTextoComEfeito('text-cources', text_courses, 50);


//Função que permite deslizar o texto de descrição do projeto automaticamente.
document.addEventListener("DOMContentLoaded", function () {

  var divTextProject = document.querySelector(".div-text-project");

  divTextProject.addEventListener("mouseenter", function () {

    divTextProject.style.opacity = 1;
    smoothScrollToBottom();
  });

  divTextProject.addEventListener("mouseleave", function () {

    divTextProject.style.opacity = 0;
  });

  function smoothScrollToBottom() {
    var scrollHeight = divTextProject.scrollHeight;
    var animationDuration = 100000;
    var framesPerSecond = 60;
    var interval = 1000 / framesPerSecond;
    var frame = 0;
    var isMouseOverScrollbar = false;

    divTextProject.addEventListener("mouseover", function () {
      isMouseOverScrollbar = true;
    });

    divTextProject.addEventListener("mouseout", function () {
      isMouseOverScrollbar = false;
    });

    function animateScroll() {
      if (!isMouseOverScrollbar) {
        frame++;
        var progress = frame / (animationDuration / interval);
        var scrollTop = progress * scrollHeight;
        divTextProject.scrollTop = scrollTop;

        if (frame < animationDuration / interval) {
          setTimeout(animateScroll, interval);
        }
      }
    }

    animateScroll();
  }
});


//Função que permite carregar 3 projetos inicialmente 
//e carregar mais 3 a cada clique no botão "ver Mais"
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os projetos com a classe 'project'
  var projects = document.querySelectorAll('.project');
  
  // Define a quantidade inicial de projetos a serem exibidos
  var projectsToShow = 3;

  // Função para exibir ou ocultar projetos com base na quantidade definida
  function toggleProjects() {
      for (var i = 0; i < projects.length; i++) {
          if (i < projectsToShow) {
              projects[i].style.display = 'block';
          } else {
              projects[i].style.display = 'none';
          }
      }

      // Verifica se todos os projetos foram exibidos
      if (projectsToShow >= projects.length) {
          // Se sim, esconde o botão "Ver Mais"
          document.getElementById('btn_show_more').style.display = 'none';
      }
  }

  // Chama a função inicialmente para exibir os primeiros 3 projetos
  toggleProjects();

  // Adiciona um ouvinte de evento para o botão "Ver Mais"
  document.getElementById('btn_show_more').addEventListener('click', function () {
      // Aumenta a quantidade de projetos a serem exibidos
      projectsToShow += 3;
      // Chama a função para atualizar a exibição
      toggleProjects();
  });
});

