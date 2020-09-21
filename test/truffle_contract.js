var TruffleContract = artifacts.require("./TruffleContract.sol");

contract("TruffleContract", function () {
  it("should assert true", async function (done) {
    await TruffleContract.deployed();
    assert.isTrue(true);
    done();
  });
});
