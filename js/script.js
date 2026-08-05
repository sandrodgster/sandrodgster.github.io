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

    /* =====================================================
   LIGHTBOX DAS GALERIAS
===================================================== */

const galleryImages = document.querySelectorAll(".case-gallery img");

if (galleryImages.length > 0) {

    let lastFocusedElement = null;

    const lightbox = document.createElement("div");

    lightbox.className = "lightbox";
    lightbox.hidden = true;

    lightbox.innerHTML = `
        <div
            class="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da imagem"
        >
            <button
                class="lightbox-close"
                type="button"
                aria-label="Fechar imagem ampliada"
            >
                ×
            </button>

            <div class="lightbox-image-wrapper">
                <img
                    class="lightbox-image"
                    src=""
                    alt=""
                >
            </div>

            <p class="lightbox-caption"></p>
        </div>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        lightbox.querySelector(".lightbox-image");

    const lightboxCaption =
        lightbox.querySelector(".lightbox-caption");

    const closeButton =
        lightbox.querySelector(".lightbox-close");

    function openLightbox(image, trigger) {

        const figure = image.closest("figure");
        const figcaption = figure
            ? figure.querySelector("figcaption")
            : null;

        lastFocusedElement = trigger;

        lightboxImage.src =
            image.currentSrc || image.src;

        lightboxImage.alt =
            image.alt || "Imagem ampliada do projeto";

        lightboxCaption.textContent =
            figcaption
                ? figcaption.textContent.trim()
                : image.alt;

        lightboxCaption.hidden =
            !lightboxCaption.textContent;

        lightbox.hidden = false;

        document.body.classList.add("lightbox-open");

        closeButton.focus();
    }

    function closeLightbox() {

        lightbox.hidden = true;

        lightboxImage.src = "";
        lightboxImage.alt = "";

        document.body.classList.remove("lightbox-open");

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    galleryImages.forEach(function (image) {

        const trigger = document.createElement("button");

        trigger.type = "button";
        trigger.className = "lightbox-trigger";

        trigger.setAttribute(
            "aria-label",
            `Ampliar imagem: ${image.alt || "imagem do projeto"}`
        );

        image.parentNode.insertBefore(trigger, image);

        trigger.appendChild(image);

        trigger.addEventListener("click", function () {
            openLightbox(image, trigger);
        });

    });

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    document.addEventListener("keydown", function (event) {

        if (lightbox.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            closeButton.focus();
        }

    });

}