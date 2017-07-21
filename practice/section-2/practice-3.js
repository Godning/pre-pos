'use strict';

function countSameElements(collection) {
  //return '实现练习要求，并改写该行代码。';
  let col_set = new Set([...collection].map(x => x[0]));
  let ans = [];
  for(let s of col_set){
    ans.push({name:s, summary:0});
  }
  for(let s of collection){
    var step = 1;
    if(s.includes('-') || s.includes(':')){
        step = Number.parseInt(s[2]);
    }
    if(s.includes('[')){
        var tmp = s.split(']')[0]
        step = Number.parseInt(s.split('[')[1]);
    }
    for(let obj of ans){
      if(obj.name == s[0]){
        obj.summary += step;
      }
    }
  }
  return ans;
}
