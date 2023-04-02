const expect = require("chai").expect;
const {caesar} = require("../src/caesar")

describe("Caesar", () => {

    it("should return false if shift equal to 0", () => {
      const expected = false;
      const actual = caesar("random text", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is not defined", () => {
        const expected = false;
        const actual = caesar("random text");
        expect(actual).to.equal(expected);
      });

    it("should return false if shift value is less than -25", () => {
        const expected = false;
        const actual = caesar("random text", -26);
    expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("random text", 26);
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces and special symbols", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("Decoding: should maintain spaces and special symbols", () => {
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("Should treat capital letters as lower case letters", () => {
    const upperCase = caesar("Hello WORLD", 0);
    const lowerCase = caesar("hello world", 0);
    expect(upperCase).to.equal(lowerCase);
    }); 
});

// const { expect } = require("chai");
// const {caesar} = require("../src/caesar");

// describe("caesar", () => {
//     it("should return a properly encoded string", () => {
//         const input = "thinkful"
//         const actual = caesar(input, 3)
//         const expected = "wklqnixo"
//         expect(actual).to.equal(expected);
//     }),
//     it("should not adjust other characters beyond regular alphabet letters", () => {
//         const input = "This is a secret message!"
//         const actual = caesar(input, 8)
//         const expected = "bpqa qa i amkzmb umaaiom!"
//         expect(actual).to.equal(expected);
//     }),
//     it("should loop back to 'a' after the end of the alphabet", () => {
//         const input = "zyx"
//         const actual = caesar(input, 3)
//         const expected = "cba"
//         expect(actual).to.equal(expected);
//     }),
//     it("should loop to 'z' before the beginning of the alphabet", () => {
//         const input = "abc"
//         const actual = caesar(input, -3)
//         const expected = "xyz"
//         expect(actual).to.equal(expected);
//     }),
//     it("should properly decode a string", () => {
//         const input = "wklqnixo"
//         const actual = caesar(input, 3, false)
//         const expected = "thinkful"
//         expect(actual).to.equal(expected);
//     }),
//     it("should return false if no shift value present"), () => {
//         const input = "shift"
//         const actual = caesar(input)
//         expect(actual).to.be.false
//     },
//     it("should return false if shift is >25"), () => {
//         const input = "above"
//         const actual = caesar(input,27)
//         expect(actual).to.be.false
//     },
//     it("should return false if shift is <-25"), () => {
//         const input = "below"
//         const actual = caesar(input,-27)
//         expect(actual).to.be.false
//     },
//     it("should return false if shift is 0"), () => {
//         const input = "zero"
//         const actual = caesar(input,0)
//         expect(actual).to.be.false
//     }
// })
