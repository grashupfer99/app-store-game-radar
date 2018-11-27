const expect = require("chai").expect;
const assert = require("chai").assert;
const maxLen = require("../src/gameData").maxLen;

describe("gameData.js", ()=> {
  
  describe("maxLen()", ()=> {
    

    it("should return an array", () => {
      const a = [1,2,3,4,5], b = [1,2,3];    
      assert.isArray(maxLen(a,b));
    });


    it("case: a > b then return a", () => {
      const a = [1,2,3,4,5], b = [1,2,3];
      expect(maxLen(a,b)).to.equal(a);
    })

    it("case: a < b then return b", () => {
      const a = [1,2,3], b = [1,2,3,4,5];
      expect(maxLen(a,b)).to.equal(b);
    })

  })
})