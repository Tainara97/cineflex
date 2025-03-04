import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Assentos() {
    const [assentos, setAssentos] = useState(null);
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const { idSessao } = useParams()
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(response => setAssentos(response.data.seats))
            .catch(error => console.log(error.response.data))
    }, []);

    const selecionarAssento = assento => {
        if (assento.isAvailable) {
            setAssentosSelecionados (
                assentosSelecionados.includes(assento.id) 
                ? assentosSelecionados.filter(id => id !== assento.id)
                : [...assentosSelecionados, assento.id] 
            );
        } else {
            alert("Este assento não está disponível!");
        }
    };

    if (assentos === null) {
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
            <h1>Selecione o(s) assento(s)</h1>
            <EstiloAssentos>
                {assentos.map(assento => (
                    <Assento
                        key={assento.id}
                        onClick={() => selecionarAssento(assento)}
                        style={{
                            backgroundColor: assento.isAvailable
                                ? assentosSelecionados.includes(assento.id)
                                    ? '#FADBC5'
                                    : '#9DB899'
                                : '#2B2D36',
                            cursor: assento.isAvailable ? 'pointer' : '',
                            border: assentosSelecionados.includes(assento.id)
                                ? '2px solid #EE897F'
                                : 'none',
                        }}
                    >
                        <p className="numeroAssento">{assento.name}</p>
                    </Assento>
                ))}
            </EstiloAssentos>
            <ContainerInputs>
                <form>
                    <InputGroup>
                        <Title htmlFor="nome">
                            Nome do comprador(a)
                        </Title>
                        <input
                            id="nome"
                            type="text"
                            value={nomeComprador}
                            onChange={e => setNomeComprador(e.target.value)}
                            placeholder="Digite seu nome..."
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Title htmlFor="cpf">CPF do comprador(a)</Title>
                        <input
                            id="cpf"
                            type="text"
                            value={cpfComprador}
                            onChange={e => setCpfComprador(e.target.value)}
                            placeholder="Digite seu CPF..."
                            required
                        />
                    </InputGroup>
                    <SaveButton type="submit">Reservar assento(s)</SaveButton>
                </form>
            </ContainerInputs>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#212226; 
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: 30px;
    h1 {
        font-family: "Sarala", sans-serif;
        font-size: 24px;
        color: white;
    }
`
const EstiloAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 80%;
    gap: 10px;
    border-bottom: 2px solid #4E5A65;
    padding: 20px;
    box-sizing: border-box;
`
const Assento = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    box-sizing: border-box;
    border-radius: 12px;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    color: #2B2D36;
`
const ContainerInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        width: 80%;
        
    }
    
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 8px;
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ffffff;
        border-radius: 8px;
        box-sizing: border-box;
    }
    input::placeholder {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-style: italic;
        color:#AFAFAF;
    }
`

const Title = styled.label`
    font-family: "Sarala", sans-serif;
    font-size: 16px;
    color: white;
    margin-top: 30px;
`

const SaveButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: #EE897F;
    font-family: "Sarala", sans-serif;
    font-size: 18px;
    color: #2B2D36;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
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




