import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
} from "../taskSlice";
import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;