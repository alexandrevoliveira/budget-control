import { useState } from 'react'
import logoImg from '../../assets/logo.jpg'
import EngeGif from '../../assets/newengeman.gif'

import { Container, Content } from './styles'


export function Header() {
  let [img, setImg] = useState(EngeGif)
    setTimeout(() => {
      setImg(logoImg)
    }, 6100)

  return (
    <Container>
      <Content>
        <img src={img} alt="engeman" />
        <button type="button">Botao</button>
      </Content>
    </Container>
  )
}