/*
  Brock: A library for parsing GARY files
  Author: smv
  Date: 8 Aug 2020
  Version: 0.1.0
  Liscence: "Just-credit-me-when-you-use-this-file-please-thanks" 
*/

function BROCK() {
  function parseGaryLiteral(gary = '', type = '"') {
    console.log(gary);
    for (let i = 0; i < gary.length; i++) {
      const c = gary[i];
      if (c.match(/[ -!]/gi)) return;
      if (c == type) {
        return gary.substring(1, i);
      }
    }
  }
  function parseGaryArray(gary = '') {
    let p;
    let arr = gary.split(/[\,[\]]/gi);
    for (let i = 1; i < arr.length; i++) {
      const c = arr[i];
      if (c == ' ') continue;
      if (c.match(/[\"\'\*\^\&\%]/gi)) {
        let array = parseGaryLiteral(gary.substring(i), c);
        console.log(array);
        if (!array) throw `BlockError: ${c} at char ${i} not closed.`;
      }
    }
    return;
  }
  this.parseGary = (gary = '') => {
    let p;
    for (let i = 0; i < gary.length; i++) {
      const c = gary[i];
      switch (c) {
        case ' ':
          continue;
        case '[':
          let done;
          let array = parseGaryArray(gary.substring(i));
          if (array) {
            done = true;
          }
          if (!done) throw `BrockError: [ at ${i} not closed.`;
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