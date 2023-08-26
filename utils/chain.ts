import type { Option } from '@kodadot1/static'
import { ENDPOINT_MAP, chainList } from '@kodadot1/static'

export const getChainEndpointByPrefix = (prefix: string) => {
  const endpoint: string | undefined = ENDPOINT_MAP[prefix]

  return endpoint
}

export const getChainNameByPrefix = (prefix: string) => {
  if (prefix === 'ksm') {
    return 'rmrk2'
  }

  return prefix
}

export const isProduction = window.location.hostname === 'kodadot.xyz'
export const isBeta = window.location.hostname === 'beta.kodadot.xyz'

export const disableChains = ['dot']
export const disableChainListOnBetaEnv = ['dot', 'movr', 'glmr', 'snek']

export const availablePrefixes = (): Option[] => {
  const chains = chainList()

  if (isProduction || isBeta) {
    return chains.filter(
      (chain) => !disableChainListOnBetaEnv.includes(String(chain.value))
    )
  }

  return chains.filter((chain) => !disableChains.includes(String(chain.value)))
}

export const getAvailablePrefix = (prefix: string): string => {
  return availablePrefixes().some((chain) => chain.value === prefix)
    ? prefix
    : ''
}

export const availablePrefixWithIcon = () => {
  const menus = {
    ahk: '/chain/kusama_asset_hub.svg',
    ahp: '/chain/polkadot_asset_hub.svg',
    bsx: '/chain/basilisk.png',
    snek: '/chain/basilisk.png',
    ksm: '/chain/kusama.svg',
    rmrk: '/chain/kusama.svg',
  }

  return availablePrefixes().map((chain) => {
    return {
      ...chain,
      icon: menus[chain.value] || '',
    }
  })
}

// https://hello.kodadot.xyz/multi-chain/fees/assethub-fees
export const depositAmount = {
  ahk: {
    collection: 0.1,
    nft: 0.001,
  },
  ahp: {
    collection: 10,
    nft: 0.01,
  },
  bsx: {
    collection: 0.0067,
    nft: 0.0067,
  },
  snek: {
    collection: 0.0067,
    nft: 0.0067,
  },
}
