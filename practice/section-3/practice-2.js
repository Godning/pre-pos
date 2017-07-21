'use strict';

function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
  [...collectionA].forEach(function(x){
    if(objectB.value.find((n) => n == x.key)){
      x.count -= Math.floor(x.count/3);
    }
  });
  return collectionA;
}
