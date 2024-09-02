import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import fundo from "../Images/fundo.jpg"
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Navigate } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    };

    body{
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fundo});
        background-size: cover;
        background-position: center;
    }
    `

const Container = styled.div`
    background-color: rgba(0,0,0,0.8);
    width: 450px;
    height:550px;
    padding: 48px 68px;
    align-items: center;
    align-content: center;
    margin: auto;
    border-radius: 5px;
    margin-bottom: 20px;
    
    #entrar{
        background-color: red;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
        margin-top: 0;
    }

    #final{
        font-size: 12px;
    }
    `

const Tittle = styled.h1`
    color: white;
    height: 42px;
    margin-bottom: 10px;
    `

const Input = styled.input`
    width: 100%;
    height: 56px;
    border-radius: 5px;
    border: solid 1px gray;
    background-color: transparent;
    color: white;
    margin-bottom: 15px;
    padding: 10px;
    
    `

const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: rgba(40,40,40,0.9);
    border-radius: 5px;
    border: none;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 15px;
    `

const H4 = styled.h4`
    color: white;
    align-items: center;
    text-align: center;
    margin-bottom: 15px;

    `

const Label = styled.label`
    color: white;
    margin-left: 10px;
    text-align: center;
    align-items: center;
    `

const Text = styled.p`
    color: #7e7b7b;
    margin-top: 15px;
    `

const InputCheckbox = styled.input`
    height: 20px;
    width: 20px;
    text-align: center;
    align-items: center;
    `

const user = {
    user:'admin',
    password:'admin'
  }


const Login = ({setIsLoggedIn}) => {


    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState('')
    const [isLoggedIn, setLogin] = useState(false)



    function logIn(){
        if((senha === user.password && usuario === user.user)){
            setLogin(true);
            setIsLoggedIn(true);
        }
        else{
             alert("Usuario ou senha incorretos");
            }
    }

    if (isLoggedIn){
        return <Navigate to="/"/>;
    }


    return(
        <>
        <GlobalStyle/>
        <Header/>
        <Container>
        <Tittle>Entrar</Tittle>
        <Input placeholder="E-mail ou número de celular" type="text" onChange={(event) => setUsuario(event.target.value)}/>
        <Input placeholder="Senha" type="password" onChange={(event) => setSenha(event.target.value)}/>
        <Button id="entrar" onClick={logIn}>Entrar</Button>
        <H4>OU</H4>
        <Button>Usar um código de acesso</Button>
        <H4><a href="#">Esqueceu a senha?</a></H4>
        <InputCheckbox type="checkbox"></InputCheckbox>
        <Label id="label">Lembre-se de mim</Label>
        <Text>Novo por aqui? <a href="#">Assine agora!</a></Text>
        <Text id="final">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais</a></Text>
    </Container>
    <Footer/>
    </>
    )
}

export default Login