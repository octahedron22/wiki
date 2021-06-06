import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x372a61EBEB3fF5f36f603eAa4dF890b18d36065D',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x372a61EBEB3fF5f36f603eAa4dF890b18d36065D',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Singles',
    icon: 'PoolIcon',
    href: '/pools',
  },
  
  {
    label: 'Tokens for WIKI',
    icon: 'GroupsIcon',
    href: '/staking',
  },

  {
    label: 'Price Info',
    icon: 'InfoIcon',
    items: [
       {
        label: 'Price Chart WIKI',
        href: 'https://dex.guru/token/0x372a61ebeb3ff5f36f603eaa4df890b18d36065d-bsc',
      },

      {
        label: 'Price Chart SuperWIKI',
        href: 'https://dex.guru/token/0x8bde81029eda5e7381794c0df7ed65e6bb9005e0-bsc',
      },

      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/',
      },
     
    ],
  },

  {
    label: 'More Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Gitbook',
        href: 'https://farmwiki.gitbook.io/farmwiki/',
      },
    ],
  },


  {
    label: 'GO to HALVAR',
    icon: 'HomeIcon',
    href: 'https://halvar.farmwiki.xyz/',
  },
  



]

export default config
