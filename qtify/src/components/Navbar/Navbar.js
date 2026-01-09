import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";
import Feedback from "../Feedback/Feedback";
import Search from "../Searchbar/Search";


export default function Navbar(){
    return (
        <div className = {styles.navbarTop}>
        <Logo /> 
        <Search/>  
        <Feedback/>    
        </div>
    )
}