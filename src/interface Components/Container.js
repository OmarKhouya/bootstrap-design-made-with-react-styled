import React from "react";
import styled from "styled-components";
import Navbarr from "./Navbar";

const Container = styled.div`
    margin: auto;
    max-width: 1100px;
`

export default function Containerr(){
    return(
        <Container>
            <Navbarr />
        </Container>
    )
}