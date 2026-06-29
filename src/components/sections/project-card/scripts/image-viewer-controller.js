/**
 * image-viewer-controller.js
 * Lógica de comportamiento del image viewer:
 *  - genera los dots dentro del .img-dots más cercano (vive en Tabs.astro)
 *  - cambia la imagen activa al click en un dot o swipe
 *  - aplica la animación de fade al cambiar de imagen
 *
 * Se importa desde ImageViewer.astro.
 */
(() => {
  function initImageViewers() {
    document.querySelectorAll(".img-viewer:not([data-initialized])").forEach((viewer) => {
      const img = viewer.querySelector(".project-img");
      if (!img) return;

      const images = img.getAttribute("data-images")?.split(",").filter(Boolean) ?? [];
      const tabsRoot = viewer.closest(".tabs");
      const dotsContainer = tabsRoot?.querySelector(".img-dots");

      let current = 0;
      let dots = [];

      const updateImage = (index, { animate = true } = {}) => {
        current = (index + images.length) % images.length;
        img.src = images[current];

        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === current);
          dot.setAttribute("aria-selected", i === current ? "true" : "false");
          dot.tabIndex = i === current ? 0 : -1;
        });

        if (animate) {
          img.classList.remove("is-fading");
          void img.offsetWidth; // forzar reflow para reiniciar la animación
          img.classList.add("is-fading");
        }
      };

      if (dotsContainer && images.length > 1) {
        dotsContainer.dataset.hasMultiple = "true";
        images.forEach((_, i) => {
          const dot = document.createElement("span");
          dot.className = i === 0 ? "img-dot is-active" : "img-dot";
          dot.setAttribute("aria-label", `Imagen ${i + 1} de ${images.length}`);
          dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
          dot.tabIndex = i === 0 ? 0 : -1;
          dot.addEventListener("click", (e) => {
            e.preventDefault();
            updateImage(i);
          });
          dot.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              updateImage(i);
            }
          });
          dotsContainer.appendChild(dot);
          dots.push(dot);
        });
      } else if (dotsContainer) {
        dotsContainer.dataset.hasMultiple = "false";
      }

      let touchStartX = 0;
      viewer.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true }
      );

      viewer.addEventListener(
        "touchend",
        (e) => {
          const touchEndX = e.changedTouches[0].screenX;
          const diff = touchEndX - touchStartX;
          if (Math.abs(diff) < 40) return;
          if (diff < 0) updateImage(current + 1);
          else updateImage(current - 1);
        },
        { passive: true }
      );

      viewer.setAttribute("data-initialized", "true");
    });
  }

  function loadDeferredImages() {
    document.querySelectorAll(".project-img").forEach((img) => {
      const deferredSrc = img.getAttribute("data-src");
      if (deferredSrc) {
        img.src = deferredSrc;
        img.removeAttribute("data-src");
      }
    });
  }

  function init() {
    initImageViewers();
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadDeferredImages);
    } else {
      setTimeout(loadDeferredImages, 1);
    }
  }

  init();
  document.addEventListener("astro:page-load", init);
})();
