const botaoMenu = document.querySelector(".btn-toggle");
const menuLista = document.querySelector(".navbar");


botaoMenu.addEventListener("click", () => {
    menuLista.classList.toggle("active");
})