import web3NoAccount from './web3'
import DoaAbi from './DoaAbi.json'
import mintAbi from './mintAbi.json'
import usdtContract from './USDTAbi.json'
import USDTAbi from './USDTAbi.json';
import USDTMainAbi from './USDTMain.json'

const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
    // console.log('_web3',_web3);
    return new _web3.eth.Contract(abi, address)
}

export const getproposalContract = (address, web3) => {
    return getContract(DoaAbi, address, web3)
}

export const getMintContract = (address, web3) => {
    return getContract(mintAbi, address, web3)
}

export const getUsdtContract = (address, web3) => {
    return getContract(usdtContract, address, web3)
}

// export const getUSDTContract = (address, web3) => {
//     return getContract(USDTAbi, address, web3)
// }


// export const getUSDTMainContract = (address, web3) => {
//     return getContract(USDTMainAbi, address, web3)
// }