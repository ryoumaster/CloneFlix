import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer`
    background-color: rgba(0,0,0,1);
    margin: 0;
    padding: 0;
    color: gray;
    `

const Text = styled.h3`
    padding-left: 20px;
    padding-top: 50px;
    margin-left: 80px;
    color: gray;
    `

const Container1 = styled.div`
    display: flex;
    padding: 20px;
    color: gray;
    `

const Ul = styled.ul`
    padding: 0px 20px;
    margin: 0px 80px;
    color: gray;
    `

const Li = styled.li`
    padding: 4px;
    list-style-type: none;
    color: gray;
    margin-bottom: 10px;
    `

const Footer = () => {

    return(
        <ContainerFooter>
            <Text>Dúvidas? Ligue 0800 591 2867</Text>
            <Container1>
                <Ul>
                    <Li><a href="#">Perguntas frequentes</a></Li>
                    <Li><a href="#">Preferências de cookies</a></Li>
                </Ul>
                <Ul>
                    <Li><a href="#">Central de Ajuda</a></Li>
                    <Li><a href="#">Informações corporativas</a></Li>
                </Ul>
                <Ul>
                    <Li><a href="#">Termos de uso</a></Li>
                </Ul>
                <Ul>
                    <Li><a href="#">Privacidade</a></Li>
                </Ul>
            </Container1>
        </ContainerFooter>
    )
}

export default Footer