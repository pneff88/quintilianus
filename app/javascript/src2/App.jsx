import React, { useState, useContext } from 'react';
import './App.css';
import DICTIONARY from './dictionary.js';

function selectWord(dictionary) {
  const words = Object.keys(dictionary);
  let targetIndex = Math.floor(Math.random() * words.length);
  return words[targetIndex];
}

function addWrongAnswers(dictionary, answers, n) {
  const englishMeanings = Object.values(dictionary);
  for (let i = 0; i < n; i++) {
    let targetIndex = Math.floor(Math.random() * englishMeanings.length);
    let wrongAnswer = englishMeanings[targetIndex]
    if (answers.indexOf(wrongAnswer) === -1) {
      answers.push(wrongAnswer)
    } else {
      i--
    }
  }
}

function changeCorrectAnswerIndex(answers) {
  let index = Math.floor(Math.random() * answers.length);
  let correctAnswer = answers.shift(); // remove correct answer from front
  answers.splice(index, 0, correctAnswer)
}

const StreakContext = React.createContext(
  { streak: 0 }
);


function App2() {

  const [state, updateState] = useState({ streak: 0, answerstatus: 'Wrong', showAnswerstatus: false });
  const { streak, answerstatus, showAnswerstatus, targetEntry, targetWord, targetAnswer, answers } = state;

  const updateAnswerstatus = (newanswerstatus) => {
    updateState({ ...state, answerstatus: newanswerstatus });
  }
  const updateShowAnswerstatus = (newShowAnswerstatus) => {
    updateState({ ...state, showAnswerstatus: newShowAnswerstatus });
  }

  if(showAnswerstatus){
    flashAnswerStatus();
  }

  const questionValue = (streak + 1) * (streak + 1);


  function resetWords() {

  let targetEntry = selectWord(DICTIONARY);
  let targetWord = targetEntry;
  let targetAnswer = DICTIONARY[targetWord];
  let answers = [targetAnswer];
  addWrongAnswers(DICTIONARY, answers, 3);
  changeCorrectAnswerIndex(answers);
    
  return {targetEntry, targetWord, targetAnswer, answers}
  }

  if (!targetWord) {
    console.log(state)
    updateState({...state, ...resetWords()});
    console.log(state)
    return null;
  }
  
  if (streak !== 0 && answerstatus !== "Right") {
    updateAnswerstatus("Right");
  } else if (streak === 0 && answerstatus !== "Wrong") {
    updateAnswerstatus("Wrong");
  }


  function flashAnswerStatus() {
    setTimeout(() => {
      updateShowAnswerstatus(false)
    }, 1000)
  }



  return (
    <StreakContext.Provider value={{ streak, updateState, flashAnswerStatus }}>
      <div>
        <div className='container'>
          <Question value={targetWord}></Question>
          <div className='answerContainer'>
            <Answer value={answers[0]} targetAnswer={targetAnswer} />
            <Answer value={answers[1]} targetAnswer={targetAnswer} />
            <Answer value={answers[2]} targetAnswer={targetAnswer} />
            <Answer value={answers[3]} targetAnswer={targetAnswer} />
          </div>
          <div className='cardContainer'>
            <InfoCard name='Streak' value={'' + streak}></InfoCard>
            <InfoCard name="Question Value" value={questionValue}></InfoCard>
          </div>
          {showAnswerstatus && <StatusCard className={answerstatus} name="Prev. Answer" value={answerstatus}></StatusCard>}
        </div>
      </div>
    </StreakContext.Provider>
  );
}

function Question(props) {
  return (
    <div className='questions'>
      {props.value}
    </div>
  )
}

function Answer(props) {
  const [correctness, setCorrectness] = useState('false');
  const newCorrectness = props.value === props.targetAnswer;
  if (newCorrectness !== correctness) {
    setCorrectness(newCorrectness);
  }
  const { streak, updateState, flashAnswerStatus } = useContext(StreakContext);



  return (
    <div className='answers' onClick={() => { checkCorrectness(correctness, streak, updateState, flashAnswerStatus) }}>
      {props.value}
    </div>
  )
}


function checkCorrectness(correctness, streak, updateState,flashAnswerStatus) {
  function updatePecunia() {
    let body = {points: ((streak + 1) * (streak + 1)) };
    let res =  fetch('pecunia', {body: JSON.stringify(body), method: 'POST', headers: {'Content-Type': 'application/json'}});
  return res;
  }
  
    if (correctness) {
    updatePecunia().then((res)=> {
      return res.json()
    }).then((jsonRes) => {
      console.log(jsonRes)
    })
    streak++;
  } else {
    streak = 0;
  }
  updateState({ streak, answerstatus: correctness ? 'Right' : 'Wrong', showAnswerstatus: true })

  // flashAnswerStatus();
}

function InfoCard(props) {
  return (
    <div className='InfoCard'>
      {props.name}: {props.value}
    </div>
  )
}

function StatusCard(props) {
  return (
    <div className={props.className} >
      {props.value}
    </div>
  )
}

export default App2;