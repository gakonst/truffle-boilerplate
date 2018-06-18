const Contract = artifacts.require("Contract");

import {increaseTimeTo, duration} from './helpers/increaseTime'
import assertRevert from './helpers/assertRevert.js';

// Promisify events
const Promisify = (inner) =>
new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
);

contract("Contract", async function(accounts) {

    let [alice, bob, charlie] = accounts;

    beforeEach(async function() {
        contract = await Contract.new({from: alice});

        // Get all logs from event
        const e = contract.EventName({}, {fromBlock: 0, toBlock: 'latest'});
        const events = await Promisify(cb => depositEvent.get(cb));


    });

    describe('Suite', function() {

        it("T1", async function() {

        });
    });

});
