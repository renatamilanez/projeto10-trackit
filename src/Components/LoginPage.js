import styled from 'styled-components';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

export default function LoginPage(){

    return (
        <Container>
            <Image src={logo} />
            <Form>
                <Input placeholder='email' type='email' name='email' required/>
                <Input placeholder='senha' type='password' name='password' required/>
                <Button>Entrar</Button>
            </Form>
            <Link to='/cadastro'>
                <Title>Não tem uma conta? Cadastre-se!</Title>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 180px;
    margin-bottom: 32px;
`

const Input = styled.input`
    width: 80vw;
    height: 45px;
    border: 1px solid #d4d4d4;
    margin-bottom: 6px;
    color: #d4d4d4;
    font-weight: 400;
    font-size: 20px;
    border-radius: 5px;
    padding: 9px;
    &::placeholder{
        color: var(--color-gray);
    }
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
    margin-bottom: 25px;
`

const Title = styled.h6`
    color: #52B6FF;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    font-family: var(--font-body);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`