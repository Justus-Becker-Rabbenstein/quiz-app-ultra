import './Cards.css';
import {Card} from "../../components/card/Card";

export function Cards ({currentPage, setCurrentPage}) {

const [cardsArray, setCardsArray] = [
    {
        id: "0",
        question: "What does the fox say?",
        answer: "Banana.",
        isBookmarked: false},
        {
        id: "1",
        question: "To be or not to be?",
        answer: "To be.",
        isBookmarked: false},
        {
        id: "2",
        question: "Cheeseburger oder Pommes?",
        answer: "Cheesepommes.",
        isBookmarked: false},
        {
        id: "3",
        question: "Was ist der Sinn des Lebens?",
        answer: "Pommes.",
        isBookmarked: false},
        {
        id: "4",
        question: "Welche Farbe hat eine Zitrone?",
        answer: "Gelb.",
        isBookmarked: false
        },
];

if (currentPage === "Home") { 
    return <Card />
    }
/*     return cardsArray.map(function(parameter) {
        return (
        <Card>parameter.question</Card>
        );
    }) */
}