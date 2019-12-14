const renderPages = require('hyperstatic/src/renderPages');

(async () => {
  const pages = ['/', '/viewer', '/series'];

  try {
    await renderPages(pages);
    console.log('👍rendered');
  } catch (error) {
    console.log('👿');
    console.log(error);
  } finally {
    process.exit(0);
  }
})();
