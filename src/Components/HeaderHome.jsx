import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import { CiSearch } from "react-icons/ci";


const Headerdiv = styled.header`
    
    img{
        height: 25px;
        width: 150px;
    }

    `

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    padding: 10px;
    padding-bottom: 0;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    `

const Logo = styled.p`

    `
const Ul = styled.ul`
    color: white;
    display: flex;
    gap: 1rem;
    text-decoration: none;
    list-style-type: none;
`

const Li = styled.li`

`
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DivIcon = styled.div`
    justify-content: end;
    align-items: end;
    margin-left: auto;
`
function HeaderHome(){


    return(
        <>
        <Headerdiv>
            <Container>
                <Logo><a href="#"><img src={logo}/></a></Logo>
                <Div>
                <Ul>
                    <Li>Tv Shows</Li>
                    <Li>Movies</Li>
                    <Li>Recently Added</Li>
                    <Li>My List</Li>
                </Ul>
                </Div>
                <DivIcon>
                <CiSearch color="white" size={30}/>
                </DivIcon>
            </Container>
        </Headerdiv>
        </>
    )
}

export default HeaderHome;