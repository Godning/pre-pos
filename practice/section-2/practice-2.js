'use strict';

function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
  let col_set = new Set([...collection].map(x => x[0]));
  let ans = [];
  for(let s of col_set){
    ans.push({key:s, count:0});
  }
  for(let s of collection){
    var step = 1;
    if(s.length>1){
        step = Number.parseInt(s.split('-')[1]);
        s = s[0];
    }
    for(let obj of ans){
      if(obj.key == s){
        obj.count += step;
      }
    }
  }
  return ans;
}
