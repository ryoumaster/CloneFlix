import React from "react";
import Tittle from "../Images/Tittle.png";
import styled from "styled-components";
import capaSt from "../Images/capaSt.jpg"
import play from "../Images/play.png"
import add from "../Images/adicionar.png"
import HeaderHome from "./HeaderHome";


const Div = styled.div`

    background: linear-gradient(
        rgba(0, 0, 0, 0.5), /* Cor preta com 50% de opacidade */
        rgba(0, 0, 0, 0.5)
    ),url(${capaSt});
    height: 700px;
    background-size: cover;
    background-position: center;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    


    .tittle{
        margin-top: 20px;
        width: 500px;
        height: 300px;
        padding: 20px;
    }

    .text{
        color: white;
        width: 400px;
        padding: 20px;
        font-size: 20px;
    }
`

const DivBtn = styled.div`
    display: flex;
    gap: 1rem;

    .play{
        color: black;
        margin-left: 20px;
        height: 40px;
        width: 100px;
        background-color: white;
        border: 1px solid gray;
        border-radius: 5px;
        text-align: center;
        justify-content: center;
    }

    .play_img{
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }

    .myList{
        color: white;
        margin-left: 20px;
        height: 40px;
        width: 150px;
        background-color: rgba(125, 124, 124, 0.8);
        border: 1px solid gray;
        border-radius: 5px;
        text-align: center;
        justify-content: center;
    }
`
function Show(){


    return(
        <>
            <Div>
            <HeaderHome/>
                <img src={Tittle} className="tittle" />
                <h4 className="text">Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.</h4>
                <DivBtn>
                    <button className="play"><img className="play_img"src={play}/>Play</button>
                    <button className="myList">MyList</button>
                </DivBtn>
            </Div>
        </>
    )
}

export default Show;