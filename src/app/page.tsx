"use client"

import { QuestionItem } from '@/components/QuestionItem';
import { Results } from '@/components/Results';
import { questions } from '@/data/questions';
import { useState } from 'react';

export default function Home() {
  const title ='Quiz de Programação';

  const [answers, setAnswers] = useState<number[]>([]);
  const[showResult, setShowResult] = useState(false);

  const [question, setQuestion] = useState(0);

  const handleAnswered = (answer: number) => {
     setAnswers([...answers, answer]);
     loadNextQuestion();
  }

  const loadNextQuestion = () => {
    if (question + 1 < questions.length) {
      setQuestion(question + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleRestart = () => {
    setShowResult(false);
    setQuestion(0);
    setAnswers([]);
  }

  console.log(question)

  return (
    <div className='w-full h-screen flex justify-center items-center bg-blue-600'>
        <div className='w-full max-w-xl rounded-md bg-white text-black shadow shadow-black'>
          <div className='p-4 text-2xl border-b border-gray-400 font-bold'>{title}</div>
          <div className='p-4'>
            {showResult ? 
            (
              <Results questions={questions} answers={answers} />
            ) : 
            (
            <QuestionItem question={questions[question]} count={question+1} onAnswer={handleAnswered} />
            )}
            
          </div>
          <div className='p-4 text-center border-t border-gray-400'>
            
            {showResult && 
              <button onClick={() => handleRestart()} className='bg-blue-500 text-white p-2 rounded-md' >Reiniciar Quiz</button>
            }
            {!showResult && `${question+1} de ${questions.length} pergunta${questions.length > 1 ? 's' : ''}`}
          </div>
        </div>
    </div>
  )
}
