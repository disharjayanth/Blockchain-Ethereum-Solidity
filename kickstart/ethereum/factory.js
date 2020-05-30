import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xB93Aea83ddE3664D94E0c01f58185E36fb2ac20A'
)

export default instance