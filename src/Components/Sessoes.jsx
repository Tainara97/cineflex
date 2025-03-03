import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Filmes() {
    const [sessoes, setSessoes] = useState(null);
    const { idFilme } = useParams()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(response => setSessoes(response.data.days))
            .catch (error => console.log(error.response.data))
}, []);

if (sessoes === null) {
    return (
        <Container>
            <Carregando>
                <img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" />
            </Carregando>
        </Container>
    )
}

return (
    <Container>
        <h1>Selecione o horário</h1>
        <EstiloSessoes>
            {sessoes.map(sessao => (
                <Sessao key={sessao.id}>
                    <p className="data">{sessao.weekday} {sessao.date}</p>
                    <div className="horario">
                        {sessao.showtimes.map(horario => (
                            <p key={horario.id}>{horario.name}</p>  
                        ))}
                     </div>
                </Sessao>
            ))}
        </EstiloSessoes>
    </Container>
)
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color:#212226; 
    align-items: center;
    justify-content: center;
    margin-top: 67px;
    h1 {
        font-family: "Sarala", sans-serif;
        font-size: 24px;
        color: white;
        margin-top: 30px;
    }
`
const EstiloSessoes = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    
`
const Sessao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #2B2D36;
    width: 80%;
    height: auto;
    box-sizing: border-box;

    .data {
        font-family: "Sarala", sans-serif;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
        border-bottom: 2px solid #4E5A65;
        width: 80%;
        margin-top: 10px ;
        padding: 10px;

    }
    .horario {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        font-family: "Sarala", sans-serif;
        font-size: 16px;
        color: #EE897F;
        margin-bottom: 10px;
        padding: 10px;
    }

    .horario p {
        border: 2px solid #EE897F;
        padding: 5px 20px;
    }

`

const Carregando = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20%;
    }
   
`

