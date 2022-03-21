'use strict';

/**
 *  home-page controller
 */


const schema = require("../content-types/home-page/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::home-page.home-page", schema);
