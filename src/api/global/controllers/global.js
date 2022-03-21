'use strict';

/**
 *  global controller
 */


const schema = require("../content-types/global/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController("api::global.global", schema);
