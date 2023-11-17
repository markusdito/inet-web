const hamburgerContainer = document.querySelector(".navbar-list")
const hamburgerClick = document.querySelector(".hamburger-menu")
const navbarItem = document.querySelector(".nav-menu ul")
const straightEdge = document.querySelector(".navbar-container")

hamburgerClick.onclick = (e) => {
    hamburgerContainer.classList.toggle("active")
    straightEdge.classList.toggle("edge-straight")
    e.preventDefault();
}

document.addEventListener('click', function (e) {
    if (!hamburgerClick.contains(e.target) && !hamburgerContainer.contains(e.target)){
        hamburgerContainer.classList.remove("active")
        straightEdge.classList.remove("edge-straight")
    } else if (navbarItem.contains(e.target)){
        hamburgerContainer.classList.remove("active")
        straightEdge.classList.remove("edge-straight")
    }
})