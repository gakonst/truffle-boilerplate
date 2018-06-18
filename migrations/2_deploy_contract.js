const Contract = artifacts.require("Contract");
// const Contract2 = artifacts.require("Contract2");

module.exports = async function(deployer, network, accounts) {
    // return; // for testing
    let aContractInstance;
    // let aContract2Instance;

    return deployer.deploy(Contract)
        .then(() => Contract.deployed())
        .then(instance => {
            aContractInstance = instance;
            console.log('Contract deployed at address: ' + instance.address);
            // return deployer.deploy(Contract2, instance.address);
        });
    // .then(() => Contract2.deployed())
    //     .then((instance) => {
    //         aContract2Instance = instance;
    //         console.log('Contract2Instance deployed at address: ' + instance.address);
    //     });
};

