const menu = document.querySelector('#menuButton')
const toggleBtn = document.querySelector('#menuNav')
const btnCancel = document.querySelector('#menuCancel')
const evento = () => {
  if (toggleBtn.classList.contains("is-active")) {
        
    toggleBtn.classList.remove("is-active")
}
else {
    toggleBtn.classList.add("is-active")
}
}
menu.addEventListener('click', evento)
btnCancel.addEventListener('click', evento)