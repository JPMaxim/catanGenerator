export function randomizeHarbours() {
    const unsortedHarbours = ['3:1', '3:1', '3:1', '3:1', 'wood',  'brick', 'sheep', 'wheat', 'ore']
    const sortedHarbours = []
    while (unsortedHarbours.length > 0) {
        // generate random number 0 - (length of unsortedHarbours -1)
        let randomIndex = Math.floor(Math.random() * unsortedHarbours.length)
        // push the element at the random index to sortedHarbours and splice from unsortedHarbours
        sortedHarbours.push(unsortedHarbours[randomIndex])
        unsortedHarbours.splice(randomIndex, 1)
    }
    return sortedHarbours
}