export function randomizeHexes() {
    const unsortedHexes = ['desert', 'forest', 'forest', 'forest', 'forest', 'hill', 'hill', 'hill', 'pasture', 'pasture', 'pasture', 'pasture', 'field', 'field', 'field', 'field', 'mountain', 'mountain', 'mountain']
    const sortedHexes = []
    while (unsortedHexes.length > 0) {
        // generate random number 0 - (length of unsortedHexes -1)
        let randomIndex = Math.floor(Math.random() * unsortedHexes.length)
        // push the element at the random index to sortedhexes and splice from unsortedHexes
        sortedHexes.push(unsortedHexes[randomIndex])
        unsortedHexes.splice(randomIndex, 1)
    }
    return sortedHexes
}