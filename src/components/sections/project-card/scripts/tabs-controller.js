(() => {
  const STACK_TRANSITION_MS = 280;
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

          // Apagamos la transición propia del contenedor: durante el sync
          // frame-a-frame no queremos que compita con el easing del
          // acordeón interno (que ya viene de grid-template-rows).
          tabsContainer.classList.add("is-syncing");

          const start = performance.now();
          const step = (now) => {
            const elapsed = now - start;
            measureNow(panel);
            if (elapsed < STACK_TRANSITION_MS + 40) {
              requestAnimationFrame(step);
            } else {
              // Medición final precisa + reactivamos la transición para
              // que los cambios de tab (updateContainerHeight) sigan
              // animando normal.
              measureNow(panel);
              tabsContainer.classList.remove("is-syncing");
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
