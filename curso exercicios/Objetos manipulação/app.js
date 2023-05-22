var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
var modificado = []

function capitalizar(ingredientes){
    var modificado = []

    for (var i = 0; i < ingredientes.length; i++){
        //          Seleciona a primeira letra \/          \/ Caixa alta 
        var letraInicial = ingredientes[i].charAt(0).toUpperCase(0)
        //O "slice(1)"" seleciona todas as letras a partir da posição 1 em diante     
        var restoTexto = ingredientes[i].slice(1)
        //Qaui junta a primeira letra maiuscula com o resto das letras da palavra
        var resultado = letraInicial + restoTexto

        modificado[i] = resultado
    }

    return modificado
}

function ordenar(indredientes){
    var ordenado = modificado.sort(function(a,b){
        return a.localeCompare(b)
    })

    return ordenado 
}



