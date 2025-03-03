import logo from "../assets/logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  
    return (
      <Logo to="/" >
        <img src={logo} alt="logo"/>
        <h1>Cineflex</h1>
      </Logo>
    )
  }

  const Logo = styled(Link) `
    width: 100%;
    height: 67px;
    background-color: #EE897F;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    text-decoration: none;
    img {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        margin-bottom: 5px;
        
    }
    h1 {
        font-family: "Raleway", serif;
        font-size: 34px;
        color: #FADBC5;
        font-weight: bold;
      
        
    }
  `
  