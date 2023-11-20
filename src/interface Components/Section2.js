import React from "react";
import styled from "styled-components";

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
    padding: 3px 10px;
    background-color: #212529;
    margin-left:-3.7rem;
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
export default function SecondSectionn({products}){
    return(
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
    )
}