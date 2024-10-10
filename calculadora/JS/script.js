//FAZ REFERENCIA AOS ELEMENTOS COM
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')


//CRIA A FUNÇÃO CALCULAR
function calcular(){
    const resultado = numero1.value + numero2.value
    alert("qualquercoisa")
    
}


//ADICIONA ESCUTAR EVENTOS

btnCalcular.addEventListener('click', function(){
    calcular()
})

