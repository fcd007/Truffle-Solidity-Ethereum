var TruffleContract = artifacts.require("./TruffleContract.sol");

module.exports = function (deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TruffleContract);
};
