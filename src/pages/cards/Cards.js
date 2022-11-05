import './Cards.css';
import { Card } from "../../components/card/Card";
import { Bookmark } from "../bookmark/Bookmark";
import { useState } from 'react';

export function Cards ({currentPage, setCurrentPage}) {

const [cardsArray, setCardsArray] = useState([
    {
        id: "0",
        question: "What does the fox say?",
        answer: "Banana.",
        isBookmarked: true,
        hideAnswer: "card__item hide",
        showAnswer: "card__item"
    },
    {
        id: "1",
        question: "To be or not to be?",
        answer: "To be.",
        isBookmarked: false,
        hideAnswer: "card__item hide",
        showAnswer: "card__item"
    },
    {
        id: "2",
        question: "Cheeseburger oder Pommes?",
        answer: "Cheesepommes.",
        isBookmarked: true,
        hideAnswer: "card__item hide",
        showAnswer: "card__item"
    },
    {
        id: "3",
        question: "Was ist der Sinn des Lebens?",
        answer: "Pommes.",
        isBookmarked: false,
        hideAnswer: "card__item hide",
        showAnswer: "card__item"
    },
    {
        id: "4",
        question: "Welche Farbe hat eine Zitrone?",
        answer: "Gelb.",
        isBookmarked: false,
        hideAnswer: "card__item hide",
        showAnswer: "card__item"
    },
]);

if (currentPage === "Home") { 
    return <Card cardsArray={cardsArray} setCardsArray={setCardsArray} />
    }
}