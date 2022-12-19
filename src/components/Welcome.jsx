import { useContext } from "react";
import { QuizContext } from "./../context/quiz"

import Quiz from './../img/quiz.svg'

import "./Welcome.css";

const Welcome = () => {

    const [quizState, dispatch] = useContext(QuizContext);


    return(
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão para começar:</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
                Iniciar
            </button>
            <img src={Quiz} alt="inicio do quiz"/>
        </div>
    );
};

export default Welcome;