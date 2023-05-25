import { Container, Links, Content } from './styles';

import { Tags } from '../../components/Tags'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Details(){
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est, voluptatibus,
             assumenda corporis adipisci vero facilis saepe ratione blanditiis aspernatur tempore
              suscipit dolorum commodi velit rem molestias! Numquam, assumenda quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est, voluptatibus,
             assumenda corporis adipisci vero facilis saepe ratione blanditiis aspernatur tempore
              suscipit dolorum commodi velit rem molestias! Numquam, assumenda quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est, voluptatibus,
             assumenda corporis adipisci vero facilis saepe ratione blanditiis aspernatur tempore
              suscipit dolorum commodi velit rem molestias! Numquam, assumenda quos.
          </p>

          <Section title="Links Uteis">
            <Links>
              <li><a href="#">rocketseat.com.br</a></li>
              <li><a href="#">rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express"/>
            <Tags title="node.js"/>
          </Section>

          <Button  title="Voltar"/>            
        </Content>
      </main>
    </Container>
  )
}