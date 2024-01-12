//Função que permite fechar o video do projeto
function closeVideo(){

    document.getElementById('box_project_video').style.display='none'
    document.body.style.overflow=''
}
//Função adiconada ao icone X
document.getElementById('icon-X').addEventListener('click', closeVideo)


//Array com as URLs dos vídeos
const videos = [

    'https://www.youtube.com/embed/dbQO7N5p8c8?si=sD687NH5Q88KzI3S?autoplay=1',
    'https://www.youtube.com/embed/wTtZXOScvS4?si=Ru9oFZqNqGPEvsl6?autoplay=1',
    'https://www.youtube.com/embed/1tiNK43kKqE?si=_QJ8Ifsbw-yWpFCG?autoplay=1',
    'https://www.youtube.com/embed/KijREuiz5M8?si=qQtwM1wweB7QYFQC?autoplay=1',
    'https://www.youtube.com/embed/fqXEgSpluCk?si=oEi9NGlTppg6cS87?autoplay=1',
    'https://www.youtube.com/embed/53d7oHeJxrg?si=sKni_SlZnvBojOiZ?autoplay=1',
    'https://www.youtube.com/embed/WZtVbv1Rp7s?si=u4g6vvTA-iG6j-JD?autoplay=1',
    'https://www.youtube.com/embed/BpD2JzikRaI?si=hg6OeZraprc07W08?autoplay=1',
    'https://www.youtube.com/embed/V1OpXygOzY4?si=s-q1r-1MpR7xBGW2?autoplay=1',
    'https://www.youtube.com/embed/Sim2pfEfRTo?si=NrZpztXmr9Hc7HFb?autoplay=1',
    'https://www.youtube.com/embed/aUYabM2R2Vc?si=dPDWZS-EAg4yv2Qx?autoplay=1',
    'https://www.youtube.com/embed/Vm59jkGXQsM?si=X8LNCkA6QqzrU2WY?autoplay=1',
    'https://www.youtube.com/embed/gWFIEszx88A?si=E0UmVsh4SOiEvsiS?autoplay=1'
    
];

//Variável para rastrear o índice do vídeo atual
let currentVideoIndex = 0;

//Função para abrir o vídeo e configurar os botões de navegação
function openVideo(url){

    const box_project_video = document.getElementById('box_project_video');
    const video_project = document.getElementById('project_video');

    box_project_video.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Encontrar o índice do vídeo atual
    currentVideoIndex = videos.indexOf(url);

    // Atualizar o atributo src do elemento de vídeo
    video_project.src = url;

    // Chamar a função para configurar os botões de navegação
    setupNavigationButtons();

}

// Função para configurar os botões de navegação
function setupNavigationButtons() {

    const leftArrow = document.getElementById('left-ball-arrow');
    const rightArrow = document.getElementById('right-ball-arrow');

    // Adicionar evento de clique para a seta esquerda
    leftArrow.addEventListener('click', () => {
        navigateVideo(-1); // Navegar para o vídeo anterior
    });

    // Adicionar evento de clique para a seta direita
    rightArrow.addEventListener('click', () => {
        navigateVideo(1); // Navegar para o próximo vídeo
    });
    
}

// Função para navegar entre os vídeos
function navigateVideo(direction) {
    currentVideoIndex += direction;

    // Verificar se o índice está dentro dos limites do array
    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    // Atualizar o atributo src do elemento de vídeo com o novo vídeo
    const video_project = document.getElementById('project_video');
    video_project.src = videos[currentVideoIndex];
}

// Adicione esta linha para chamar a função setupNavigationButtons ao carregar a página
setupNavigationButtons();

