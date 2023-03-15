module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  await require('./loadCookies')(browserContext, scenario);
  await require('./mock-facts')(browserContext, scenario);
};
