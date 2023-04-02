// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // polybius("thinkful"); //> "4432423352125413"
  // polybius("3251131343 2543241341", false); //> "hello world"
  const decodeKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  }

  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }

  function encoder(input){
    let endMessage = "";
    for (let idx = 0; idx < input.length; idx++) {
      if (input[idx] === " ") {
        endMessage += input[idx];
      } else {
        const temp = input[idx].toLowerCase();
        endMessage += encodeKey[temp];
      };
    };
    return endMessage;
  };

  function decoder(input){
    if (input.replace(/\s/g, "").length % 2 !== 0) return false;
    let endMessage = "";
    for (let idx = 0; idx < input.length; idx += 2) {
      if (input[idx] === " ") {
        endMessage += input[idx];
        idx = idx - 1;
      } else {
        const slow = input[idx];
        const fast = input[idx + 1];
        const letterPos = `${slow}${fast}`;
        endMessage += decodeKey[letterPos];
      };
    };
    return endMessage;
  };


  // function getCharFromCodedPair(char) {
  //   return gridKey[char]
  // }

  // function getKeyByValue(value) {
  //   const gridKeys = Object.keys(gridKey)
  //   const foundValue = gridKeys.find(key => gridKey[key] === value);
  //   return foundValue
  //   // return Object.keys(gridKey).find(key => gridKey[key] === value);
  // }

  function polybius(input, encode = true) {
    if (!encode) {
      return decoder(input);
    } else {
      return encoder(input);
    };


    // input = input.toLowerCase()

    // let codedString = ""
    
    // // decode
    // if (!encode){
      
    //   // Check if even number
    //   if (input.length % 2>0){
    //     return false
    //   }
    //   // Loop through input
    //     for(let i=0; i<input.length; i+=2) {
          
    //       const thisChar = getCharFromCodedPair(input.substring(i,i+2))
    //       codedString += thisChar
    //     }
    // }
    // // encode
    // else {
    //   for(let i=0; i<input.length; i++) {
    //     const thisChar = getKeyByValue(input[i])
    //     codedString += thisChar
    //   }
    // }
    // return codedString
  };
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
