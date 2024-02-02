import { useSelector } from "react-redux";
import {selectHeadingFont,selectBodyFont} from "../../Redux/Size"

 export function  Main(){
    const Textclr = useSelector(state => state.color.textColor);
        const  Bgclr =  useSelector(state => state.color.backgroundColor);
        const  prim  =   useSelector(state => state.color.primaryColor);
        const Sec =     useSelector(state => state.color.secondaryColor);
        const Acce=      useSelector(state => state.color.accentColor);
        const HeadingValue = useSelector(selectHeadingFont);
        const BodyValue = useSelector(selectBodyFont);
        



        const transparentTextClr1 = `rgba(${parseInt(Textclr.slice(1, 3), 16)}, ${parseInt(Textclr.slice(3, 5), 16)}, ${parseInt(Textclr.slice(5, 7), 16)}, 0.3)`;
        const transparentTextClr2 = `rgba(${parseInt(Textclr.slice(1, 3), 16)}, ${parseInt(Textclr.slice(3, 5), 16)}, ${parseInt(Textclr.slice(5, 7), 16)}, 0.7)`;

        const transparentBgclrr1 = `rgba(${parseInt(Bgclr.slice(1, 3), 16)}, ${parseInt(Bgclr.slice(3, 5), 16)}, ${parseInt(Bgclr.slice(5, 7), 16)}, 0.3)`;
        const transparentBgclrr2 = `rgba(${parseInt(Bgclr.slice(1, 3), 16)}, ${parseInt(Bgclr.slice(3, 5), 16)}, ${parseInt(Bgclr.slice(5, 7), 16)}, 0.7)`;

        const transparentprim1 = `rgba(${parseInt(prim.slice(1, 3), 16)}, ${parseInt(prim.slice(3, 5), 16)}, ${parseInt(prim.slice(5, 7), 16)}, 0.01)`;
        const transparentprim2 = `rgba(${parseInt(prim.slice(1, 3), 16)}, ${parseInt(prim.slice(3, 5), 16)}, ${parseInt(prim.slice(5, 7), 16)}, 0.7)`;

        const transparentSec1 = `rgba(${parseInt(Sec.slice(1, 3), 16)}, ${parseInt(Sec.slice(3, 5), 16)}, ${parseInt(Sec.slice(5, 7), 16)}, 0.3)`;
        const transparentSec2 = `rgba(${parseInt(Sec.slice(1, 3), 16)}, ${parseInt(Sec.slice(3, 5), 16)}, ${parseInt(Sec.slice(5, 7), 16)}, 0.7)`;


        const transparentAcce1 = `rgba(${parseInt(Acce.slice(1, 3), 16)}, ${parseInt(Acce.slice(3, 5), 16)}, ${parseInt(Acce.slice(5, 7), 16)}, 0.3)`;
        const transparentAcce2= `rgba(${parseInt(Acce.slice(1, 3), 16)}, ${parseInt(Acce.slice(3, 5), 16)}, ${parseInt(Acce.slice(5, 7), 16)}, 0.7)`;
    return  {
        BodyValue, HeadingValue,Textclr, Bgclr, prim, Sec, Acce,transparentTextClr1,transparentTextClr2,transparentBgclrr1,transparentBgclrr2
    ,transparentprim1,transparentprim2,transparentSec1,transparentSec2,transparentAcce1,transparentAcce2
    }
 }
