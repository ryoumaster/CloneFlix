import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png"


const Headerdiv = styled.header`
    
    img{
        height: 40px;
        width: 200px;
    }

    `

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
    margin: 0px 100px;
    `

const Logo = styled.p`

    `
const Header = () => {

    return(
        <>
        <Headerdiv>
            <Container>
                <Logo><a href="#"><img src={logo}/></a></Logo>
            </Container>
        </Headerdiv>
        </>
    )
}

export default Header