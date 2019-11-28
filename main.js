void function () {
    'use strict'

    var resultElement = document.getElementById('generated-aesthetic')

    addEventListener('error', function () {
        resultElement.textContent = 'Oops, something broke.'
    })

    function regenerate(grammar) {
        document.getElementById('generated-aesthetic').textContent = grammar.flatten('#origin#')
    }

    var request = new XMLHttpRequest()
    request.open('GET', 'grammar.json', true)
    request.responseType = 'json'
    request.addEventListener('load', function () {
        if (request.status === 200) {
            var grammar = tracery.createGrammar(request.response)
            regenerate(grammar)
            var regenerateElement = document.getElementById('regenerate')
            regenerateElement.addEventListener('click', regenerate.bind(null, grammar))
            regenerateElement.disabled = ''
        } else {
            throw Error("The grammar couldn't be fetched.")
        }
    })
    request.send()
}()
