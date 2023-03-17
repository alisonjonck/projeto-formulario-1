
function quando_mudar() {
    var campo = document.getElementsByTagName('input')[0]

    console.log(campo.value)

    // Isso resolve em 1 linha: .replace(/\d/, '') 
    campo.value = campo.value.replace(1, '')
    campo.value = campo.value.replace(2, '')
    campo.value = campo.value.replace(3, '')
    campo.value = campo.value.replace(4, '')
    campo.value = campo.value.replace(5, '')
    campo.value = campo.value.replace(6, '')
    campo.value = campo.value.replace(7, '')
    campo.value = campo.value.replace(8, '')
    campo.value = campo.value.replace(9, '')
    campo.value = campo.value.replace(0, '')
}


function usuario_clicou() {
    
    var campo = document.getElementsByTagName('input')[0]
    var campo2 = document.getElementsByTagName('input')[1]
    
    var texto_que_usuario_digitou = campo.value
    var texto_que_usuario_digitou2 = campo2.value

    // if (texto_que_usuario_digitou == 'Alison') {
    //     alert('Parabéns vc acertou o texto secreto')
    // } else {
    //     alert('Você errou! Tente novamente!')
    // }
    
    var texto_em_maiusculo = texto_que_usuario_digitou.toUpperCase()
    var texto_em_maiusculo2 = texto_que_usuario_digitou2.toUpperCase()
    
    // console.log(texto_em_maiusculo)

    campo.value = texto_em_maiusculo
    campo2.value = texto_em_maiusculo2
    
    // console.log('Funcionou!')
}