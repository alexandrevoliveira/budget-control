import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="engeman" />
        <button type="button">Botao</button>
      </Content>
    </Container>
  )
}