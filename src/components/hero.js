import * as React from "react"
import "../styles/layout.scss"
import {
    container,
    primaryHeading,
    tertiaryHeading,
    subHeading
} from "../styles/hero.module.scss"


const Hero = ({pageHeading, children}) => {
    return (
        <div className={container}>
            <h3 className={tertiaryHeading}>Ruby Fleener</h3>
            <h1 className={primaryHeading}>{pageHeading}</h1>
            <div className={subHeading}>
                <h5>UX/UI Designer</h5>
                <h5>& Aspiring FEE</h5>
            </div>
            {children}
        </div>
    )
}

export default Hero