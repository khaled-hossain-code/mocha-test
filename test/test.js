const {pallet : getPallet} = require("../lib/pallets.js");
const assert = require("assert");

describe("getPallet", ()=>{

    it("should return 3 items", ()=>{        
        var pallet = getPallet();

        assert(Array.isArray(pallet),"Did not returned array");
        assert.equal(pallet.length, 4, "length is not 3"); 
    });

    
})