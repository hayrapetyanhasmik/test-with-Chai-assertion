const chai = require("chai");

//expect
const expect = chai.expect;
//should()
const should = chai.should();
//assert - TDD
const assert = chai.assert; 

chai.config.truncateThreshold = 0;
//chai.config.showDiff = true; - shows differences 
//chai.config.includeStack = true;

let a = 1, b = 1;
expect(a).to.be.equals(b);
(a).should.be.equals(b);
assert.equal(a,b);

function myObj(){
    return{
        a: 100,
        b: "Hello"
    }
}
x = new myObj(), y = new myObj();
expect(x).to.be.an("object");

expect(x).to.be.deep.equals(y);

(x).should.be.deep.equals(y);
assert.deepEqual(x,y);

expect(x).to.be.an("object").and.to.be.deep.equals(y);

(x).should.be.an("object").and.be.deep.equals(y);

//arrays
let arr = [1,2,3,4];
expect(arr).to.be.an("array").that.includes(1);

(arr).should.be.an("array").that.includes(1);
assert.isArray(arr);

