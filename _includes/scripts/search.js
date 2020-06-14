let restaurants = [...document.querySelectorAll(".restaurant")]
let restIndex = restaurants.map(r => {
    return {
        id: r.id,
        el: document.getElementById(r.id),
        text: r.textContent.replace(/\s\s+/g, ' ')
    }
})


let searchEl = document.getElementById("text-search")

searchEl.addEventListener('change', filterElements)
searchEl.addEventListener('keyup', filterElements)

function filterElements() {
    // go grab value from search
    let term = searchEl.value

    // loop through each item and mark as matched or not
    restIndex.forEach(rest => {
        let isMatch = rest.text.toLowerCase().includes(term.toLowerCase())
        rest.el.classList.toggle("match", isMatch)
    })

}