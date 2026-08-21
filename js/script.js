console.log("Portfólio iniciado com sucesso!");

const currentYearElement = document.querySelector("#current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

/* =====================================================
   IDIOMA E TEXTOS ACESSÍVEIS
===================================================== */

const pageLanguage =
    document.documentElement.lang.toLowerCase();

const isEnglish =
    pageLanguage.startsWith("en");

const a11yText = isEnglish
    ? {
        openMenu: "Open menu",
        closeMenu: "Close menu",
        galleryDialog: "Expanded gallery view",
        closeImage: "Close enlarged image",
        previousImage: "View previous image",
        nextImage: "View next image",
        enlargedImageFallback: "Enlarged project image",
        projectImage: "project image",

        imageCounter(current, total) {
            return `Image ${current} of ${total}`;
        },

        enlargeImage(label) {
            return `Enlarge image: ${label}`;
        }
    }
    : {
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
        galleryDialog: "Visualização ampliada da galeria",
        closeImage: "Fechar imagem ampliada",
        previousImage: "Visualizar imagem anterior",
        nextImage: "Visualizar próxima imagem",
        enlargedImageFallback: "Imagem ampliada do projeto",
        projectImage: "imagem do projeto",

        imageCounter(current, total) {
            return `Imagem ${current} de ${total}`;
        },

        enlargeImage(label) {
            return `Ampliar imagem: ${label}`;
        }
    };

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
            isOpen ? a11yText.closeMenu : a11yText.openMenu
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

    let touchStartX = 0;
    let touchStartY = 0;

    const minimumSwipeDistance = 50;
    const lightbox = document.createElement("div");

    lightbox.id = "gallery-lightbox";
    lightbox.className = "lightbox";
    lightbox.hidden = true;

    lightbox.innerHTML = `
        <div
            class="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="${a11yText.galleryDialog}"
        >
            <button
                class="lightbox-close"
                type="button"
                aria-label="${a11yText.closeImage}"
            >
                ×
            </button>

            <div class="lightbox-image-wrapper">

                <button
                    class="lightbox-nav lightbox-prev"
                    type="button"
                    aria-label="${a11yText.previousImage}"
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
                    aria-label="${a11yText.nextImage}"
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

    const lightboxImageWrapper =
        lightbox.querySelector(".lightbox-image-wrapper");

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
            selectedImage.alt || a11yText.enlargedImageFallback;

        const caption =
            getImageCaption(selectedImage);

        lightboxCaption.textContent = caption;
        lightboxCaption.hidden = !caption;

        lightboxCounter.textContent =
            a11yText.imageCounter(
                currentImageIndex + 1,
                totalImages
            );

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

    function handleTouchStart(event) {

        if (
            galleryImages.length <= 1 ||
            event.touches.length !== 1
        ) {
            return;
        }

        const touch = event.touches[0];

        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    }

    function handleTouchEnd(event) {

        if (
            galleryImages.length <= 1 ||
            event.changedTouches.length !== 1
        ) {
            return;
        }

        const touch = event.changedTouches[0];

        const horizontalDistance =
            touch.clientX - touchStartX;

        const verticalDistance =
            touch.clientY - touchStartY;

        const isHorizontalGesture =
            Math.abs(horizontalDistance) >
            Math.abs(verticalDistance);

        const reachedMinimumDistance =
            Math.abs(horizontalDistance) >=
            minimumSwipeDistance;

        if (
            !isHorizontalGesture ||
            !reachedMinimumDistance
        ) {
            return;
        }

        if (horizontalDistance > 0) {
            showPreviousImage();
        } else {
            showNextImage();
        }

        touchStartX = 0;
        touchStartY = 0;
    }

    galleryImages.forEach(function (image, index) {

        const trigger = document.createElement("button");

        trigger.type = "button";
        trigger.className = "lightbox-trigger";

        trigger.setAttribute(
            "aria-label",
            a11yText.enlargeImage(
                image.alt || a11yText.projectImage
            )
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

    lightboxImageWrapper.addEventListener(
        "touchstart",
        handleTouchStart,
        { passive: true }
    );

    lightboxImageWrapper.addEventListener(
        "touchend",
        handleTouchEnd,
        { passive: true }
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