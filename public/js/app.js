// Détection et background du menu de navigation
const navButton = document.querySelectorAll('.nav_button');
console.log(navButton);

for (const button of navButton) {
    button.addEventListener('click', handleNavButton)
}


function handleNavButton (event) {
    const item = event.target;
    console.log(item.id)
    item.classList.add('active')
}