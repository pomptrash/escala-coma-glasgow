const sessaoRelatorio = document.querySelector('.sessaoRelatorio')
const main = document.querySelector('main')
const form = document.querySelector('form')
const redo = document.querySelector('#redo')

form.addEventListener('submit', e=> {
    e.preventDefault()

    let relatorioAberturaOcular = document.querySelector('.relatorioAberturaOcular')
    let relatorioRespostaVerbal = document.querySelector('.relatorioRespostaVerbal')
    let relatorioRespostaMotora = document.querySelector('.relatorioRespostaMotora')
    let relatorioReatividadePupilar = document.querySelector('.relatorioReatividadePupilar')
    let spanSoma = document.querySelector('.spanSoma')
    let statusGravidade = document.querySelector('.statusGravidade')
    let textoRelatorio = document.querySelector('.textoRelatorio')
    
    const aberturaOcular = document.querySelector('#aberturaOcular')
    const respostaVerbal = document.querySelector('#respostaVerbal')
    const respostaMotora = document.querySelector('#respostaMotora')
    const reatividadePupilar = document.querySelector('input[name="reatividadePupilar"]:checked');

    const aberturaOcular_valor = aberturaOcular.options[aberturaOcular.selectedIndex].getAttribute('data-valor')
    const respostaVerbal_valor = respostaVerbal.options[respostaVerbal.selectedIndex].getAttribute('data-valor')
    const respostaMotora_valor = respostaMotora.options[respostaMotora.selectedIndex].getAttribute('data-valor')
    const reatividadePupilar_valor = reatividadePupilar.getAttribute('data-valor')

    relatorioAberturaOcular.innerText = `${aberturaOcular.value} (+${aberturaOcular_valor})`
    relatorioRespostaVerbal.innerText = `${respostaVerbal.value} (+${respostaVerbal_valor})`
    relatorioRespostaMotora.innerText = `${respostaMotora.value} (+${respostaMotora_valor})`
    relatorioReatividadePupilar.innerText = `${reatividadePupilar.value} (${reatividadePupilar_valor})`

    const soma = parseInt(aberturaOcular_valor) + parseInt(respostaVerbal_valor) + parseInt(respostaMotora_valor) + parseInt(reatividadePupilar_valor)
    spanSoma.innerText = soma

    if (soma >= 15){
        statusGravidade.innerText = 'Estado normal ou alerta.\n'
        statusGravidade.style.color = '#4CAF50'
        spanSoma.style.color = '#4CAF50'
        textoRelatorio.innerText = 'O paciente está totalmente consciente e orientado. Responde de maneira adequada a estímulos verbais e motores.'
    }
    else if (soma >= 13 && soma <= 14){
        statusGravidade.innerText = 'Leve.\n'
        statusGravidade.style.color = '#4CAF50'
        spanSoma.style.color = '#4CAF50'
        textoRelatorio.innerText = 'O paciente apresenta algum grau de desorientação ou resposta motoras reduzidas, mas está relativamente consciente.'
    }
    else if (soma >= 9 && soma <= 12){
        statusGravidade.innerText = 'Moderado.\n'
        statusGravidade.style.color = '#FFC107'
        spanSoma.style.color = '#FFC107'

        textoRelatorio.innerText = 'O paciente pode estar desorientado ou com dificuldades para responder de forma apropriada, mas ainda apresenta respostas motoras e/ou verbais. Pode haver sinais de lesão cerebral.'
    }
    else if (soma >= 3 && soma <= 8){
        statusGravidade.innerText = 'Grave.\n'
        statusGravidade.style.color = '#FF9800'
        spanSoma.style.color = '#FF9800'

        textoRelatorio.innerText = 'O paciente está em coma moderado a profundo, com respostas extremamente limitadas ou ausentes.'
    }
    else if (soma < 3){
        statusGravidade.innerText = 'Coma profundo / morte cerebral.\n'
        statusGravidade.style.color = '#D32F2F'
        spanSoma.style.color = '#D32F2F'

        textoRelatorio.innerText = 'Nenhuma resposta ocular, verbal ou motora. Este é o pior estado possível, indicativo de coma profundo ou morte cerebral.'
    }

    main.style.display = 'none'
    sessaoRelatorio.style.display = 'block'
    document.body.style.backgroundImage = 'url(imgs/img-background.jpg)'

    redo.addEventListener('click', e=> {
        // location.reload()
        main.style.display = 'block'
        sessaoRelatorio.style.display = 'none'
        document.body.style.backgroundImage = 'url(imgs/img-background-2.jpg)'
    })

})

