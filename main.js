void function () {
    'use strict'

    var $ = document.getElementById.bind(document)

    function show(result) {
        location.hash = encodeURIComponent(result)
    }

    function withoutHash(string) {
        return string.replace(/^#/, '')
    }

    addEventListener('error', show.bind(null, 'Oops, something broke.'))

    function handleHashChange() {
        var result = decodeURIComponent(withoutHash(location.hash))
        $('result').textContent = result
        $('tweet').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($('content').textContent + '\n#aestheticGenerator https://helado.itch.io/aesthetic-generator')
    }

    addEventListener('hashchange', handleHashChange)

    var rerollElement = $('reroll')

    rerollElement.addEventListener('click', function () {
        show(grammar.flatten('#origin#'))
    })

    if (withoutHash(location.hash) === '') {
        rerollElement.click()
    } else {
        handleHashChange()
    }
}()
