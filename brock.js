/*
  Brock: A library for parsing GARY files
  Author: smv
  Date: 8 Aug 2020
  Version: 0.1.0
  Liscence: "Just-credit-me-when-you-use-this-file-please-thanks" 
*/
function BROCK() {
  this.parseGary = (gary) => {
    let p;
    let lc = '';
    let mc = '';
    let mcc = [];
    let layer = 0;
    for (let i = 0; i < gary.length; i++) {
      const c = gary[i];
      switch (c) {
        case '/':
          if (lc = '/') {
            if (mc == 'comment') {
              mc = '';
              mcc[layer] = i;
            } else {
              mc = 'comment';
              mcc[layer] = i - 1;
            }
          }
          break;
        case '(':
          // if (mc == 'object') throw ("BrockError at char'," + i);
          mc == 'object';
          layer++;
          break;
        case ')':
          if (mc = 'object'){
            layer--;
            mcc[layer] = 1;
            if(layer = 0);
          }
          break;
        default:
          if (mc != 'comment') throw `BrockError: cannot parse char ${i}`;
        case ' ':
        case '\n':
          break;
      }
      lc = c;
    }
    // return 'not ready yet';
    return p;
  }
  garyToJSON = (gary) => {
    // TODO
    return;
  }
}
