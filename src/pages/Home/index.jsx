import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Inputs'

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

            </Content>

            <NewNote>
              <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    );
}
