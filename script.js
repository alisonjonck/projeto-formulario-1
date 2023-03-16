
function usuario_clicou() {
    
    var campo = document.getElementsByTagName('input')[0]
    
    var texto_que_usuario_digitou = campo.value

    // if (texto_que_usuario_digitou == 'Alison') {
    //     alert('Parabéns vc acertou o texto secreto')
    // } else {
    //     alert('Você errou! Tente novamente!')
    // }
    
    var texto_em_maiusculo = texto_que_usuario_digitou.toUpperCase()
    
    // console.log(texto_em_maiusculo)

    campo.value = texto_em_maiusculo
    
    // console.log('Funcionou!')
}