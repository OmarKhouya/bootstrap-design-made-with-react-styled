import React from "react";
import Containerr from "./interface Components/Container";
import FirstSectionn from "./interface Components/Section1";
import SecondSectionn from "./interface Components/Section2";
import Footerr from "./interface Components/Footer";
const products = [
    {image:"fancyprod.png",title:"Fancy Product",init_price:null,promo_price:80.00,isSale:false},
    {image:"specialitem.png",title:"Special Item",init_price:20.00,promo_price:18.00,isSale:true},
    {image:"saleitem.png",title:"Sale Item",init_price:50.00,promo_price:25.00,isSale:true},
    {image:"popularitem.png",title:"Popular Item",init_price:null,promo_price:40.00,isSale:false}
]
export default function StyledInterfaceSplitted(){
    return(
        <div className="m-0">
            <Containerr />
            <FirstSectionn />
            <SecondSectionn products={products} />
            <Footerr />
        </div>
    )
}