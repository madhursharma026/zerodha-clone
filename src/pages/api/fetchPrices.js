import { ethers } from 'ethers'

const provider = new ethers.providers.JsonRpcProvider(
  'https://eth-sepolia.g.alchemy.com/v2/xCZmvvUAQdxJ-6XEaXEES'
)

const priceFeeds = {
  ETH: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
  LINK: '0xc59E3633BAAC79493d908e63626716e204A45EdF',
  DAI: '0x14866185B1962B63C3Ea9E03Bc1da838bab34C19',
  AUD: '0xB0C712f98daE15264c8E26132BCC91C40aD4d5F9',
  BTC: '0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22',
  CSPX: '0x4b531A318B0e44B549F3b2f824721b3D0d51930A',
  CZK: '0xC32f0A9D70A34B9E7377C10FDAd88512596f61EA',
  EUR: '0x1a81afB8146aeFfCFc5E50e8479e826E7D55b910',
  GBP: '0x91FAB41F5f3bE955963a986366edAcff1aaeaa83',
  GHO: '0x14866185B1962B63C3Ea9E03Bc1da838bab34C19',
}

const aggregatorV3InterfaceABI = [
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export default async function handler(req, res) {
  try {
    const prices = {}

    for (const symbol of Object.keys(priceFeeds)) {
      const contract = new ethers.Contract(
        priceFeeds[symbol],
        aggregatorV3InterfaceABI,
        provider
      )
      const data = await contract.latestRoundData()
      const price = Number(data.answer) / 1e8
      prices[symbol] = price
    }

    res.status(200).json({ success: true, prices })
  } catch (error) {
    console.error('❌ Error fetching prices:', error.message)
    res.status(500).json({ success: false, error: error.message })
  }
}
