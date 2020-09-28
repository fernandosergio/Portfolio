// ordem: loteria, note-saves, pomodoro clock e border radius

const modal = document.querySelector('.modal-container')
const imagemGrande = document.querySelector('.imagem-grande')

const imagem = document.querySelectorAll('.imagem')
const corzinha = document.querySelectorAll('.titulo,.descricao,.tecnologias')

const [loteria, noteSaves, pomodoro, borderRadius] = imagem

let botoes = document.querySelector('.botoes')
const [irAoSite, svg, irAoRepositorio] = botoes.children

const diminui = document.querySelectorAll('.bi-arrows-angle-contract')

window.onload = () => {

    corzinha.forEach((elemento) => {
        elemento.style.backgroundColor = 'inherit'
        elemento.style.border = 'none'
    })

    diminui.forEach((elemento) => {
        elemento.addEventListener('click', () => {
            modal.classList.remove('mostrar')
        })
    })

    document.getElementById('modal-container').addEventListener('click', (e) => {
        if (e.target.id == 'modal-container')
            modal.classList.remove('mostrar')
    })

    if (loteria) {

        const urlSite = 'https://www.verificarresultadoloteria.com.br/'
        const urlRep = 'https://github.com/fernandosergio/Verificador-de-loteria'

        const loteriaImagem = loteria.children[0]
        const loteriaZoomin = loteria.children[1]

        loteriaZoomin.addEventListener('click', () => {
            aumenta(loteriaImagem, urlSite, urlRep)
        })
    }

    if (noteSaves) {

        const urlSite = ''
        const urlRep = 'https://github.com/fernandosergio/note-saves'

        const noteSavesImagem = noteSaves.children[0]
        const noteSavesZoomIn = noteSaves.children[1]

        noteSavesZoomIn.addEventListener('click', () => {
            aumenta(noteSavesImagem, urlSite, urlRep)
        })
    }

    if (pomodoro) {

        const urlSite = 'https://fernandosergio.github.io/Pomodore-Clock/'
        const urlRep = 'https://github.com/fernandosergio/Pomodore-Clock'

        const pomodoroImagem = pomodoro.children[0]
        const pomodoZoomIn = pomodoro.children[1]

        pomodoZoomIn.addEventListener('click', () => {
            aumenta(pomodoroImagem, urlSite, urlRep)
        })
    }

    if (borderRadius) {

        const urlSite = 'https://fernandosergio.github.io/Border-radius/'
        const urlRep = 'https://github.com/fernandosergio/Border-radius'

        const borderRadiusImagem = borderRadius.children[0]
        const borderRadiusZoomIn = borderRadius.children[1]

        borderRadiusZoomIn.addEventListener('click', () => {
            aumenta(borderRadiusImagem, urlSite, urlRep)
        })
    }

    function aumenta(imagem, site, repositorio) {
        const quantos = imagemGrande.children

        if (quantos.length > 0) {
            quantos[0].remove()
        }

        let img = document.createElement('img')

        img.src = imagem.src
        img.alt = imagem.alt

        imagemGrande.append(img)
        modal.classList.add('mostrar')

        if (site.length == 0) {
            console.log('eta nois')
            irAoSite.children[0].disabled = true
        } else {
            irAoSite.children[0].disabled = false
        }

        irAoSite.href = ''
        irAoRepositorio.href = ''

        irAoSite.href = site
        irAoRepositorio.href = repositorio


    }
}