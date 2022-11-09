import { useEffect, useState } from "react";
import "./Create.css";

export function Create({ currentPage, setCurrentPage }) {
  const text = 'Profile / Create page is currently under construction';
  // setter
  localStorage.setItem('uC', text);
  // getter
  const textFromStorage = localStorage.getItem('uC');


  return <p>{textFromStorage}</p>;
}
