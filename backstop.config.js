const {
  BASE_URL
} = process.env;

const viewports = [
  {
    "label": "phone",
    "width": 320,
    "height": 480
  },
  {
    "label": "tablet",
    "width": 1024,
    "height": 768
  }
];

const scenarioDefaults = {
  url: BASE_URL,
  facts: [
    "Super interesting fact about a particular animal",
    "Super interesting fact about a particular animal",
    "Super interesting fact about a particular animal"
  ],
  delay: 500 // investigate the need for this
};

const scenarios = [
  {
    label: 'No facts',
  },
  {
    label: 'Facts',
    clickSelector: '[data-testid=refresh-facts-button]'
  }
].map((scenario) => {
  return {
  ...scenarioDefaults,
  ...scenario
  }
});

module.exports = {
  id: 'backstop',
  viewports,
  scenarios,
  onBeforeScript: 'playwright/onBefore.js',
  onReadyScript: 'playwright/onReady.js',
  paths: {
    bitmaps_reference: 'backstop-data/bitmaps_reference',
    bitmaps_test: 'backstop-data/bitmaps_test',
    engine_scripts: 'backstop-data/engine_scripts',
    html_report: 'backstop-data/html_report',
    ci_report: 'backstop-data/ci_report'
  },
  report: ['CI', 'html'],
  engine: 'playwright',
  engineOptions: {
    browser: 'chromium',
  },
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
