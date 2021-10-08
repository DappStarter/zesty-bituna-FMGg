require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture stomach cruise spike punch gentle light army genuine'; 
let testAccounts = [
"0xc5f8af18c89376cf4222e1b2c94ea3a935de3315985cdcf3f78642760c6ec9cc",
"0xf4bbc80453ea268cf55b7c137e63488ed227e1b0cc8078a8c70ae63f098265b9",
"0x0d152be24383082c81c2206759fd7d3d854ce3591a28a83b5ce9dd5db373710d",
"0xa9cb1eda6b8f9bc20e2b65fbfdea5ec652d8853ba8e9fd80372210ad1edb18c4",
"0x6cc47b7f74387c408a0d99948bf3b08571b02a1038c7464ca2371946cd7be748",
"0x3d51d740fbe7c88c6b2e711da22afc553ccf64a0347efe9dc4be81733e86c1ff",
"0xc75f85a223710c9304bed3f370b079320b7431fe8b3af457929a924d4a95ab06",
"0x2c6a349e583ddff2cae99df02c21f13c480c9968e72ee7a1918c68593910fef5",
"0x19a26eb560cd2516a7dec3ea4949aba071b489886de90af9f44324b2e34872f3",
"0x35e7d20b17caa5db972105f358a73e01276617d4c28aa8977b2379b82a34edbc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

