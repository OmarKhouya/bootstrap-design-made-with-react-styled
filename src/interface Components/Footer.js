import React from "react";
import styled from "styled-components";

const Footer = styled.div`
    padding-top: 1rem;
    height: 7rem; 
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`
export default function Footerr(){
    return(
        <Footer>
            Copyright &copy; Your Website 2022
        </Footer>
    );
}