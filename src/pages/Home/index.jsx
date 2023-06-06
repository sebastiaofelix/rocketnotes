import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Inputs'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'

export function Home(){
    return(
        <Container>
            <Brand>
              <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node"/></li>

            </Menu>

            <Search>
                <Input placeholder="Como pesquisar?" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title='Minhas Notas'>
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name:'react'},
                            {id: '2', name:'rocketseat'}
                        ]
                    }}
                    />
                </Section>
            </Content>                  

            <NewNote to="/new">
              <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    );
}

