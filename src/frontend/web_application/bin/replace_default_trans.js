const glob = require('glob');
const fs = require('fs');
const catalog = require('../locale/en/messages.json');

console.log('start');
const files = glob.sync('src/**/*.jsx');

Object.keys(catalog).forEach((translationId) => {
  console.log('search', translationId);

  return files.forEach((item) => {
    const data = fs.readFileSync(item, 'utf8');
    const result = data.replace(
      new RegExp(`(<Trans id="${translationId}".*>)${translationId}<`, 'gm'),
      `$1${catalog[translationId]}<`
    );

    if (result !== data) {
      console.log('replace ok', translationId, item);

      fs.writeFileSync(item, result, 'utf8');
    }
  });
});

console.log('end');
