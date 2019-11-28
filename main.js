void function () {
    'use strict'

    addEventListener('error', function () {
        resultElement.textContent = 'Oops, something broke.'
    })

    var resultElement = document.getElementById('generated-aesthetic')

    var request = new XMLHttpRequest()
    request.open('GET', 'grammar.json', true)
    request.responseType = 'json'
    request.addEventListener('load', function () {
        if (request.status === 200) {
            document.getElementById('generated-aesthetic').textContent = tracery.createGrammar(request.response).flatten('#origin#')
        } else {
            throw Error("The grammar couldn't be fetched.")
        }
    })
    request.send()
}()
