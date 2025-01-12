import { Question } from "@/types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}: Props) => {
    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}