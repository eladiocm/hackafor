import styled from 'styled-components'

const FlexContainer = styled.div.attrs(
  ({ direction, vAlignment, hAlignment, gap }) => ({
    direction: direction || 'row',
    vAlignment: vAlignment || 'initial',
    hAlignment: hAlignment || 'initial',
    gap: gap || '36px'
  })
)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ vAlignment }) => vAlignment};
  justify-content: ${({ hAlignment }) => hAlignment};
  gap: ${({ gap }) => gap};
`

const StyleHeader = styled(FlexContainer).attrs({
  direction: 'row',
  hAlignment: 'center',
  vAlignment: 'center',
  gap: '0px'
})`
  width: '100%';
`

export { StyleHeader, FlexContainer }
