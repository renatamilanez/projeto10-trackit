import ClosedHabit from "./ClosedHabit";
import styled from "styled-components";
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function RenderList(){
    const {listHabits} = useContext(UserContext);

    return (listHabits.map((item, index) => {
                return (
                    <ClosedHabit key={index} item={item} index={index}/>)}
        ))
}

const Text = styled.p`
    color: #666666;
    margin-top: 28px;
    line-height: 23px;
    font-family: var(--font-body);
    font-size: 18px;
    font-weight: 400;
`