require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strike cruise remain pulse grace office army giant'; 
let testAccounts = [
"0xb32923ab01656d285455d223ae565114ced608a3e7776ffb62a10f50d3bbaa08",
"0xc09aa69b511d43bf63878ec740bc287f27456dfd87c31031b4b12551baa49399",
"0xd3d2ca5627ceb2f56b5bd3de62f7f7c3227c1c445dc4e177b88b591ad90877bf",
"0xfd8d68b2dbea036eeaebfc1e48f8837f26dd118f0f16e164ae71079aa64dc871",
"0xfc1642269bf05bcfc13b481ea96d4989e5a9c201fe861f8ffb91027881b288fc",
"0xc5ac3ca7005842ded7aae0b1393732e2e831ae5538069d610833638b25ee6a1e",
"0xfe349e8f0754f911c1b32b9efaf182af60871e9e323c70e13c7ea49d67f790b3",
"0xca03d98eb0ff67bea76749e1805c400f0baa6033af99321cbbcfcc96ee543984",
"0x0712f371b91e9123f6afe99801a5150c5d1e2be643639d998ed55038f07b769e",
"0x0d73eb8c5751ad15b994fc12ec8deefba9666c3eba66210c73afab7b0e97c26b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
