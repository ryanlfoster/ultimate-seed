/*
 * client/js/modules/nav/index.js
 */

/* global app */

'use strict';

var ShowController = require('./show/controller');

var API = {
  showNav: function () {
    new ShowController({
      region: app.navRegion
    });
  }
};

app.commands.setHandler('show:nav', function () {
  API.showNav();
});
