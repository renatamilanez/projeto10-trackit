import styled from 'styled-components';
import WeekButton from './WeekButton';

export default function WeeklyButtons(){
    let weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return(
        <Container>
            {weekdays.map((day, index) =>
            <WeekButton key={index} day={day} index={index}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`