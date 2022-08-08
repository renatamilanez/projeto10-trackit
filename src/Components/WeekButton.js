import styled from "styled-components";
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function WeekButton({day, index}){
    const [clicked, setClicked] = useState(false);
    const {habit} = useContext(UserContext);

    function isSelected(index){
        setClicked(!clicked);
        habit.days.push(index);
    }
        function isRemoved(index){
        setClicked(!clicked);
        habit.days = habit.days.filter(item => item !== index);
    }

    {if(clicked){
        return (<WeekButtonSelected key={index} onClick={() => isRemoved(index)}>{day}</WeekButtonSelected>)
    } if(!clicked){
        return (<WeekButtonAvailable key={index} onClick={() => isSelected(index)}>{day}</WeekButtonAvailable>)
    }}
}

const WeekButtonSelected = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid var(--color-gray);
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    background-color: var(--color-gray);
    margin: 8px 4px 0 0;
`

const WeekButtonAvailable = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid var(--color-gray);
    font-size: 20px;
    font-weight: 400;
    color: var(--color-gray);
    background-color: #ffffff;
    margin: 8px 4px 0 0;
`