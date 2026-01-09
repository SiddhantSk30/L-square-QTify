import react from "react"
// import {ReactComponent as heroimage} from "../../assets/heroimage.png";
import styles from "./hero.module.css";


export default function Hero(){
    return(
        <div>
        <img className = {styles.hero} alt = "heroImage" src = {require("../../assets/heroimage.png")} />
        {/* <img className = {styles.hero} alt = "heroImage" src = {heroimage} /> */}
        <heroimage/>

        </div>
    )
}