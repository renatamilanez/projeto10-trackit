import styled from 'styled-components';
import Header from './Header';

export default function History(){
    return (
        <>
        <Header />
        <Container>
            <Title>Histórico</Title>
            <Subtitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</Subtitle>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 18px;
    margin-top: 98px;
    margin-bottom: 120px;
    justify-content: center;
    align-items: flex-start;
`

const Title = styled.h4`
    color: var(--color-dark-blue);
    font-size: 23px;
    font-weight: 400;
    font-family: var(--font-body);
`

const Subtitle = styled.h5`
    color: #666666;
    font-size: 18px;
    font-weight: 400;
    font-family: var(--font-body);
    margin-top: 18px;
`