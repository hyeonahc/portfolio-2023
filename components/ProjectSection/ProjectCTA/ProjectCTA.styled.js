import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xxxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: normal;
  text-align: center;
  position: relative;
`
