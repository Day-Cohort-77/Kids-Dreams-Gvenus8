import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-thing="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
document.addEventListener("click", (event) => {
    if (event.target.dataset.thing === "celebrity") {
        window.alert(`${event.target.dataset.name} is a ${event.target.dataset.sport} star!`)
}
})