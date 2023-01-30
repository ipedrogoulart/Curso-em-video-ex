function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
        window.alert('[ERROR] Não é possível calcular com esses dados.')
    } else {
         res.innerHTML = 'Calculado: '
         var i = Number(inicio.value)
         var f = Number(fim.value)
         var p = Number(passo.value)

         for(var c = i; c <= f; c = c + p) {
            res.innerHTML += `${c} - `
         }
    }
} 
    


    