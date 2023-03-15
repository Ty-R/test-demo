const {
  BASE_URL
} = process.env;

module.exports = async (page, retries = 5, retryDelay = 3000) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await page.goto(BASE_URL);
      return
    } catch {}

    await new Promise((r) => setTimeout(r, retryDelay));
  }

  throw new Error('Frontend not ready.');
};
