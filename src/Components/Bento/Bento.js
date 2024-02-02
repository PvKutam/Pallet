import React from "react";
import "./Bento.css"
import { Main } from "../Toolbar/Colors/Main";
function  Bento (){
    const {
    transparentAcce2,transparentBgclrr2,transparentSec2 ,transparentprim2,Textclr } = Main();
    return(
<div className="Bento-Main" >
    <h1>How Does it Work?</h1>
        <ul className="Bento-Wrapper">
            <li className="Bento1" style={{backgroundColor:`${transparentBgclrr2}` , color:`${Textclr}`}}>Start with  neutral colors for the text</li>
            <li className="Bento2" style={{backgroundColor:`${transparentprim2}` , color:`${Textclr}`}}>Accent appears in images,
            hyperlinks, boxes, cards, etc.</li>
            <li className="Bento3" style={{backgroundColor:`${transparentSec2}` , color:`${Textclr}`}}> Primary is for main CTAs and sections, 
            ,Secondary is for less important buttons and info cards.</li>
            <li className="Bento4" style={{backgroundColor:`${transparentAcce2}` , color:`${Textclr}`}}>Happy with the results Copy colors</li>
        </ul>


</div>
    )

}
export default Bento;

