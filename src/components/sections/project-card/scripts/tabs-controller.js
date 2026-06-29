/**
 * tabs-controller.js
 * Lógica de comportamiento de los tabs:
 *  - click en un [role="tab"] muestra su panel y oculta los demás
 *  - anima la altura del .tabs-container al cambiar de panel
 *  - muestra/oculta el .img-dots según si el panel activo es de imágenes
 *
 * Se importa desde Tabs.astro. Astro deduplica scripts idénticos, así
 * que aunque haya N <Tabs> en la página esto corre una sola vez.
 *
 * --- Fix del salto/espacio vacío al abrir/cerrar el Stack accordion ---
 * Intento anterior (debounce + transitionend en .stack-panel) seguía
 * fallando: a veces medía a mitad de la transición interna, dejando
 * un salto al abrir o un hueco vacío al cerrar.
 *
 * Estrategia nueva, más directa: en vez de "esperar y medir después",
 * escuchamos el click en .stack-trigger en el momento exacto en que
 * pasa (capture en el documento, delegado), y dos cosas:
 *   1) Medimos la altura objetivo ANTES Y DESPUÉS del toggle (next
 *      frame), para tener ambos extremos reales.
 *   2) Animamos .tabs-container con la MISMA duración/curva que usa
 *      .stack-panel en su CSS (280ms ease) usando una transición CSS
 *      normal de `height`, en vez de perseguir mediciones por evento.
 * Así .tabs-container y .stack-panel quedan sincronizados 1 a 1, sin
 * carrera entre dos observadores compitiendo.
 */
(() => {
  const STACK_TRANSITION_MS = 280; // debe matchear .stack-panel { transition: grid-template-rows 0.28s }

  function initTabs() {
    document
      .querySelectorAll(".tabs:not([data-initialized])")
      .forEach((container) => {
        const tabsContainer = container.querySelector(".tabs-container");
        const tabs = container.querySelectorAll('[role="tab"]');
        const panels = container.querySelectorAll('[role="tabpanel"]');
        const dotsContainer = container.querySelector(".img-dots");

        const isImagesPanel = (panel) => !!panel?.querySelector(".img-viewer");

        const syncDotsVisibility = (activePanel) => {
          if (!dotsContainer) return;
          const onImagesTab = isImagesPanel(activePanel);
          const hasMultiple = dotsContainer.dataset.hasMultiple !== "false";
          dotsContainer.hidden = !(onImagesTab && hasMultiple);
        };

        const getActivePanel = () => Array.from(panels).find((p) => !p.hidden);

        const measureNow = (panel) => {
          if (!tabsContainer || !panel) return;
          if (panel.hidden) {
            tabsContainer.style.height = "0px";
            return;
          }
          tabsContainer.style.height = panel.scrollHeight + "px";
        };

        const updateContainerHeight = (panel) => {
          requestAnimationFrame(() => measureNow(panel));
        };

        // Animación sincronizada con el accordion interno: cuando se
        // togglea un .stack-trigger, seguimos la MISMA línea de tiempo
        // (280ms) con varias mediciones a lo largo del trayecto, en vez
        // de una sola medición al final (que puede leer un frame viejo).
        const animateAlongside = (panel) => {
          if (!tabsContainer || !panel || panel.hidden) return;
          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            measureNow(panel);
            if (elapsed < STACK_TRANSITION_MS + 40) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        };

        panels.forEach((panel) => {
          // Delegado: cualquier click en un .stack-trigger dentro de
          // este panel dispara la animación sincronizada de altura.
          panel.addEventListener("click", (e) => {
            if (e.target.closest?.(".stack-trigger")) {
              animateAlongside(panel);
            }
          });
        });

        tabs.forEach((tab) => {
          tab.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute("aria-controls");
            const activePanel = document.getElementById(targetId);

            tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
            panels.forEach((p) => (p.hidden = true));

            tab.setAttribute("aria-selected", "true");
            if (activePanel) {
              activePanel.hidden = false;
              updateContainerHeight(activePanel);
            }
            syncDotsVisibility(activePanel);
          });
        });

        const firstPanel = panels[0];
        if (firstPanel && !firstPanel.hidden) {
          updateContainerHeight(firstPanel);
        }
        syncDotsVisibility(firstPanel);

        container.setAttribute("data-initialized", "true");
      });
  }

  function init() {
    initTabs();
  }

  init();
  document.addEventListener("astro:page-load", init);
})();
