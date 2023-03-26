import {domReady} from '@roots/sage/client';

import helpers from 'scripts/util/helpers';

// View imports
import common from './views/common';

// Modules
import Accordion from './modules/Accordion';
import Map from './modules/Map';

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  // Views
  common.init();

  // Modules
  document.querySelectorAll('.questions').forEach(node => new Accordion(node));
  document.querySelectorAll('.map-section').forEach(node => new Map(node));

};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
