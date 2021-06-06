import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import InfoCard from './components/InfoCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 150px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        
        <Heading as="h1" size="xl" mb="5px" textTransform="uppercase" color="#e59202">
          {TranslateString(0, 'Farm WIKI')}
        </Heading>

        <Text mb="5px" style={{ color: '#e59202', fontSize: '20px' }}>
          {TranslateString(0, 'Earn Wiki by Staking - Earn BUSD with your SuperWiki (soon)')}
        </Text>


            <Button 
              as="a"
              variant="tertiary"
              href="https://bscscan.com/block/countdown/7247777"
              target="_blank" >
              {TranslateString(0, 'Farming Started at Block: 7247777')}
            </Button>

        

      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          
          <CakeStats />
          <TotalValueLockedCard />
          <InfoCard/>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
