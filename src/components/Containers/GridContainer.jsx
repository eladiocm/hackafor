import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 12px;
  padding-inline: 12px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

function GridContainer({ children }) {
  return <Container>{children}</Container>
}

export default GridContainer
