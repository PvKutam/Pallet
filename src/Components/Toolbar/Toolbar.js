import React from "react"
import "./Toolbar.css"
import {Colors} from "./Colors/Colors"
import {Font} from "./Font/Font"
export const Toolbar=()=>{
    return(
        <div className="Toolbar">
            <Colors />
            <div className="split"></div>
            <Font />
        </div>
    )
}