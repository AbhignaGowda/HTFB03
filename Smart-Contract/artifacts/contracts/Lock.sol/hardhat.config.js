

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/qAkoflOoRz6opKBMckxfc0HDOb1J2MNh',
      accounts: ['70342610e4cdb11255b101ac4e9daa307db583ac8ef87c84ea88fe57430e74b0'],
    },
  },
};