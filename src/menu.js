document.getElementById('box-nav-mobile').addEventListener('click', openMenu)


document.getElementById('home').addEventListener('click', openMenu)
document.getElementById('sobre-mim').addEventListener('click', openMenu)
document.getElementById('habilidades').addEventListener('click', openMenu)
document.getElementById('projetos').addEventListener('click', openMenu)
document.getElementById('formação').addEventListener('click', openMenu)

function openMenu(){

    const box_options_nav = document.getElementById('box-options-nav')
    const litle_bar = document.getElementsByClassName('litle-bar')

    if(box_options_nav.style.right==='0px'){

        box_options_nav.style.right=''

      litle_bar[0].style.position = ''
        litle_bar[1].style.display = ''
        litle_bar[2].style.position = ''

        litle_bar[0].style.transform = ''
        litle_bar[2].style.transform = ''

    } else{

        box_options_nav.style.right='0px'

        litle_bar[0].style.position = 'absolute'
        litle_bar[1].style.display = 'none'
        litle_bar[2].style.position = 'absolute'

        litle_bar[0].style.transform = 'rotate(45deg)'
        litle_bar[2].style.transform = 'rotate(-45deg)'


    }

}