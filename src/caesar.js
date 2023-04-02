// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  // convert input character to properly shifted output character
  function convertCharacterToNumberAndBack (char,shift) {
    // Get ASCII code of lowercased character
    let thisCharCode = char.toLowerCase().charCodeAt(0)

    // If not a normal letter, keep the same character
    if (thisCharCode >122 || thisCharCode<97) {return char}

    // Subtract 96 so that A = 1 and Z=26. Apply shift
    thisCharCode = thisCharCode - 96 + shift

    // Check if character goes above Z or below A, correct course
    if (thisCharCode<1) thisCharCode+=26
    else if (thisCharCode>26) thisCharCode-=26

    return String.fromCharCode(thisCharCode+96);
  }

  function caesar(input, shift, encode = true) {
    //Check for initial constraints
    if ( shift >25 || shift <-25 || shift ===0 || !shift) {return false}
    
    // Initialize full string
    let codedString = ""
    
    // Set shift to reverse if decoding
    if(!encode) {shift *= -1}

    // Loop through string, process each character
    for (let i = 0; i < input.length; i++) {
        const thisChar = convertCharacterToNumberAndBack(input[i],shift)
        codedString += thisChar
      }
      return codedString
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
