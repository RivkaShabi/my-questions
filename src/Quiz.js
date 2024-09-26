import React, { useState } from 'react';
import DATA from './data'; 
import { Button, Container, Typography, List, ListItem } from '@mui/material';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(DATA.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = index;
    setUserAnswers(newAnswers);

  };

  const nextQuestion = () => {
    if (currentQuestion < DATA.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const correctAnswers = DATA.reduce((score, question, index) => {
      if (question.correct === userAnswers[index]) {
        return score + 1;
      }
      return score;
    }, 0);
  
    const score = (correctAnswers / DATA.length) * 100;
    return Math.round(score); 
  };

  if (showResult) {
    return (
      <Container>
        <Typography variant="h4">Your score: {calculateScore()}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h5">{DATA[currentQuestion].question}</Typography>
      <List>
        {DATA[currentQuestion].answers.map((answer, index) => (
          <ListItem
            key={index}
            onClick={() => handleAnswer(index)}
            style={{
              cursor: 'pointer',
              backgroundColor: userAnswers[currentQuestion] === index ? '#cfe2f3' : 'transparent',
              fontWeight: userAnswers[currentQuestion] === index ? 'bold' : 'normal',
            }}
          >
            {answer}
          </ListItem>
        ))}
      </List>
      <div>
        <Button variant="contained" onClick={prevQuestion} disabled={currentQuestion === 0}>
          Prev
        </Button>
        <Button variant="contained" onClick={nextQuestion}>
          {currentQuestion === DATA.length - 1 ? 'Done' : 'Next'}
        </Button>
      </div>
    </Container>
  );
};

export default Quiz;
