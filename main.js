void function () {
    'use strict'

    var $ = document.getElementById.bind(document)

    function show(result) {
        $('result').textContent = result
        $('tweet').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($('content').textContent + '\n#aestheticGenerator https://helado.itch.io/aesthetic-generator')
    }

    addEventListener('error', show.bind(null, 'Oops, something broke.'))

    var request = new XMLHttpRequest

    request.addEventListener('load', function () {
        if (request.status === 200 && request.response instanceof Object) {
            var grammar = tracery.createGrammar(request.response)
            var rerollElement = $('reroll')

            rerollElement.addEventListener('click', function () {
                show(grammar.flatten('#origin#'))
            })

            rerollElement.click()
            rerollElement.parentElement.hidden = false
            $('tweet').parentElement.hidden = false
        } else {
            throw Error("Something went wrong fetching the grammar.")
        }
    })

    request.open('GET', 'grammar.json')
    request.responseType = 'json'
    request.send()
}()
