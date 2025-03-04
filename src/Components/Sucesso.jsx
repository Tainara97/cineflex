import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";


export default function Sucesso() {
    const { state } = useLocation(); 
    const { tituloFilme, dataSessao, horarioSessao, assentoSessao, nomeComprador, cpfComprador } = state || {};
    
    return (
        <Container>
            <h1>Pedido finalizado!</h1>
            <EstiloPedido>
                <div className="informaçoesFilme">
                    <h1>Filme e sessão</h1>
                    <div className="borda"></div>
                    <p className="nomeFilme">{tituloFilme}</p>
                    <p className="data-horario">{dataSessao}, {horarioSessao}</p>
                   
                </div>
                <div className="informaçoesIngressos">
                    <h1>Ingressos</h1>
                    <div className="borda"></div>
                    <p className="assentos"> {assentoSessao.map((numero, index) => (
                            <span key={index} className="assento">Assento: {numero}<br/></span>
                        ))}
                    </p>              
                </div>
                <div className="informaçoesComprador">
                    <h1>Comprador(a)</h1>
                    <div className="borda"></div>
                    <p className="nomeComprador">{nomeComprador}</p>
                    <p className="cpfComprador">{cpfComprador}</p>
                </div>
                <SaveButton type="submit" to="/" >Voltar para a tela inicial</SaveButton>
            </EstiloPedido>
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
        color: #9DB899;
    }
    
`
const EstiloPedido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    width: 90%;
    height: 70%;
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #2B2D36;
    margin-top: 20px;
   
    h1 {
        font-family: "Sarala", sans-serif;
        font-size: 22px;
        color: #EE897F;
    }
    p{
        font-family: "Sarala", sans-serif;
        font-size: 20px;
        color: #FFFFFF;
    }
    .informaçoesFilme {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: 10px;
        gap: 10px;
        box-sizing: border-box;
    }
    .informaçoesFilme, .informaçoesIngressos, .informaçoesComprador {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 10px;
        gap: 10px;
        box-sizing: border-box;
    }
    .informaçoesIngressos p {
        display: block; 
    }

    .borda {
        width: 90%;
        border: 1px solid #4E5A65;;
    }
    .assentos {
        display: block; 
    }
    .assento {
        display: block; 
        margin-bottom: 10px; 
    }
`
const SaveButton = styled(Link)`
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
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;




