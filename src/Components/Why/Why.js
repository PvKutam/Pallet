import "./Why.css";
import React  from "react";
import { Main } from "../Toolbar/Colors/Main";

const Why = () => {
    const { transparentprim1 ,transparentprim2,prim ,Sec ,Textclr} = Main();
    return(
        <div className="Main-column"   >
            <h1 className="Column-title">Why use pallet</h1>
            <div  className="Sub-column" >
                <div className="Column-card" style={{ backgroundColor :`${prim}`}} >
                <svg width="117" height="117" xmlns="http://www.w3.org/2000/svg" className="Card-img"  >
        <circle cx="58.5"
    cy="58.5"
    r="58.5" fill={`${transparentprim2}`}  stroke= {`${Textclr}`} />
    <path    fillRule= "evenodd"   
    clipRule= "evenodd"
    d ="M 87.8217 7.86778 C 88.7499 8.40648 89.0469 9.59549 88.5152 10.5277 L 58.9095 62.429 C 58.4148 63.2962 57.3564 63.6658 56.4294 63.295 L 4.14483 42.3812 C 3.18375 41.9968 2.67153 40.9403 2.99938 39.9584 C 10.7533 16.7379 32.672 0 58.5 0 C 69.185 0 79.2009 2.86463 87.8217 7.86778 Z"
    fill={`${Textclr}`}   strokeWidth="4"fillOpacity= "0.6">   
    </path>
    <path d="M 81.5 22.5 L 57.1395 64.8489 L 32 53.5" strokeWidth="8" strokeLinejoin="round"stroke={`${Textclr}`} fill="none"></path>
      </svg>

                    <h2 className="Card-title" style={{ backgroundColor :`${prim}` ,color :`${Textclr}`}}>Save time</h2>
                    

                    <p className="Card-p" style={{ backgroundColor :`${prim}`, color :`${Textclr}`}}>No need to spend hours implementing different variations of colors. Decide right away!</p>
                </div>
                <div className="Column-card" style={{ backgroundColor :`${prim}`}}>

                <svg width="112" height="114"  xmlns="http://www.w3.org/2000/svg"className="Card-img"  style={{ backgroundColor :`${prim}`}}>
        <rect width= "58" height= '58' rx="5" fill={`${Textclr}`} ></rect>
        <rect x= "69" y= '25' width="33" height ="33" rx="5" fill={`${Textclr}`} fillOpacity="0.6"></rect>
        <rect x= "69" y= '71'  height="43" width="43" rx="5" fill={`${Textclr}`} fillOpacity="0.1"></rect>
        <rect x= "20" y= '70'  height="39" width= "38" rx="5" fill={`${Textclr}`} ></rect>
      </svg>
                <h2 className="Card-title" style={{ backgroundColor :`${prim}` ,color :`${Textclr}`}}>It's Realistic</h2>

                <p className="Card-p" style={{ backgroundColor :`${prim}` ,color :`${Textclr}`}}>Color Palettes make it hard to pick. This tool distributes the colors on a real website.</p>

                </div>
                <div className="Column-card" style={{ backgroundColor :`${prim}`}}>
                <svg width="178" height="89" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178 89" fill="none" className="Card-img" style={{ backgroundColor :`${prim}`}}>
    <rect y="26" height="63" width="154" rx="5"  fillOpacity="0.6" fill={`${Textclr}`}></rect>
    <path d="M62 57 L73.5 68 L94.5 47" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"  ></path>
</svg>

                <h2 className="Card-title" style={{ backgroundColor :`${prim}` ,color :`${Textclr}`}}>It's simple</h2>

                <p className="Card-p" style={{ backgroundColor :`${prim}` ,color :`${Textclr}`}}>Push a few buttons, and there you have it! Your very own branding colors, ready to export.</p>

                </div>
            </div>

        </div>
    )

}
export default Why;