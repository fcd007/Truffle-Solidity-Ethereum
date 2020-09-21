var TruffleContract = artifacts.require("../contracts/TruffleContract.sol");

const TruffleContract = artifacts.require("TruffleContract");

contract("TruffleContract", function () {
  it("should assert true", async function (done) {
    await TruffleContract.deployed();
    assert.isTrue(true);
    done();
  });
});
