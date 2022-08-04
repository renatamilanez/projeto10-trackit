import styled from 'styled-components';
import Habit from './Habit';
import Header from './Header';

export default function Today(){
    return (
        <>
            <Header />
            <Container>
                <Date>
                    <Title>Segunda, 17/05</Title>
                    <Progress>Nenhum hábito concluído ainda</Progress>
                </Date>
                <Habit />
                <Habit />
                <Habit />
                <Habit />
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
    align-items: center;
`

const Date = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 28px;
`

const Title = styled.h4`
    color: var(--color-dark-blue);
    font-size: 23px;
    font-weight: 400;
    font-family: var(--font-body);
`

const Progress = styled.h6`
    color: #BABABA;
    font-size: 18px;
    font-weight: 400;
    font-family: var(--font-body);
    margin-top: 8px;
`