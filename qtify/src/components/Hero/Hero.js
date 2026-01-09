import react from "react"
// import {ReactComponent as heroimage} from "../../assets/heroimage.png";
import styles from "./hero.module.css";


export default function Hero(){
    return(
        <div className = {styles.maindiv}>
        <div className = {styles.herotext}>    
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
        </div>
            
        <img className = {styles.hero} alt = "heroImage" src = {require("../../assets/headphone.png")} />
        {/* <img className = {styles.hero} alt = "heroImage" src = {heroimage} /> */}
        <heroimage/>

        </div>
    )
}