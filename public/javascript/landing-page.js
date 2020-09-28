// ordem: loteria, note-saves, pomodoro clock e border radius

const modal = document.querySelector('.modal-container')
const imagemGrande = document.querySelector('.imagem-grande')

const imagem = document.querySelectorAll('.imagem')
const [loteria, noteSaves, pomodoro, borderRadius] = imagem

const diminui = document.querySelectorAll('.bi-arrows-angle-contract')
diminui.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        modal.classList.remove('mostrar')
    })
})

if (loteria) {
    const loteriaImagem = loteria.children[0]
    const loteriaZoomin = loteria.children[1]

    loteriaZoomin.addEventListener('click', () => {
        aumenta(loteriaImagem)
    })
}

if (noteSaves) {
    const noteSavesImagem = noteSaves.children[0]
    const noteSavesZoomIn = noteSaves.children[1]

    noteSavesZoomIn.addEventListener('click', () => {
        aumenta(noteSavesImagem)
    })
}

if (pomodoro) {
    const pomodoroImagem = pomodoro.children[0]
    const pomodoZoomIn = pomodoro.children[1]

    pomodoZoomIn.addEventListener('click', () => {
        aumenta(pomodoroImagem)
    })
}

if (borderRadius) {
    const borderRadiusImagem = borderRadius.children[0]
    const borderRadiusZoomIn = borderRadius.children[1]

    borderRadiusZoomIn.addEventListener('click', () => {
        aumenta(borderRadiusImagem)
    })
}

function aumenta(imagem) {
    const quantos = imagemGrande.children

    if (quantos.length > 0) {
        quantos[0].remove()
    }

    let img = document.createElement('img')

    img.src = imagem.src
    img.alt = imagem.alt

    imagemGrande.append(img)
    modal.classList.add('mostrar')
}