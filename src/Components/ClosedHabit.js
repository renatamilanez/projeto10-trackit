import styled from 'styled-components';
import WeeklyButtons from './WeeklyButtons';
import trash from '../assets/images/trash.svg';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

export default function ClosedHabit({item}){
    const {config, setListHabits} = useContext(UserContext);

    function removeTask(item){
        console.log(item.id);
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}`, config);
        promise.then(res => {
            setListHabits(res.data);
        })
    }

    return(
        <Container>
            <Title>{item.name}</Title>
            <WeeklyButtons />
            <Delete src={trash} onClick={() => removeTask(item)}></Delete>
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
    position: relative;
`

const Title = styled.p`
    font-family: var(--font-body);
    font-size: 20px;
    font-weight: 400;
    color: #666666;
    line-height: 23px;
`

const Delete = styled.img`
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
`