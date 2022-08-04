import styled from "styled-components";
import check from "../assets/images/checkmark.svg"

export default function Habit(){
    return(
        <Container>
            <Texts>
                <Title>Ler 1 capítulo de livro</Title>
                <Subtitle>Sequência atual: 3 dias</Subtitle>
                <Subtitle>Seu recorde: 5 dias</Subtitle>
            </Texts>
            <OkButton>
                <Image src={check}></Image>
            </OkButton>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
`
const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: var(--font-body);
    color: #666666;
    font-weight: 400;
`

const Title = styled.h5`
    font-size: 20px;
    margin-bottom: 7px;
`

const Subtitle = styled.p`
    font-size: 13px;
    margin-bottom: 4px;
`

const OkButton = styled.div`
    width: 69px;
    height: 69px;
    background-color: #e7e7e7;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 50px;
    color: #ffffff;
`