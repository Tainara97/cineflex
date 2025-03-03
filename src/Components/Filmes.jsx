import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Filmes() {
    const [filmes, setFilmes] = useState(null);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        promise.then((response) => setFilmes(response.data));

        promise.catch((error) => console.log(error.response.data));
    }, []);

    if (filmes === null) {
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
            <h1>Em Cartaz</h1>
            <EstiloFilmes>
                {filmes.map(filme => (
                    <Filme key={filme.id} to={`/sessoes/${filme.id}`}>
                        <img src={filme.posterURL} />
                    </Filme>
                ))}
            </EstiloFilmes>
        </Container>
    )
}

const Container = styled.div`
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

const EstiloFilmes = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 20px;
    box-sizing: border-box;
  `

const Filme = styled(Link)`
     width: 45%;
     display: flex;
     justify-content: center;
     padding: 10px;
     box-sizing: border-box;
     img {
        width: 100%;
        height: auto;
        border-radius: 8px;
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