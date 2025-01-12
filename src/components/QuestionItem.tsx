import { Question } from "@/types/Question"
import { useState } from "react";

type Prop = {
    question: Question,
    count: number,
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({question, count, onAnswer}:Prop) => {
    const [selected, setSelected] = useState<number | null>(null);

    const checkQuestion = (answer: number) => {
        if (selected !== null) {
            return;
        }
        setSelected(answer);
        setTimeout(() => {
            onAnswer(answer);
            setSelected(null);
        },1000);
        
    }

    return (
        <div>
            <div className='p-4 text-2xl border-b border-gray-400 font-bold'>{count} - {question.question}</div>
            <div className='p-4'>
                {question.options.map((option, index) => (
                    <button 
                        key={index}
                        onClick={()=>checkQuestion(index)}
                        className={`p-2 border bg-blue-100 border-blue-200 rounded-md w-full mb-2
                            ${selected !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                            ${selected !== null && selected === question.answer && selected === index && 'bg-green-100'}
                            ${selected !== null && selected !== question.answer && selected === index && 'bg-red-100'}
                            
                            `}
                        
                   >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}