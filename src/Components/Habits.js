import styled from 'styled-components';
import {useEffect } from 'react';
import OpenHabit from './OpenHabit';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import ClosedHabit from './ClosedHabit';
import RenderList from './RenderList';

export default function Habits(){
    const {config, addButton, setAddButton, listHabits, setListHabits, setReloadHabits} = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(res => {
            setListHabits(res.data);
        })
    }, []);

    return(
        <>
            <Container>
                <Head>
                    <Title>Meus hábitos</Title>
                    <AddHabit onClick={() => setAddButton(!addButton)}>+</AddHabit>
                </Head>
                {addButton === true ? <OpenHabit /> : null}
                {listHabits === null || listHabits.length === 0 ? (
                    <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                    ) : <RenderList />}
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