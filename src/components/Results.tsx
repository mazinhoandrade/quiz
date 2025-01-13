import { Question } from "@/types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}: Props) => {
    return (
        <div>
            {
                questions.map((question, index) => (
                    <div className="mb-2" key={index}>
                        <div className='p-2 text-md border-b border-gray-400 font-bold'>{index + 1} - {question.question}</div>
                        <div>
                        <span className={`font-bold ${question.answer === answers[index] ? 'text-green-500' : 'text-red-500'}`}>({question.answer === answers[index] ? 'Acertou' : 'Errou'}) - </span>
                        {question.options[answers[index]]}
                        </div>
                    </div>
                ))}
        </div>
    )
}