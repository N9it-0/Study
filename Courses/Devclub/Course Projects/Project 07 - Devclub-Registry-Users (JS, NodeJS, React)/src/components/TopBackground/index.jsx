import { StyledTopBackground } from "./styles"; 
import UsersImage from '../../assets/users.png'

function TopBackground() {
    return (
        <StyledTopBackground>
        <img src={UsersImage} alt='imagem-usuarios' />
        </StyledTopBackground>
    )
}

export default TopBackground