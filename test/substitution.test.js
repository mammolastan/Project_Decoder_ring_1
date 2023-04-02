const expect = require("chai").expect;
const {substitution} = require("../src/substitution")

describe("substitution", () => {

    it("should handle special characters such as #, $, *, etc.", () => {
      const expected = "message";
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl",false);
      expect(actual).to.equal(expected);
    });

    it("should handle spaces", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
      });

});


