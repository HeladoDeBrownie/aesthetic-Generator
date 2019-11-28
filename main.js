void function () {
    'use strict'

    var request = new XMLHttpRequest()
    request.open('GET', 'grammar.json', true)
    request.responseType = 'json'
    request.addEventListener('load', function () {
        if (request.status === 200) {
            document.getElementById('generated-aesthetic').textContent = tracery.createGrammar(request.response).flatten('#origin#')
        } else {
            console.error('We failed to load our Tracery grammar.')
        }
    })
    request.send()
}()
