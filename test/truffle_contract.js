var TruffleContract = artifacts.require("../contracts/TruffleContract.sol");

contract("TruffleContract", function () {
  it("should assert true", async function (done) {
    var truffle_contract = TruffleContract.deployed();
    assert.isTrue(true);
    done();
  });
});
