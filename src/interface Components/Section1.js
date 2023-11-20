import React from "react";
import styled from "styled-components";

const FirstSection = styled.div`
    height: 21rem;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`
const FirstSectionH1= styled.h1`
    font-size: 4rem;
    font-weight: bold;
`
const FirstSectionP = styled.p`
    color:grey!important;
`

export default function FirstSectionn(){
    return(
        <FirstSection>
            <FirstSectionH1>Shop in style</FirstSectionH1>
            <FirstSectionP>with this shop homepage template</FirstSectionP>
        </FirstSection>
    )
}