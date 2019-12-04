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

    var rerollElement = $('reroll')

    rerollElement.addEventListener('click', function () {
        show(grammar.flatten('#origin#'))
    })

    if (location.hash === '' || location.hash === '#') {
        rerollElement.click()
    } else {
        handleHashChange()
    }
}()
