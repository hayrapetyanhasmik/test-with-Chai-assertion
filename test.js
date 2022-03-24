const chai = require("chai");

//expect
const expect = chai.expect;
//should()
const should = chai.should();

let a = 1, b = 1;
expect(a).to.be.equals(b);
(a).should.be.equals(b);

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

expect(x).to.be.an("object").and.to.be.deep.equals(y);

(x).should.be.an("object").and.to.be.deep.equals(y);

//arrays
let arr = [1,2,3,4];
expect(arr).to.be.an("array").that.includes(1);

(arr).should.be.an("array").that.includes(1);


