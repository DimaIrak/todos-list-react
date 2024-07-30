import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim()

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            $done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    }
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button onClick={focusInput}>
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
};


export default Form;