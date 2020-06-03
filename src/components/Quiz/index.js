import React, { useState, useEffect, useCallback } from "react";
import CheckBox from "../../images/check-solid.svg";
import Arrow from "../../images/arrow-right-solid.svg";

const initSelections = [
    {
        id: 1,
        question: `Do you feel like you"re past your prime?`,
        answer: null
    },
    {
        id: 2,
        question: `Are you experiencing low libido (sex drive)?`,
        answer: null
    },
    {
        id: 3,
        question: `Are you getting fewer or no morning erections?`,
        answer: null
    },
    {
        id: 4,
        question: `Do you have a decreased enjoyment in life?`,
        answer: null
    },
    {
        id: 5,
        question: `Are your erections less strong?`,
        answer: null
    },
    {
        id: 6,
        question: `Are you often fatigued?`,
        answer: null
    },
    {
        id: 7,
        question: `Do you ever have depression or anxiety??`,
        answer: null
    },
    {
        id: 8,
        question: `Are you struggling to maintain muscle mass, endurance or athletic ability?`,
        answer: null
    },
    {
        id: 9,
        question: `Has your work performance deteriorated?`,
        answer: null
    }
];

const Quiz = () => {

    const [visited, setVisited] = useState(false);
    const [selections, setSelections] = useState(initSelections);
    const [complete, setComplete] = useState(false);
    const [completeQuiz, setCompleteQuiz] = useState(false);
    const [answer, setAnswer] = useState(null);

    const responseArr = [`Based on your answers, you may benefit from testosterone replacement therapy through Trūman.`, `Testosterone replacement therapy might not be the type of treatment you need. If you"re interested in learning more about men"s health, study up with our blog.`];

    const clickHandler = useCallback((questionKey, selection) => {
        setVisited(!visited);
        const answers = [...selections];
        const objectToReplace = answers[questionKey];
        const replacementObject = { ...objectToReplace, answer: selection };
        answers.splice(questionKey, 1, replacementObject);
        setSelections([...answers]);
    })

    const checkStyle = {
        width: "16px",
        height: "auto",
        marginRight: "10px",
        position: "absolute",
        marginLeft: "-30px",
        marginTop: "5px"
    }

    const arrowStyle = {
        width: "20px",
        height: "auto",
        marginRight: "10px",
        position: "relative",
        marginLeft: "10px",
        verticalAlign: "text-bottom"
    }

    useEffect(() => {
        const checkSelections = selections.some(i => i.answer === null);
        setComplete(!checkSelections);
    }, [clickHandler, selections]);

    useEffect(() => {
        if (completeQuiz) {
            if (selections.some(i => i.answer === true)) setAnswer(true);
            else setAnswer(false);
        }
    }, [completeQuiz, selections]);

    const questions = selections.map((val, key) => {
        return (
            <div className="quiz-wrapper row d-flex justify-content-center py-4" key={key}>
                <div className="col-12 col-lg-10">
                    <div className="question text-center px-xl-5">
                        <h2>{val.question}</h2>
                    </div>
                    <div className="answer row d-flex justify-content-center">
                        <div className="col-12 col-sm-7 col-md-5 col-lg-3 col-xl-3 px-xl-4 mt-3">
                            <button
                                onClick={() => clickHandler(key, true)}
                                className={`btn btn-md btn-block truman-btn ${val.answer !== null ? val.answer ? "selected" : null : ""}`}
                            >
                                <img src={CheckBox} style={checkStyle} className={`${val.answer !== null ? val.answer ? "img-selected" : null : ""}`} />Yes
                            </button>
                        </div>
                        <div className="col-12 col-sm-7 col-md-5 col-lg-3 col-xl-3 px-xl-4 mt-3">
                            <button
                                onClick={() => clickHandler(key, false)}
                                className={`btn btn-md btn-block truman-btn ${val.answer !== null ? !val.answer ? "selected" : null : ""}`}
                            >
                                <img src={CheckBox} style={checkStyle} className={`${val.answer !== null ? !val.answer ? "img-selected" : null : ""}`} />No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="container py-5 truman-quiz">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-10 col-lg-8 col-xl-7 text-center quiz-headline pt-4 mb-4">
                    <h1>{!completeQuiz ? `See If You Qualify!` : answer ? responseArr[0] : responseArr[1]}</h1>
                </div>
            </div>
            {!completeQuiz ? questions : null}
            <div className="row">
                <div className="col-12 text-center quiz-complete pt-4 mb-4">
                    {
                        !completeQuiz
                            ?
                            <button onClick={() => setCompleteQuiz(true)} className={`btn btn-md truman-btn ${!complete ? "disabled" : ""}`}>Complete</button>
                            :
                            <div className="btn-group" role="group">
                                <button onClick={() => setCompleteQuiz(false)} className={`btn btn-md truman-btn ${!complete ? "disabled" : ""}`}>Change Some Answers</button>
                                {
                                    answer
                                        ?
                                        <button href="#" className="btn btn-md truman-btn-light">Get Started Now<img src={Arrow} style={arrowStyle} /></button>
                                        :
                                        <button href="#" className="btn btn-md truman-btn-light">Study Up</button>
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Quiz;