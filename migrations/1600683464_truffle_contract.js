var TruffleContract = artifacts.require("../contracts/TruffleContract.sol");
module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(TruffleContract);
};
