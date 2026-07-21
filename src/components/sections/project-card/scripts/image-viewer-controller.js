/**
 * image-viewer-controller.js
 */
(() => {
  // Cache de imágenes ya precargadas (por src), para no re-descargar
  // ni recrear Image() innecesariamente al hacer swipe/click.
  const preloadedSrcs = new Set();

  function preloadImage(src) {
    return new Promise((resolve) => {
      if (preloadedSrcs.has(src)) {
        resolve();
        return;
      }
      const img = new Image();
      img.onload = () => {
        preloadedSrcs.add(src);
        resolve();
      };
      img.onerror = () => resolve(); // no bloqueamos la cola por una imagen rota
      img.src = src;
    });
  }

  function initImageViewers() {
    document
      .querySelectorAll(".img-viewer:not([data-initialized])")
      .forEach((viewer) => {
        const img = viewer.querySelector(".project-img");
        if (!img) return;

        const images =
          img.getAttribute("data-images")?.split(",").filter(Boolean) ?? [];
        const tabsRoot = viewer.closest(".tabs");
        const dotsContainer = tabsRoot?.querySelector(".img-dots");

        let current = 0;
        let dots = [];

        // La primera imagen ya vino en el src inicial del <img> (eager),
        // así que la marcamos como precargada sin re-descargarla.
        if (images[0]) preloadedSrcs.add(images[0]);

        const updateImage = async (index, { animate = true } = {}) => {
          current = (index + images.length) % images.length;
          const nextSrc = images[current];

          dots.forEach((dot, i) => {
            dot.classList.toggle("is-active", i === current);
            dot.setAttribute("aria-selected", i === current ? "true" : "false");
            dot.tabIndex = i === current ? 0 : -1;
          });

          if (!animate) {
            img.src = nextSrc;
            return;
          }

          // Si ya está precargada, esto resuelve al toque (sin espera visible).
          // Si todavía no, espera a que termine de bajar antes de mostrarla,
          // evitando el hueco/flash.
          await preloadImage(nextSrc);

          img.classList.remove("is-fading");
          void img.offsetWidth; // reinicia la animación
          img.src = nextSrc;
          img.classList.add("is-fading");
        };

        if (dotsContainer && images.length > 1) {
          dotsContainer.dataset.hasMultiple = "true";
          images.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.className = i === 0 ? "img-dot is-active" : "img-dot";
            dot.setAttribute(
              "aria-label",
              `Imagen ${i + 1} de ${images.length}`,
            );
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
          { passive: true },
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
          { passive: true },
        );

        // Guardamos referencia para la precarga diferida en segundo plano
        viewer.__imgSet = images;

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

  // Cola global: recorre TODOS los viewers de la página y va precargando
  // sus imágenes restantes (todas menos la primera) de a una, usando
  // requestIdleCallback para no competir con el hilo principal ni con
  // requests más importantes. Corre recién cuando la app ya cargó todo.
  function preloadRemainingImagesInBackground() {
    const queue = [];

    document.querySelectorAll(".img-viewer").forEach((viewer) => {
      const images = viewer.__imgSet ?? [];
      images.slice(1).forEach((src) => {
        if (!preloadedSrcs.has(src)) queue.push(src);
      });
    });

    if (queue.length === 0) return;

    // Respeto a conexiones lentas / modo ahorro de datos: no precargamos.
    const conn = navigator.connection;
    if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ""))) {
      return;
    }

    function processNext(deadline) {
      while (queue.length && (!deadline || deadline.timeRemaining() > 0)) {
        const src = queue.shift();
        preloadImage(src);
      }
      if (queue.length) {
        schedule();
      }
    }

    function schedule() {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(processNext, { timeout: 2000 });
      } else {
        setTimeout(() => processNext(), 200);
      }
    }

    schedule();
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

  // Solo arrancamos la precarga en background una vez que TODA la página
  // (assets, fonts, etc.) terminó de cargar — no compite con el render inicial.
  window.addEventListener("load", () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preloadRemainingImagesInBackground, {
        timeout: 3000,
      });
    } else {
      setTimeout(preloadRemainingImagesInBackground, 500);
    }
  });

  // En navegación tipo SPA de Astro, re-disparamos igual (con un pequeño
  // delay para que termine de asentarse el nuevo DOM).
  document.addEventListener("astro:page-load", () => {
    setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preloadRemainingImagesInBackground, {
          timeout: 3000,
        });
      } else {
        setTimeout(preloadRemainingImagesInBackground, 500);
      }
    }, 300);
  });
})();
