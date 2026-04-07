let filter = document.querySelectorAll('.time__filter-item')
let jogador = document.querySelectorAll('.time__jogando')

filter.forEach(elem => {
    elem.addEventListener('click',() => {
        filterId = elem.getAttribute('id')

        jogador.forEach(idx => {
            idx.classList.remove('disable')

            posicao = idx.getAttribute('class')

            if(filterId == "all") {
                idx.classList.remove('disable')
            } else if (posicao != ("time__jogando " + filterId)) {
                idx.classList.add('disable')
            }
        })
    })
})


const nome = document.querySelector('#nome')
const numero = document.querySelector('#numero')
const btn = document.querySelector('#btn')
const nomeCamisa = document.querySelector('#camisa__nome')
const numCamisa = document.querySelector('#camisa__numero')

btn.addEventListener('click', () => {
    nomeUser = nome.value 
    nomeCamisa.innerHTML = nomeUser

    numeroUser = numero.value
    numCamisa.innerHTML = numeroUser
})