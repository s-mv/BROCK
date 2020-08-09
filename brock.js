/*
  Brock: A library for parsing GARY files
  Author: smv
  Date: 8 Aug 2020
  Version: 0.1.0
  Liscence: "Just-credit-me-when-you-use-this-file-please-thanks" 
*/

function BROCK() {
  function parseGaryArray(gary = '') {
    if (gary[0] != '[') return;
    let arr = gary.split(/[\[\],]/gi).join('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      
    }
  }
  this.parseGary = (gary) => {
    let p;
    for (let i = 0; i < gary.length; i++) {
      const c = gary[i];
      switch (c) {
        case '[':
          let k = i;
          let done;
          for (let j = i + 1; j < gary.length; j++) {
            const c2 = gary[j];
            i++;
            if(c2 == ']') {
              let array = parseGaryArray(gary);  
              done = true;
            }
          }
          if(!done) throw `BrockError: [ at ${k} not closed`;
          break;
        default:
          break;
      }
    }
    return p;
  }
  garyToJSON = (gary) => {
    // TODO
    return;
  }
}