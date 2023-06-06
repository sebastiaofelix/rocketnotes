import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/sebastiaofelix.png" 
                alt="Foto Usuario"/>

                <div>
                    <span>Bem-vindo</span>
                    <strong>Sebastiao Felix</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
}