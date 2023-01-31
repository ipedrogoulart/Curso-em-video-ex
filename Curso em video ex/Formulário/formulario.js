var form = document.getElementById('form')
var campos = document.querySelectorAll('.required')
var spans = document.querySelectorAll('.span-required')
var emailRegex =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate()
    emailValidate()
    senhaValidate()
    senhaConfirm()
})

function setError(formulario){
    campos[formulario].style.border = '2px solid #e63636'
    spans[formulario].style.display ='block'
}

function removeError(formulario){
    campos[formulario].style.border = ''
    spans[formulario].style.display = 'none'
}




function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0)
    } else {
        removeError(0)
    }
}

function emailValidate(){
    if(emailRegex.test(campos[1].value)){
        removeError(1)
    } else {
        setError(1)
    }
}

function senhaValidate(){
    if(campos[2].value.length < 8){
        setError(2)
    } else {
        removeError(2)
    }
}

function senhaConfirm(){
    if(campos[3].value == campos[2].value && campos[3] != ''){
        removeError(3)
    } else {
        setError(3)
    }
}