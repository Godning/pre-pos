'use strict';

function collectSameElements(collectionA, collectionB) {
  //return '实现练习要求，并改写该行代码。';
  let A = new Set(collectionA);
  let B = new Set(collectionB);
  let ans = new Set([...A].filter(x => B.has(x))); 
  return Array.from(ans);
}
