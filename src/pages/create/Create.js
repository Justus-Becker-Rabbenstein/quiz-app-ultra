import "./Create.css";
import { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";

export function Create({ currentPage, setCurrentPage }) {
  const { globalStateVar } = useContext(GlobalStateContext);
  return (
    <p>
      Profile / Create page is currently under construction {globalStateVar}
    </p>
  );
}
