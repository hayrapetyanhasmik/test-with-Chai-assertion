const chai = require("chai");
const expect = chai.expect;
let a = 1, b = 1;
expect(a).to.be.equals(b);


function myObj(){
    return{
        a: 100,
        b: "Hello"
    }
}
x = new myObj(), y = new myObj();
expect(x).to.be.an("object");
//expect(x).to.be.equals(y, "x and y are not equal");

expect(x).to.be.deep.equals(y);