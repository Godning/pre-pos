'use strict';

function createUpdatedCollection(collectionA, objectB) {
  //return '实现练习要求，并改写该行代码。';
  let col_set = new Set([...collectionA].map(x => x[0]));
  let ans = [];
  for(let s of col_set){
    ans.push({key:s, count:0});
  }
  for(let s of collectionA){
    var step = 1;
    if(s.length>1){
        step = Number.parseInt(s.split('-')[1]);
    }
    for(let obj of ans){
      if(obj.key == s[0]){
        obj.count += step;
      }
    }
  }
  collectionA = ans;
  [...collectionA].forEach(function(x){
    if(objectB.value.find((n) => n == x.key)){
      x.count -= Math.floor(x.count/3);
    }
  });
  return collectionA;
}
