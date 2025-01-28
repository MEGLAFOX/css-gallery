function openModal() {
    const model =
    document.getElementById('modal');
    modal.style.display = "flex";
}
function closeModal() {
    const model = document.getElementById('modal');
    modal.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-button');
    const navbarList = document.querySelector('.nav-list');
    navbarToggle.addEventListener('click', () => {
        navbarList.classList.toggle('active')
    })
})