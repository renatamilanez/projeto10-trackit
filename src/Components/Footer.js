import styled from 'styled-components';

export default function Footer(){
    return (
        <Container>
            <MenuItem>Hábitos</MenuItem>
            <ProgressBall>Hoje</ProgressBall>
            <MenuItem>Histórico</MenuItem>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
`

const MenuItem = styled.h6`
    color: var(--color-dark-blue);
    font-size: 18px;
    font-weight: 400;
    font-family: var(--font-body);
`
const ProgressBall = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: var(--color-blue);
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    font-family: var(--font-body);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(50% - 45px);
    top: -50%;
`