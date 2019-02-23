const debounce = require('../../index.js');
const hello = (i = -1) => console.log(`[${i}] hello`);
const proxy = debounce(hello, 400);

for (let i = 0; i < 100; i++) {
  proxy(i);
}
