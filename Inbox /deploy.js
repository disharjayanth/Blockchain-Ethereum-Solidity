const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface,bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'economy time girl noble dove scout sustain valid whisper thumb fragile undo',
    'https://rinkeby.infura.io/v3/03e64f6749f34936a8aa0bcb96d1be93'
)

const web3 = new Web3(provider)

const deploy = async() => {
    const accounts = await web3.eth.getAccounts()
    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data : bytecode, arguments : ['Hi there!'] })
        .send({ from : accounts[0],  gas : '1000000' })

    console.log('Contract deployed to:', result.options.address)    
}

deploy()