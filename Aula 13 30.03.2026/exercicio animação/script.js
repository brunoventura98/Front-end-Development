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