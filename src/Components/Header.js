import styled from 'styled-components';
import imagemTeste from '../assets/images/perfil.png';

export default function Header(){
    return(
        <Container>
            <TrackIt>TrackIt</TrackIt>
            <UserImage src={imagemTeste}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    background-color: var(--color-dark-blue);
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TrackIt = styled.h4`
    font-family: var(--font-title);
    color: #ffffff;
    font-size: 39px;
    font-weight: 400;
`

const UserImage = styled.img`
    width: 51px;
    border-radius: 50%;

`