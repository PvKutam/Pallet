import "./Colors.css"
import React from "react"
import { useState } from "react"
import { ChromePicker } from 'react-color';
import { useDispatch} from "react-redux";
import {Main} from "./Main"
import "../Toolbar.css"

import { setTextColor,setBackgroundColor,setPrimaryColor,setSecondaryColor,setAccentColor } from "../../Redux/Red";
    
    export const Colors=()=>{

    const [Vert,setVert] =useState(false);
    const [Textchang,setTextchang] = useState(false); 
    const [Bgchang,setBgchng] =useState(false);
    const [Primarychang,setPrimartchang] = useState(false);
    const [Secondarychang,setSecondarychang]= useState(false);
    const [Accent,setAccent]= useState(false);
    const { Textclr, Bgclr, prim, Sec, Acce } = Main();
        
    const dispatch= useDispatch();

       
    const ColorHandelChange =(newColor,colorType)=>{
        switch(colorType){
            case 'text':
        dispatch(setTextColor(newColor.hex));
        break;
      case 'background':
        dispatch(setBackgroundColor(newColor.hex));
        break;
      case 'primary':
        dispatch(setPrimaryColor(newColor.hex));
        break;
      case 'secondary':
        dispatch(setSecondaryColor(newColor.hex));
        break;
      case 'accent':
        dispatch(setAccentColor(newColor.hex));
        break;
      default:

        }
    }
    
    const tooglevertical =()=>{
        setVert(!Vert)
    }
    const togglePicker = () => {
        setTextchang(!Textchang);
    }; 
    const ToogleSecondary=()=>{
        setSecondarychang(!Secondarychang)
    }
   const TooglePrimary=()=>{
        setPrimartchang(!Primarychang)
    }
    const ToogleBackground=()=>{
        setBgchng(!Bgchang)
    }
    const ToogleAccent=()=>{
        setAccent(!Accent)
    }

    
return(
    <div className="Main-option">
    <div  className ="options" onClick={tooglevertical }
    style={{gap: "2px"}}>
        Color
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" className="Plus">
                    <path d="M 0 6.5 H 13" stroke="black" stroke-width="1.2"></path>
                    <path d="M 6.5 0 L 6.5 13" stroke="black" stroke-width="1.2"></path></svg>
    </div>

    {Vert && 
    <>
    <div  className="options ch" onClick={togglePicker} style={{backgroundColor: Textclr ,color:"black"}}>
        Text
             {Textchang && (<div className="ChromePicker Bg"> <ChromePicker
                    color={Textclr}
                    onChange={(newColor)=>  ColorHandelChange(newColor, 'text')}
                    onClose={togglePicker}/>
                    </div>
            )}
    </div>
    
   
    <div  className="options ch" onClick={TooglePrimary} style={{ backgroundColor: prim }}> 
        Primary 
        { Primarychang && (<div  className="ChromePicker Prim">
        <ChromePicker 
        color={prim}
        onChange={(newColor)=>  ColorHandelChange(newColor, 'primary')}
        onClose={TooglePrimary} />
        </div>)}
    </div>
    <div  className="options ch" onClick={ToogleSecondary} style={{ backgroundColor: Sec }}>
        Secondary
        { Secondarychang && (<div  className="ChromePicker Sec" >
        <ChromePicker 
        color={Sec}
        onChange={(newColor) => ColorHandelChange(newColor, 'secondary')}
        onClose={ToogleSecondary} />
        </div>)}
    </div>
    <div  className="options ch" onClick={ToogleBackground} style={{ backgroundColor: Bgclr }}>
    Tertiary 
        { Bgchang && (<div  className="ChromePicker Bg" >
        <ChromePicker 
        color={Bgclr}
        onChange={(newColor)=>  ColorHandelChange(newColor, 'background')}
        onClose={ToogleBackground} />
        </div>)}
    </div>
    <div  className="options ch" onClick={ToogleAccent} style={{ backgroundColor: Acce }}>
        Accent
        { Accent && (<div  className="ChromePicker Acce" >
        <ChromePicker 
        color={Acce}
        onChange={(newColor) => ColorHandelChange(newColor, 'accent')}
        onClose={ToogleAccent} />
        </div>)}
    </div>
    </>
    }
    </div>
)   
}
