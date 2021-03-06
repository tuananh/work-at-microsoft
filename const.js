"use strict";

const fs = require("fs-extra");
const path = require("path");

// TODO Document everything
const CLIENT = path.join(__dirname, "client");
const CLIENT_TEMPLATE = path.join(CLIENT, "page.hbs");

const DATA = path.join(__dirname, "data");

const WORKER = path.join(__dirname, "worker");
const WORKER_SCRIPT = path.join(WORKER, "worker.js");
const WORKER_WASM = path.join(WORKER, "worker.c");

const BUILD = path.join(__dirname, "build");
fs.ensureDirSync(BUILD);
const BUILD_CLIENT = path.join(BUILD, "client.html");
const BUILD_WORKER = path.join(BUILD, "worker.js");
const BUILD_WORKER_C = path.join(BUILD, "worker.c");
const BUILD_WORKER_WASM = path.join(BUILD, "worker.wasm");
const BUILD_DATA_RAW = path.join(BUILD, "data-raw.json");
const BUILD_DATA_JOBS = path.join(BUILD, "data-jobs.json");
const BUILD_DATA_FILTERS = path.join(BUILD, "data-filters.json");

const CACHE = path.join(__dirname, "cache");
fs.ensureDirSync(CACHE);

const ENV_ANALYTICS = process.env.MSC_ANALYTICS;
if (!ENV_ANALYTICS) {
  console.warn(`[WARN] Environment variable MSC_ANALYTICS missing`);
}

const FIELDS = ["title", "location", "description"];
// TODO These words are no longer used, but length is
const MODES = ["require", "contain", "exclude"];
const FILTER_BITFIELD_BITS_PER_ELEM = 64;
const FILTER_BITFIELD_LENGTH_FN = jobsCount => Math.ceil(jobsCount / FILTER_BITFIELD_BITS_PER_ELEM);

const SEARCH_RESULTS_MAX = 50;
const SEARCH_WORDS_MAX = 50;
const SEARCH_AUTOCOMPLETE_MAX_RESULTS = 5;

module.exports = {
  CLIENT,
  CLIENT_TEMPLATE,
  DATA,
  WORKER,
  WORKER_WASM,
  WORKER_SCRIPT,
  BUILD,
  BUILD_CLIENT,
  BUILD_WORKER,
  BUILD_WORKER_C,
  BUILD_WORKER_WASM,
  BUILD_DATA_RAW,
  BUILD_DATA_JOBS,
  BUILD_DATA_FILTERS,
  CACHE,
  ENV_ANALYTICS,
  FIELDS,
  MODES,
  FILTER_BITFIELD_BITS_PER_ELEM,
  FILTER_BITFIELD_LENGTH_FN,
  SEARCH_RESULTS_MAX,
  SEARCH_WORDS_MAX,
  SEARCH_AUTOCOMPLETE_MAX_RESULTS,
};
