import { Container } from './styles';

import { Button } from '../../components/Button'

export function Details(){

  return(
    <Container>
    <h1>hello world!</h1>
    <span>Seba</span>

    <Button  title="Login" loading />
    <Button  title="Cadastrar"/>
    <Button  title="Voltar"/>

    </Container>
  )
}