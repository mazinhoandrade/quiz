import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: "O que é uma variável em programação?",
        options: ["Um tipo de dado fixo.", "Um espaço na memória que armazena dados.", " Um loop que repete uma ação.", "Uma função que retorna sempre o mesmo valor."],
        answer: 1
    },
    {
        question: "Qual dos seguintes é um operador lógico em JavaScript?",
        options: ["&&", "##", "%%", "@@"],
        answer: 0
    },
    {
        question: "Qual é a estrutura de controle usada para executar um bloco de código várias vezes?",
        options: ["If-else", "For loop", "Switch case", "Try-catch"],
        answer: 1
    },
    {
        question: "Em Python, qual é a saída de print(type(3.14))?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'complex'>"],
        answer: 1
    },
    {
        question: "O que o comando git commit faz?",
        options: ["Remove arquivos do repositório.", "Compara mudanças entre commits.", "Salva mudanças no repositório local.", "Envia alterações para o repositório remoto."],  
        answer: 2           
    },
    {
        question: "Qual dos seguintes não é um banco de dados NoSQL?",
        options: ["MongoDB", "PostgreSQL", "CouchDB", "Redis"],  
        answer: 1           
    },
   
]