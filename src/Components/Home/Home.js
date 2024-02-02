import React, { useEffect,useState } from "react"
import "./Home.css"
import {Main} from "../Toolbar/Colors/Main"

export function Home(){
    const {Textclr, Bgclr, prim, Sec, Acce,HeadingValue,BodyValue}= Main()
    const [el,setEl]= useState(null)
    const [start,setStart] = useState(null)
useEffect(()=>{
    let element = document.querySelector(".Bento-Main");  
    let st= document.querySelector(".Toolbar");
    setStart(st);
    setEl(element);

    return()=>{
        setEl(null)
        setStart(null)
    }
})
function scroll() {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'end' }); 
    }
  }
  function jump() {
    if (start) {    
            start.style.transition = 'transform 0.3s ease-in-out';

      const transitionEndHandler = () => {
        start.style.transform = '';
      };
  
      start.addEventListener('transitionend', transitionEndHandler, { once: true });
  
      start.style.transform = 'translateY(-10px)';
  
      const timeoutId = setTimeout(() => {
        start.style.transform = '';
      }, 500);
  
      return () => {
        clearTimeout(timeoutId);
        start.removeEventListener('transitionend', transitionEndHandler);
      };
    }
  }
  
    return(
        <div className="Home-Main">
            <div className="Hero-text" >
                <h1 style={{ color: Textclr, fontFamily: `${HeadingValue}`}}>Visualize Your 
                    <br/>
                    Colors
                    & 
                    <span className="Font-effect">Fonts</span>
                    <br/>
                    On a Real Site
                </h1 >
                <p style={{ color: Textclr,fontFamily: BodyValue}}>Choosing colors or typography for your website?
    <br />
    Use the Toolbar below to realize your choices.
</p>

                <div className="Hero-cta" >
                    <a className="btn-1" onClick={jump} style={{ color: Textclr, backgroundColor: Acce}} >Get Started</a>
                    <a className="btn-2" onClick={scroll} style={{
                    color: Textclr,
                    backgroundColor: Sec,
                    // ':hover': {
                    //   boxShadow: `0px 15px 20px ${Textclr}` ,
                    //   transform: `${-7}px`
                    //             }
                            }}>how does it work </a>
                </div>
            </div>
            <div className="Hero-img">

                <svg xmlns="http://www.w3.org/2000/svg" width="652"
                height="644" viewBox="0 0 652 644" fill="none" className="mondrian">
                    <rect opacity="0.02" x= "1" width= "163"   height= "60" rx= "10" fill={Bgclr}></rect>
                    <rect x="173" width="242" height= "60" rx= "10" fill= {prim} ></rect>
                    <rect x="424" width= "193" height="60" rx= "10" fill= {Sec}></rect>
                    <rect x ="1" y= "68" width= "70" height= "157" rx= '10' fill={Bgclr}></rect>
                    <rect x="80" y= "68" width= "335" height= "324" rx= "10" fill={Sec}> </rect>
                    <rect x= "424"  y= "68" width= "193" height ="175" rx ="10" fill= {Textclr}>  </rect>
                    <rect x= "424"y= "252"width= "91"height= "140"rx= "10"fill= {prim}> </rect>
                    <rect x= "524" y= "252"width= "93"height= "140"rx= "10"fill= {Bgclr}> </rect>
                    <rect opacity= "0.05" x= "1" y="234" width= "70" height= "259" rx= "10" fill= {Bgclr}> </rect>
                    <rect x= "80" y= "401"width= "166"height= "169"rx= "10"fill= {prim}> </rect>
                    <rect  opacity= "0.05" x= "255" y= "400"width= "160"height= "80"rx= "10"fill= {Textclr}> </rect>
                    <rect  opacity= "0.05"x= "255" y= "490"width= "160"height= "80"rx= "10"fill= {Acce}> </rect>
                    <rect  opacity= "0.2" x= "424" y= "401"width= "193"height= "79"rx= "10"fill= {prim}> </rect>
                    <rect x= "424" y= "490"width= "193"height= "129"rx= "10"fill= {Bgclr}> </rect>
                    <rect x= "255" y= "579"width= "160"height= "40"rx= "10"fill= {Sec}> </rect>
                    <rect x= "80" y= "579"width= "166"height= "65"rx= "10"fill= {prim}> </rect>
                    <rect x= "255" y= "625"width= "362"height= "18"rx= "9"fill= {Sec}> </rect>
                    <rect x= "1" y= "502"width= "70"height= "142"rx= "10"fill= {Textclr}> </rect>

                </svg>
            </div>

        </div>
    )
}
