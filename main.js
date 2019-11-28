void function () {
    'use strict'

    var resultElement = document.getElementById('generated-aesthetic')

    addEventListener('error', function () {
        resultElement.textContent = 'Oops, something broke.'
    })

    function regenerate(grammar) {
        var aestheticName = grammar.flatten('#origin#')
        document.getElementById('generated-aesthetic').textContent = aestheticName
        var tweetThisElement = document.getElementById('tweet-this')
        tweetThisElement.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.getElementsByClassName('aesthetic-description')[0].textContent + '\n#aestheticGenerator https://helado.itch.io/aesthetic-generator')
        tweetThisElement.hidden = ''
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
            regenerateElement.hidden = ''
        } else {
            throw Error("The grammar couldn't be fetched.")
        }
    })
    request.send()
}()
