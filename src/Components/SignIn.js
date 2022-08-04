import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function SignIn(){
    const {email, setEmail, password, setPassword, name, setName, image, setImage} = useContext(UserContext);
    
    const navigate = useNavigate();
    let signData = {
        email,
        password,
        name,
        image  
      }

    function handleForm(e){
        console.log(signData);
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', signData);
        promise.then(res =>{
            navigate('/');
            setEmail('');
            setPassword('');
            setName('');
            setImage('');
        })
        promise.catch(res =>{
            alert('Faça o cadastro novamente')
        })
    };

    return (
        <Container>
            <Image src={logo} />
            <Form onSubmit={handleForm}>
                <Input placeholder='email' type='email' name='email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Input placeholder='senha' type='password' name='password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Input placeholder='nome' type='text' name='name' required onChange={(e) => setName(e.target.value)} value={name}/>
                <Input placeholder='foto' type='url' required onChange={(e) => setImage(e.target.value)} value={image}/>

                <Button>Cadastrar</Button>
            </Form>
            <Link to='/'>
                <Title>Já tem uma conta? Faça login!</Title>
            </Link>
    </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 100vh;
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