// scroll skill
let section = document.querySelector(".box-content")
let progspan = document.querySelectorAll(".detials .prog span")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop ) {
        progspan.forEach((span) => {
            span.style.width = span.dataset.Waheed
        })
    }
}
// scroll skill

// Delet Dashboard
let delettaskI = document.querySelectorAll(".Tasks i")

delettaskI.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.parentElement.remove()
    })
})
// Delet Dashboard

//number
let num = document.querySelectorAll(".Tickets span")
let started = false
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            num.forEach((nu) => startgoal(nu))
        }
        started = true
    }
}
function startgoal(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 1500 / goal)
}


// Delet Frined
let deletFrined = document.querySelectorAll(".remove-frined")

deletFrined.forEach(a => {
    a.addEventListener("click", () => {
        a.parentElement.parentElement.parentElement.remove()
    })
})
// Delet Frined