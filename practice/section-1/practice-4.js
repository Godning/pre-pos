'use strict';

function collectSameElements(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
  let A = new Set(collectionA.map(x => x.key));
  let B = new Set(objectB.value);
  let ans = new Set([...A].filter(x => B.has(x)));
  return Array.from(ans);
}
