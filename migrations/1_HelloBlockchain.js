const HelloBlockchain = artifacts.require("Storage");

module.exports = function (deployer) {
  deployer.deploy(HelloBlockchain);
};