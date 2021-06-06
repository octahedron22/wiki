import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const InfoCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Information')}
        </Heading>
        
        <>
          <Text fontSize="20px">{TranslateString(999, '- Early Supporter Reward')}</Text>
          <Text fontSize="20px">{TranslateString(999, '- Aggressive BURN')}</Text>
          <Text fontSize="20px">{TranslateString(999, '- Locked Team Liquidity')}</Text>
          <Button 
              as="a"
              variant="tertiary"
              href="https://farmwiki.gitbook.io/farmwiki/"
              target="_blank" >
              {TranslateString(0, 'Read in WIKI Gitbook')}
            </Button>

        
          
          
          


        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
