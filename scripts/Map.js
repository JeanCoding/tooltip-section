import tippy from 'tippy.js';

class Map {

  // Creëert een Map object met 'node' en activeert Tippy.
  constructor(node) {

    this.map = node;
    this.tippyContainer = node.querySelector('.tooltip-container');

    this.initTippy();
  }

  initTippy() {

    // Maakt een variabele van het huidige object (wordt toegankelijk in de functies/scope's)
    let self = this;

    // Settings tippy voor desktoplocaties
    tippy(self.map.querySelectorAll('.location.desktop'), {
      allowHTML: true,
      hideOnClick: true,
      trigger: "click",
      placement: 'right',
      theme: 'map-desktop',
      maxWidth: 'none',
      delay: 0,
      appendTo: self.tippyContainer,

      content(reference) {
        // Haalt de waarde op van de locatie
        const key = reference.getAttribute('data-location-key');
        // Zoekt de bijbehorende tooltip op basis van de waarde en retourneer de inhoud
        return self.map.querySelector(`.tooltip[data-location-key="${key}"]`).innerHTML;
      },
    });

    // Settings tippy voor mobiele locaties
    tippy(self.map.querySelectorAll('.location.mobile'), {
      allowHTML: true,
      hideOnClick: true,
      trigger: "click",
      placement: 'bottom',
      theme: 'map-mobile',
      appendTo: self.tippyContainer,
      delay: 0,

      content(reference) {
        // Haalt de sleutelwaarde op van de locatie
        const key = reference.getAttribute('data-location-key');
        // Zoekt de bijbehorende tooltip op basis van de sleutelwaarde en retourneer de inhoud
        return self.map.querySelector(`.tooltip[data-location-key="${key}"]`).innerHTML;
      },

      onMount(instance) {
        // Verwijder alle stijlen van de popper om problemen met de layout te voorkomen
        instance.popper.removeAttribute('style');
      },

      popperOptions: {
        modifiers: [{
          name: 'eventListeners',
          options: {
            scroll: false, // Schakelt het scrollgedrag van de popper uit
          },
        }],
      },
      
    });

  }
}

export default Map;
