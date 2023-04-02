// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  // set real alphabet 
  const theRealAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function hasRepeats (str) {
    return /(.).*\1/.test(str);
  }

  function decoder (input,alphabet) {
    let codedString = ""

    for (let i=0; i<input.length; i++) {
      const thisCharCoded = input[i].toLowerCase()
      if (thisCharCoded === " ") codedString += " "
      else {
        // Get index of this character in the fake Alhpabet, get the corresponding character at that index in the RealAlphbatet
        const indexFake = alphabet.indexOf(thisCharCoded)
        codedString += theRealAlphabet[indexFake]   
      }
      
    }
    return codedString
  }

  function encoder (input,alphabet) {
    let codedString = ""

    for(let i=0; i<input.length; i++) {
      const thisCharPlain = input[i].toLowerCase();
      if (thisCharPlain === " ") codedString += " ";
       else {
        // Get index of this character in the real Alhpabet, get the corresponding character at that index in the fakeAlphbatet
        const indexReal = theRealAlphabet.indexOf(thisCharPlain);
        codedString += alphabet[indexReal];
       }
      
    }
    return codedString
  }

  function substitution(input, alphabet, encode = true) {
    if ( !alphabet || alphabet.length!=26 || hasRepeats(alphabet) ){return false}
    if (encode) {
      return encoder(input,alphabet)
    }
    else return decoder(input, alphabet)
  }

  substitution("You are an excellent spy","xoyqmcgrukswaflnthdjpzibev")

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
