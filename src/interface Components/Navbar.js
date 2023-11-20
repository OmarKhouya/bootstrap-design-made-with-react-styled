import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    & :first-child{
        display: flex;
    }
`
const TitleNav = styled.h3`
    padding-left: 2rem;
    margin: auto;
`
const NavList = styled.ul`
    padding-left: 0.3rem;
    margin: 1rem auto;
    list-style : none;
    display: flex;
    & > * {
        margin: auto 0.3rem;
        & > * {
            color: black;
            text-decoration: none;    
        }
        & > *:hover {
            color: black;
            text-decoration: none;    
        }
    }
    & > :nth-child(1) {
        font-weight: 400;
    }
    & > :nth-child(1) > :hover{
        color: black;
    }
    & > :nth-child(2) > * {
        color: grey;
    }
    & > :nth-child(3) > * {
        color: grey;
    }
`
const ButtonCart = styled.button`
    display: block;
    padding: 5px 20px;
    margin: 1rem auto;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    color: #333;
    text-align: center;
    text-decoration: none;
    cursor: pointer;  
    &:hover {
        background-color: black;
        border-color: white;
        color: #fff;
    }
`
const ButtonCartText = styled.span`     
    margin: auto;
    padding-left: 0.5rem; 
`

export default function Navbarr(){
    return(
        <Navbar>
            <div>
                <TitleNav>Start bootstrap</TitleNav>
                <NavList>
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Shop
                        </a>
                    </li>
                </NavList>
            </div>
            <div>
                <ButtonCart>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>     
                    <ButtonCartText>
                        Cart
                    </ButtonCartText>
                </ButtonCart>
            </div>
        </Navbar> 
    );
}
