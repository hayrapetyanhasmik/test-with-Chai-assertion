/*let assert = require("assert");
describe("Mathematical Operations", function(){
    it("Addition of two numbers", function(){
          let a = 10;
          let b = 10;
          let c = a+b;
          assert.equal(c,20);
    });
    
    it("Subtraction of two numbers", function(){
        let a = 10;
        let b = 10;
        let c = a-b;
        assert.equal(c,0);
  });

  it("Multiplication of two numbers", function(){
    let a = 10;
    let b = 10;
    let c = a*b;
    assert.equal(c,10);
});

it("Division of two numbers", function(){
    let a = 10;
    let b = 10;
    let c = a/b;
    assert.equal(c,1);
});
});*/

describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        console.log('Execute After All Tests');
    });

    afterEach('Execute After Each Test', function(){
        console.log('Execute After Each Test');
    });

    it('Mocha Hooks Test', function(){
        console.log('Mocha - This is a Test for Mocha Hooks');
    });
});