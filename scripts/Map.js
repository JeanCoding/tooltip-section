import tippy from 'tippy.js';

class Map {

  constructor(node) {

    this.map = node;
    this.tippyContainer = node.querySelector('.tooltip-container');

    this.initTippy();


  }

  initTippy() {

    let self = this;

    // Desktop tippy
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
        const key = reference.getAttribute('data-location-key');
        return self.map.querySelector(`.tooltip[data-location-key="${key}"]`).innerHTML;
      },
    });


    // Mobile tippy
    tippy(self.map.querySelectorAll('.location.mobile'), {

      allowHTML: true,
      hideOnClick: true,
      trigger: "click",
      placement: 'bottom',
      theme: 'map-mobile',
      appendTo: self.tippyContainer,
      delay: 0,

      content(reference) {
        const key = reference.getAttribute('data-location-key');
        return self.map.querySelector(`.tooltip[data-location-key="${key}"]`).innerHTML;
      },

      onMount(instance) {

        instance.popper.removeAttribute('style');


      },

      popperOptions: {
        modifiers: [{
          name: 'eventListeners',
          options: {
            scroll: false,
          },
        }, ],
      },
    });

  }
}

export default Map;
