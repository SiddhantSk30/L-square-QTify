import styles from "./logo.module.css";
import logo from "../../assets/logo.png";

export default function Logo(){

    return(
         <img src = {logo} alt = "logo" className = {styles.logoImage}/> 
    );
}