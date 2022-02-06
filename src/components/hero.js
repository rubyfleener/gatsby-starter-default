import * as React from "react"
import styles from "../styles/hero.module.scss"


const Hero = () => {
    return (
        <div className={styles.container}>
            <h3>Ruby Fleener</h3>
            <h1>User Experience Designer</h1>
            <div className={styles.subcontent}>
            <h5>& Aspiring Developer</h5>
            <h5>Based in the Midwest</h5>
            </div>
        </div>
    )
}

export default Hero