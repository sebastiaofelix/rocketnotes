import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth'

export function Header() {
    const { signOut } = useAuth();

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

            <Logout onClick={ signOut }>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
}