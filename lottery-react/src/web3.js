import Web3 from 'web3'


// ADDITION This is needed to allow this application to interact with metamask
window.ethereum.enable();

// window.web3 coming from metamask
const currProvider = window.web3.currentProvider

const web3 = new Web3(currProvider);

export default web3