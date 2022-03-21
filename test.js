let assert = require("assert");
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
});