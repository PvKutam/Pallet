import "./Font.css";
import React, { useState } from "react";
import "../Toolbar.css";
import { useDispatch, useSelector } from "react-redux";
import { HeadingFont, BodyFont } from "../../Redux/Size";
import { selectHeadingFont, selectBodyFont } from "../../Redux/Size";

export const Font = () => {
  const [Fonts, setFonts] = useState(false);
  const [FontState, setFontState] = useState({ Heading: false, Body: false });
  const dispatch = useDispatch();
  const HeadingValue = useSelector(selectHeadingFont);
  const BodyValue = useSelector(selectBodyFont);

  const handleFontChange = (type, value) => {
    dispatch(type === "Heading" ? HeadingFont(value) : BodyFont(value));
    setFontState((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  const handlePopBoxClick = (e) => {
    e.stopPropagation();
  };

  const toggleFontState = (type) => {
    setFontState({ ...FontState, [type]: !FontState[type] });
  };

  const fontOptions = ["Arial", "Helvetica Neue", "sans-serif"]; // Add your desired font options here

  return (
    <div className="Main-option">
      <div
        className="options"
        onClick={() => {
          setFonts(!Fonts);
          toggleFontState("Heading");
          toggleFontState("Body");
        }}
        style={{ gap: "2px" }}
      >
        Fonts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          className="Plus"
        >
          <path
            d="M 0 6.5 H 13"
            stroke="black"
            stroke-width="1.2"
          ></path>
          <path
            d="M 6.5 0 L 6.5 13"
            stroke="black"
            stroke-width="1.2"
          ></path>
        </svg>
      </div>
      {Fonts && (
        <>
          <div className="options ch" onClick={() => toggleFontState("Heading")}>
            Heading
            {FontState.Heading && (
              <div className="pop-box" onClick={handlePopBoxClick}>
                <div className="box-in">
                  <p>Select font for Heading</p>
                  <div className="pop-input">
                    <select
                      className="Select"
                      value={HeadingValue}
                      onChange={(e) => dispatch(HeadingFont(e.target.value))}
                    >
                      {fontOptions.map((font, index) => (
                        <option key={index} value={font}>
                          {font}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="options ch" onClick={() => toggleFontState("Body")}>
            Body
            {FontState.Body && (
              <div className="pop-box bg" onClick={handlePopBoxClick}>
                <div className="box-in">
                  <p>Select font for Body</p>
                  <div className="pop-input">
                    <select
                      className="Select"
                      value={BodyValue}
                      onChange={(e) => dispatch(BodyFont(e.target.value))}
                    >
                      {fontOptions.map((font, index) => (
                        <option key={index} value={font}>
                          {font}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
