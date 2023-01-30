var num = document.getElementById('input')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []


//verifica se o número add está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
} 

//verifica se o número add já está na lista ou não
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
        if(isNumero(num.value) && !inLista(num.value, valores)) {
            //add o número digitado a lista abaixo
          valores.push(Number(num.value))
          var item = document.createElement('option')
          item.text = `Valor ${num.value} Adicionado.`
          lista.appendChild(item)
        res.innerHTML = ''
        } else {
            window.alert('Valor inválido ou já encontrado na lista')
        }
        //apaga o que foi add no NUM anteriormente
        num.value = ''
        //mantém o ponteiro no campo que está preenxendo
        num.focus()
}

function verificar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de verificar!')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0 
        var media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A Soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${media}.</p>`
    }
    
}

   



