void function () {
    'use strict'

    var $ = document.getElementById.bind(document)

    function show(result) {
        location.hash = encodeURIComponent(result)
    }

    addEventListener('error', show.bind(null, 'Oops, something broke.'))

    function handleHashChange() {
        var result = decodeURIComponent(location.hash.substring(1))
        $('result').textContent = result
        $('tweet').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($('content').textContent + '\n#aestheticGenerator https://helado.itch.io/aesthetic-generator')
    }

    addEventListener('hashchange', handleHashChange)

    var request = new XMLHttpRequest

    request.addEventListener('load', function () {
        if (request.status === 200 && typeof request.response === 'string') {
            var grammar = tracery.createGrammar(JSON.parse(request.response))
            var rerollElement = $('reroll')

            rerollElement.addEventListener('click', function () {
                show(grammar.flatten('#origin#'))
            })

            if (location.hash === '' || location.hash === '#') {
                rerollElement.click()
            } else {
                handleHashChange()
            }

            rerollElement.parentElement.hidden = false
            $('tweet').parentElement.hidden = false
        } else {
            throw Error("Something went wrong fetching the grammar.")
        }
    })

    request.open('GET', 'grammar.json')
    request.send()
}()
