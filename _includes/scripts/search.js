let restaurants = [...document.querySelectorAll(".restaurant")]
let categories = [...document.querySelectorAll(".category")]

let restIndex = restaurants.map(el => {
    return {
        el: el,
        text: el.textContent.replace(/\s\s+/g, ' ').toLowerCase()
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
        let isMatch = rest.text.includes(term.toLowerCase())
        rest.el.classList.toggle("match", isMatch)
    })

    // set match for categories
    categories.forEach(cat => {
        // find if any restaurant in category have class match
        let match = cat.querySelector(".restaurant.match")
        cat.classList.toggle("match", match)
    })


}