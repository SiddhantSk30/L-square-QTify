import styles from "./feedback.module.css";
import feedback from "../../assets/feedback.png";

export default function Feedback(){

    return(
        <div>
        <img src = {feedback} alt="feedback" className = {styles.feedbackImage}/> 
        </div>
    );
}