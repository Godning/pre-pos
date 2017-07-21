'use strict';

function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
  let col_set = new Set(collection);
  let ans = [];
  for(let s of col_set){
    ans.push({key:s, count:0});
  }
  for(let s of collection){
    for(let obj of ans){
      if(obj.key == s){
        obj.count++;
      }
    }
  }
  return ans;
}
