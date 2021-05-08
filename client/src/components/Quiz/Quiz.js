import { useState } from 'react';
import Title from '../Title/Title';
import './Quiz.css';
import { questions } from './data';

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    let res = '';

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    if (score <= '2') {
        res = 'Your mental well-being is good! Changing moods are a part of life, and its crucial to take care of your mental health to feel your best. Check out other features on our website to help boost your mental well-being';
    } else if (score >= '3' && score <= '6') {
        res = 'Your mental well-being is moderate! We all go through ups and downs, but most of the time we can cope with the life changes with support from others. Check out our community forum and your dashboard to engage in activities that can help you feel better.';
    } else {
        res = 'Your mental well-being is low. We recommend you seek support from a professional mental health practitioner. You can also check out our forum where you can anonymously share your feelings.';
    }

    return (
        <>
            <Title />
            <div className='quiz-body'>
                <div className='quiz-app'>
                    {showScore ? (
                        <div className='score-section'>
                            <p>{res}</p>
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                    <button key={index} className='quiz-btn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Quiz;