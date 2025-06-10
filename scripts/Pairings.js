import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()

let match = ""
const findCelebrityMatch = (kidObject, celebrityArray) => {
    const celebrities = getCelebrities()
    

    for (const celebrity of celebrities) {
        if (kidObject.celebrityId === celebrity.id) {
            match = celebrity
        }

    }

    return match
}

export const Pairings = () => {
    let html = '<ul>'
    

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, match)
        html += `<ul>
        <li> ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
        </li>
            `
            html += "</ul>"
        }
        
        return html

}

