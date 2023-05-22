function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 00 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade < 15) {
                //criança
                img.setAttribute('src', 'crianca-h.jpg')
            } else if (idade < 26) {
                //jovem

                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 40) {
                //homem
                img.setAttribute('src', 'homem.jpg')
            } else if (idade < 60) {
                //maduro
                img.setAttribute('src', 'maduro-h.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'idoso-h.jpg')
            } else {
                //morte
                img.setAttribute('src', 'morte.jpg')
            } 
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 15) {
                //criança
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade < 26) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 40) {
                //mulher
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade < 60) {
                //maduro
                img.setAttribute('src', 'maduro-m.jpg')
            } else if (idade < 100) {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            } else {
                //morte
                img.setAttribute('src', 'morte.jpg')
            }
        }

        img.style.borderRadius = '150px'
        img.style.width = '300px'
        img.style.height = '300px'
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Resultado:</strong> ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}