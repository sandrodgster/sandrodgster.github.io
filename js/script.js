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

const galleryImages = Array.from(
    document.querySelectorAll(".case-gallery img")
);

if (galleryImages.length > 0) {

    let currentImageIndex = 0;
    let lastFocusedElement = null;

    const lightbox = document.createElement("div");

    lightbox.id = "gallery-lightbox";
    lightbox.className = "lightbox";
    lightbox.hidden = true;

    lightbox.innerHTML = `
        <div
            class="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da galeria"
        >
            <button
                class="lightbox-close"
                type="button"
                aria-label="Fechar imagem ampliada"
            >
                ×
            </button>

            <div class="lightbox-image-wrapper">

                <button
                    class="lightbox-nav lightbox-prev"
                    type="button"
                    aria-label="Visualizar imagem anterior"
                >
                    ‹
                </button>

                <img
                    class="lightbox-image"
                    src=""
                    alt=""
                >

                <button
                    class="lightbox-nav lightbox-next"
                    type="button"
                    aria-label="Visualizar próxima imagem"
                >
                    ›
                </button>

            </div>

            <div class="lightbox-footer">

                <p class="lightbox-caption"></p>

                <p
                    class="lightbox-counter"
                    aria-live="polite"
                ></p>

            </div>
        </div>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        lightbox.querySelector(".lightbox-image");

    const lightboxCaption =
        lightbox.querySelector(".lightbox-caption");

    const lightboxCounter =
        lightbox.querySelector(".lightbox-counter");

    const closeButton =
        lightbox.querySelector(".lightbox-close");

    const previousButton =
        lightbox.querySelector(".lightbox-prev");

    const nextButton =
        lightbox.querySelector(".lightbox-next");

    function getImageCaption(image) {

        const figure = image.closest("figure");

        const figcaption = figure
            ? figure.querySelector("figcaption")
            : null;

        if (figcaption) {
            return figcaption.textContent.trim();
        }

        return image.alt || "";
    }

    function updateLightbox(index) {

        const totalImages = galleryImages.length;

        currentImageIndex =
            (index + totalImages) % totalImages;

        const selectedImage =
            galleryImages[currentImageIndex];

        lightboxImage.src =
            selectedImage.currentSrc || selectedImage.src;

        lightboxImage.alt =
            selectedImage.alt || "Imagem ampliada do projeto";

        const caption =
            getImageCaption(selectedImage);

        lightboxCaption.textContent = caption;
        lightboxCaption.hidden = !caption;

        lightboxCounter.textContent =
            `Imagem ${currentImageIndex + 1} de ${totalImages}`;

        const hasMultipleImages =
            totalImages > 1;

        previousButton.hidden =
            !hasMultipleImages;

        nextButton.hidden =
            !hasMultipleImages;
    }

    function openLightbox(index, trigger) {

        currentImageIndex = index;
        lastFocusedElement = trigger;

        updateLightbox(currentImageIndex);

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

    function showPreviousImage() {
        updateLightbox(currentImageIndex - 1);
    }

    function showNextImage() {
        updateLightbox(currentImageIndex + 1);
    }

    galleryImages.forEach(function (image, index) {

        const trigger = document.createElement("button");

        trigger.type = "button";
        trigger.className = "lightbox-trigger";

        trigger.setAttribute(
            "aria-label",
            `Ampliar imagem: ${image.alt || "imagem do projeto"}`
        );

        trigger.setAttribute(
            "aria-haspopup",
            "dialog"
        );

        trigger.setAttribute(
            "aria-controls",
            lightbox.id
        );

        image.parentNode.insertBefore(trigger, image);

        trigger.appendChild(image);

        trigger.addEventListener("click", function () {
            openLightbox(index, trigger);
        });

    });

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

    previousButton.addEventListener(
        "click",
        showPreviousImage
    );

    nextButton.addEventListener(
        "click",
        showNextImage
    );

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
            return;
        }

        if (
            event.key === "ArrowLeft" &&
            galleryImages.length > 1
        ) {
            showPreviousImage();
            return;
        }

        if (
            event.key === "ArrowRight" &&
            galleryImages.length > 1
        ) {
            showNextImage();
            return;
        }

        if (event.key === "Tab") {

            const focusableControls = [
                closeButton,
                previousButton,
                nextButton
            ].filter(function (element) {
                return !element.hidden;
            });

            const firstControl =
                focusableControls[0];

            const lastControl =
                focusableControls[
                    focusableControls.length - 1
                ];

            if (
                event.shiftKey &&
                document.activeElement === firstControl
            ) {
                event.preventDefault();
                lastControl.focus();
                return;
            }

            if (
                !event.shiftKey &&
                document.activeElement === lastControl
            ) {
                event.preventDefault();
                firstControl.focus();
                return;
            }

            if (
                !focusableControls.includes(
                    document.activeElement
                )
            ) {
                event.preventDefault();
                firstControl.focus();
            }

        }

    });

}