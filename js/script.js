console.log("Portfólio iniciado com sucesso!");

const currentYearElement = document.querySelector("#current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    function setMenuState(isOpen) {
        mainNav.classList.toggle("is-open", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    }

    menuToggle.addEventListener("click", function () {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        setMenuState(!isOpen);
    });

    const menuLinks = mainNav.querySelectorAll("a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuState(false);
        });
    });

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            menuToggle.getAttribute("aria-expanded") === "true"
        ) {
            setMenuState(false);
            menuToggle.focus();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) {
            setMenuState(false);
        }
    });

}