import React from "react";
import Navbar from "../Navbar/Navbar"
import "./blog1.css"
import Footer from '../Footer/Footer';
import { Toolbar } from "../Toolbar/Toolbar";  
import { Main } from "../Toolbar/Colors/Main";


export default function Blog(){
    const {HeadingValue,BodyValue,prim, Sec}= Main()
    const gradientStyle = {
        background: `linear-gradient(to right, ${prim}, ${Sec})`,
        // Other styles if needed
      };
      
    return(
        <>
        <Navbar />
        <div className="Main1">
            <h1 className="Main-h1" style={{fontFamily: `${HeadingValue}`}}>Exclusive Blog Content</h1>
            <p >Content for content lovers, color testers, and font enthusiasts.</p>
        
        {/* <div  className="Main-img"style={gradientStyle}>Img</div> */}
        <div className="rectangle" style={gradientStyle}>  </div>

        <div className="sub-main">
            <p className="submain-p" style={{fontFamily: `${BodyValue}`}}>This is a blog content. You can use it to test the colors and fonts, mainly focusing on text. Your
                    average simple, minimal blog post.</p>
            <p className="submain-p"style={{fontFamily: `${BodyValue}`}}>First, let's check out how different fonts and sizes look on each heading</p>
            {/* First div h2 */}
            <div className="submain-div">
                <h2 className="submain-h2" style={{fontFamily: `${HeadingValue}`}}>Here's an H2 Tag</h2>
                <p className="submain-para" style={{fontFamily: `${BodyValue}`}}>H2 tags come right after the H1 tag. Usually, there's one H1 tag per document, which is the
                        title. The H2 tags are the main headings of the article, and they are kind of necessary because
                        they help search engines understand the topic of that document.</p>
            </div>
            {/* Third Div h3 */}
            <div className="submain-div">
                <h3 className="submain-h2" style={{fontFamily: `${HeadingValue}`}}>Here comes the H3 tag</h3>
                <p className="submain-para" style={{fontFamily: `${BodyValue}`}}>The H3 tags mark the subheadings and their main topics are still related to their respective H2
                        tags. For example, here, you're still reading about headings and subheadings.</p>
            </div>
            {/* 4th div h4 */}
            <div className="submain-div">
                <h4 className="submain-h2" style={{fontFamily: `${HeadingValue}`}}>H4 tag?</h4>
                <p className="submain-para" style={{fontFamily: `${BodyValue}`}}>The journey through heading tags continues. The H4 tag is a subheading for the H3 tag. When do
                        you even use it? Whenever you need a section even smaller than the subheading. It's generally
                        uncommon and doesn't affect search engine optimization much.</p>
            </div>
            {/* 5th div h5 */}
            <div className="submain-div">
            <h5 className="submain-h2" style={{fontFamily: `${HeadingValue}`}}>There's an H5 too?</h5>
            <p className="submain-para" style={{fontFamily: `${BodyValue}`}}>Yes, there is. Again, it's not that common, and probably just looks like average text. But who
                        knows. Maybe you'll need it.</p>
            </div>
        </div>

        </div>
        <Toolbar />
        </>
    )
}

