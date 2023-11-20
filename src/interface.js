import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    max-width: 1100px;
`
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    & :first-child{
        display: flex;
    }
`
const TitleNav = styled.h3`
    margin: 1rem auto;
`
const NavList = styled.ul`
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
const SelectDrop = styled.select`
    border:none;
    cursor: pointer;
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
    & :hover {
        background-color: black;
        border-color: white;
        color: #fff;
    }
`
const ButtonCartText = styled.span`
    margin-left: 0.5rem;
`
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
const SecondSection = styled.div`
    display: flex;
    margin: 5rem auto;
    max-width: 1000px;
    flex-wrap: wrap;
    justify-content: center;
`
const Card = styled.div`
    margin: 0.5rem;
    border: 1px solid #ccc ;
    border-radius: 4px;
`
const CardImgTop = styled.div`
    & img {width: 14rem;}
`
const Badge = styled.span`
    position: absolute;
    // border: 1px solid black;
    color: white;
    border-radius: 4px;
    margin-top: 0.2rem;
    padding: 1px 10px;
    background-color: #212529;
    margin-left:-3.3rem;
`
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto; 
    & p {
        margin: 0;
    }
`
const InitPrice = styled.p`
    color: grey;
    text-decoration: line-through;
    display: inline;
`
const CardTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`
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
const products = [
    {image:"fancyprod.png",title:"Fancy Product",init_price:null,promo_price:80.00,isSale:false},
    {image:"specialitem.png",title:"Special Item",init_price:20.00,promo_price:18.00,isSale:true},
    {image:"saleitem.png",title:"Sale Item",init_price:50.00,promo_price:25.00,isSale:true},
    {image:"popularitem.png",title:"Popular Item",init_price:null,promo_price:40.00,isSale:false}
]

export default function StyledInterface(){
    return (
        <div>
            <Container>
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
                                    <SelectDrop name="Shop" id="">
                                        <option value="">Shop</option>
                                        <option value="1">Option1</option>
                                        <option value="2">Option2</option>
                                        <option value="3">Option3</option>
                                    </SelectDrop>
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
            </Container>   
            <FirstSection>
                <FirstSectionH1>Shop in style</FirstSectionH1>
                <FirstSectionP>with this shop homepage template</FirstSectionP>
            </FirstSection>
            <SecondSection>
                {
                    products.map((product,index )=>{
                        const imgSrc = `images/${product.image}`
                        return (
                            <Card key={index}>
                                <CardImgTop>
                                    <img src={imgSrc} alt="image" />
                                    {product.isSale?<Badge>Sale</Badge>:<span></span>}
                                </CardImgTop>
                                <CardBody>
                                    <CardTitle>{product.title}</CardTitle>
                                    <div>
                                        {product.init_price === null ?<span></span>:<InitPrice>${product.init_price}</InitPrice>} <span>${product.promo_price}</span>
                                    </div>
                                </CardBody>
                                <ButtonCart>Add to cart</ButtonCart>
                            </Card>
                        )
                    })
                }
            </SecondSection>
            <Footer>
                Copyright &copy; Your Website 2022
            </Footer>
        </div>
        
    )
}