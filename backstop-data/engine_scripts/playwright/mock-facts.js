module.exports = async (page, scenario) => {
  page.route('**/facts*', (route) => {
    const response = scenario.facts || [];

    route.fulfill({
      body: JSON.stringify(response),
      headers: {
        'content-type': 'application/json'
      },
      status: 200
    });
  });
};
