import styled from 'styled-components';
import WeeklyButtons from './WeeklyButtons';

export default function OpenHabit(){
    return(
        <Container>
            <InputHabit placeholder='nome do hábito' type='text' required/>
            <WeeklyButtons />
            <Actions>
                <Cancel>Cancelar</Cancel>
                <Save>Salvar</Save>
            </Actions>
        </Container>
    )
}

const Container = styled.div`
    width: 90vw;
    padding: 18px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #ffffff;
    margin-top: 28px;
`

const InputHabit = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--color-gray);
    font-size: 20px;
    font-weight: 400;
    color: var(--color-gray);
    padding: 8px;
    word-break: normal;
    &::placeholder{
        color: var(--color-gray);
    }
`

const Cancel = styled.button`
    border: none;
    font-size: 20px;
    font-weight: 400;
    color: var(--color-blue);
    background-color: #ffffff;
    margin-right: 20px;
`

const Actions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 30px;
    
`

const Save = styled.button`
    width: 84px;
    height: 35px;
    background-color: var(--color-blue);
    border: none;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    border-radius: 5px;
`