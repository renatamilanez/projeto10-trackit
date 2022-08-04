import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function PrivatePage({children}){
        const auth = localStorage.getItem('userToken');

        if(auth){
            return(
                <>
                <Header />
                    {children}
                <Footer />
                </>
            )
        } else {
                return(
                    <Container>
                        <Title>Acesso negado, faça login novamente.</Title>
                        <Link to='/'>
                            <Button>Voltar para página de login</Button>
                        </Link>
                    </Container>
                )
        }
}

const Container = styled.div`
    width: 100%;
    height: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Title = styled.h2`
    font-family: var(--font-body);
    color: var(--color-dark-blue);
    font-weight: 400;
    font-size: 23px;
    text-align: center;
`


const Button = styled.button`
    width: 80vw;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: 1px solid #52B6FF;
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
    margin-top: 25px;
`