var TruffleContract = artifacts.require("../contracts/TruffleContract.sol");
module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TruffleContract);
};
