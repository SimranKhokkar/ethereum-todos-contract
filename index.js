const jsonfile = require('jsonfile');
const path = require('path');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));

const contractPath = path.join(__dirname, 'contractAddress.json');
const source = jsonfile.readFileSync(contractPath);
const allContract = source['Lottery'];
const myContract = web3.eth.contract(allContract.abi).at(allContract.address);

let manager = myContract.manager.call();
console.log('Manager address:', manager);

