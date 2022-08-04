import styled from 'styled-components';
import NewHabit from './NewHabit';

export default function Habits(){
    return(
        <>
            <Container>
                <Head>
                    <Title>Meus hábitos</Title>
                    <AddHabit>+</AddHabit>
                </Head>
                <NewHabit />
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 98px;
    margin-bottom: 120px;
`
const Head = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h6`
    font-family: var(--font-body);
    color: #126ba5;
    font-size: 23px;
    font-weight: 400;
`

const AddHabit = styled.button`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: var(--color-blue);
    color: #ffffff;
    font-family: var(--font-body);
    font-size: 27px;
    font-weight: 400;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    color: #666666;
    margin-top: 28px;
    line-height: 23px;
    font-family: var(--font-body);
    font-size: 18px;
    font-weight: 400;
`

