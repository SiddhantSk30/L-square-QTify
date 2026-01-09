import styles from "./feedback.module.css";
import feedback from "../../assets/feedback.png";

export default function Feedback(){

    return(
        <div>
        <button className = {styles.feedback}>Give Feedback</button>    
        {/* <img src = {feedback} alt="feedback" className = {styles.feedbackImage}/>  */}
        </div>
    );
}