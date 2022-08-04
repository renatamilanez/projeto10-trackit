import styled from 'styled-components';

export default function WeeklyButtons(){
    return(
        <Container>
            <WeekButton>D</WeekButton>
            <WeekButton>S</WeekButton>
            <WeekButton>T</WeekButton>
            <WeekButton>Q</WeekButton>
            <WeekButton>Q</WeekButton>
            <WeekButton>S</WeekButton>
            <WeekButton>S</WeekButton>
        </Container>
    )
}

const WeekButton = styled.button`
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

const Container = styled.div`
    display: flex;
`