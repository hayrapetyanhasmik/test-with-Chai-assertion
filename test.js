let assert = require("assert");
describe("Mathematical Operations-Test Suits", function(){
    beforeEach(function(done){
        this.timeout(5000);
        setTimeout(done, 3000);
    });
    
    let a = 10;
    let b = 10;
        it("Addition of two numbers", function(){       
    let c = a+b;
        assert.equal(c,20);
    });
    
        it("Subtraction of two numbers", function(){
    let c = a-b;
        assert.equal(c,0);
  });

        it("Multiplication of two numbers", function(){
    let c = a*b;
        assert.equal(c,100);
});

        it("Division of two numbers", function(){
    let c = a/b;
    assert.equal(c,1);
});
});