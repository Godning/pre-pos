'use strict';

function collectSameElements(collectionA, collectionB) {
  //return '实现练习要求，并改写该行代码。';
  let A = new Set(collectionA);
  for(let B of collectionB){
    A = new Set([...A].filter(x => new Set(B).has(x)));
  }
  return Array.from(A);
}
