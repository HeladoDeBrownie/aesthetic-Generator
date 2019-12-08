var grammar = tracery.createGrammar({
    // A generated result can be either a phrase or a single word, but, either way, it must have an affix, for the sake of making it interesting.
    origin: ['#affixedPhrase#', '#affixedPhrase#', '#affixedWord#'],

    // An affixed phrase always has a prefix and may also have a suffix. The prefix may be an actual prefix or a possibly affixed word.
    affixedPhrase:          '#prefixedPhrase##maybePhraseSuffix#',
    prefixedPhrase:         '#phrasePrefixingWord# #maybeAffixedWord#',
    phrasePrefixingWord:    ['#phrasePrefix#', '#maybeAffixedWord#'],
    maybeAffixedWord:       ['#affixedWord#', '#affixedWord#', '#genre#'],
    maybePhraseSuffix:      ['', '', '', '', '#_maybePhraseSuffix#'],
    _maybePhraseSuffix:     ['', '', '', '', ' #phraseSuffix#'],

    // An affixed word has either a prefix or a suffix but not both, in order to avoid words that are too dense to comfortably read.
    affixedWord:        ['#prefixedWord#', '#_affixedWord#'],
    _affixedWord:       ['#prefixedWord#', '#prefixedWord#', '#suffixedWord#'],
    prefixedWord:       '#wordPrefix.shy##prefixableWord#',
    prefixableWord:     '#genre#',
    suffixedWord:       '#suffixableWord#&shy;#wordSuffix#',
    suffixableWord:     ['#genre#', '#genre#', '#suffixableNonGenre#'],
    suffixableNonGenre: ['#phrasePrefix#', '#wordPrefix#'],

    // A genre is a core element, a real-world aesthetic that *could* stand alone to name an aesthetic, but will be modified by word and phrase affixes to form a more *interesting* aesthetic name.
    genre: [
        'biker',
        'butch',
        'clown',
        'cosplay',
        'cowboy',
        'disco',
        'dragon',
        'emo',
        'fairy',
        'farmer',
        'folk',
        'funk',
        'furry',
        'gamer',
        '#geek#',
        'glitch',
        'goth',
        'grunge',
        'hacker',
        'hip hop',
        'hippie',
        'hipster',
        'jock',
        'larper',
        'librarian',
        'metal',
        'monster',
        'noir',
        'pirate',
        'prep',
        '#princex#',
        'punk',
        'raver',
        'skater',
        'taur',
        'trucker',
        'twink',
        'witch',
        '#movementGenre#',
    ],
    geek: [
        'geek',
        'nerd',
        'otaku',
    ],
    princex: [
        'princex',
        'princess',
        'prince',
    ],
    movementGenre: [
        'baroque',
        'brutalist',
        'classical',
        'cubist',
        'dadaist',
        'modernist',
        'realist',
        'surrealist',
    ],

    // A phrase prefix is a word that can modify an aesthetic and is similar to a genre but can't stand alone like a genre can. Sometimes this distinction is arbitrary, and the word *could* sensibly stand alone as a genre, but we would rather not generate it as such.
    phrasePrefix: [
        '8-bit',
        'abstract',
        'art',
        'ballroom',
        'beach',
        'bespoke',
        'bubblegum',
        'business',
        'candy',
        'carnival',
        'crypt',
        'dark',
        'death',
        'deep',
        'disaster',
        'fairytale',
        'fantasy',
        'forest',
        'future',
        'glam',
        'hard',
        'health',
        'hell',
        'horror',
        'industrial',
        'lesbian',
        'magic',
        'math',
        'medical',
        'minimal',
        'myth',
        'nature',
        'neon',
        'nu',
        'operatic',
        'pajama',
        'pasta',
        'pastel',
        'postapocalypse',
        'power',
        'psychedelic',
        'rainbow',
        'sci-fi',
        'soft',
        'spicy',
        'swamp',
        'symphonic',
        '#toon#',
        '#decadePhrasePrefix#',
        '#geographicPhrasePrefix#',
        '#properPhrasePrefix#',
    ],
    toon: [
        'toon',
        'anime',
    ],
    decadePhrasePrefix: [
        '70s',
        '80s',
        '90s',
    ],
    geographicPhrasePrefix: [
        'Celtic',
        'Euro',
        'French',
        'Italo',
        'Latin',
        'Martian',
        'New England',
        'Scandinavian',
        'Southern',
        'Texas',
        'Viking',
    ],
    properPhrasePrefix: [
        'Disney',
        'Hollywood',
        'Instagram',
        'Neopet',
        'Nintendo',
    ],

    phraseSuffix: [
        '#DX#',
        'kei',
    ],
    DX: [
        'DX',
        'EX',
    ],

    // A word prefix is joined directly to the beginning of a word without any spaces to modify it. Sometimes the distinction between this and a phrase prefix is arbitrary, and the prefix is an actual dictionary word, but we would rather join it without spaces to another word.
    wordPrefix: [
        'acid',
        'astro',
        'bio',
        'care',
        'chill',
        'choco',
        'crypto',
        'cyber',
        'e-',
        'electro',
        'endo',
        'enviro',
        'fem',
        'fuck',
        'fur',
        'glow',
        'gore',
        'holo',
        'infra',
        'jump',
        'litho',
        'macro',
        'mecha',
        'mer',
        'meta',
        'mono',
        'nano',
        'neo',
        'night',
        'norm',
        'post',
        'pre',
        'proto',
        'pseudo',
        'retro',
        'sea',
        'semi',
        'steam',
        'synth',
        'techno',
        'trans',
        'vapor',
        '#geographicWordPrefix#',
    ],
    geographicWordPrefix: [
        'Afro',
        'Brit',
        'J-',
        'K-',
    ],

    // A word prefix is joined directly to the end of a word without any spaces to modify it. Usually this just adds slight flavoring to the word, although some of them can be very suggestive.
    wordSuffix: [
        'beat',
        'core',
        'dance',
        'fuck',
        'pop',
        'punk',
        'style',
        'wave',
    ],
})

grammar.modifiers.shy = function (string) {
    return string + (string.endsWith('-') ? '' : '&shy;')
}
