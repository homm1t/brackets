module.exports = function check(str, bracketsConfig) { 
  // your solution 
  
  let x = str; // create  
  
  while (x.includes('()') || x.includes('[]') || x.includes('{}') || x.includes('||') || x.includes('12') || x.includes('34') || x.includes('56') || x.includes('77') || x.includes('88')) 
  { 
  x = x.replace('()', '').replace('[]', '').replace('{}', '').replace('||', '').replace('12', '').replace('34', '').replace('56', '').replace('77', '').replace('88', ''); 
  } //replace
  
  if (x.length % 2 !== 0) { 
  return false; //if
  } 
  
  return x === ''; // return
  };