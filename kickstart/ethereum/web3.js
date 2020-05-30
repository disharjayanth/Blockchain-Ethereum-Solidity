import Web3 from 'web3'

// window.ethereum.enable();

let web3 

if( typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //We are in browser and metamask is running.
    window.ethereum.enable();
    web3 = new Web3(window.web3.currentProvider)
} else {
    //We are on server *OR* In user is in browser and user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/03e64f6749f34936a8aa0bcb96d1be93'
    )
    web3 = new Web3(provider)
}

export default web3