import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim()

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    }
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button" onClick={focusInput}>Dodaj zadanie</button>
        </form>
    )
};


export default Form;