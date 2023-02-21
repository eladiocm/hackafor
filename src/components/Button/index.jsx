import styled from 'styled-components'

const Button = styled.button`
  height: 40px;
  padding-inline: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  // add variants if needed
  background-color: #27272a;
  border: 1px solid #3f3f46;
  border-radius: 6px;
`

function Index({ children, icon, position = 'left' }) {
  return (
    <Button>
      {icon && position === 'left' && icon}
      {children}
      {icon && position === 'right' && icon}
    </Button>
  )
}

export default Index
