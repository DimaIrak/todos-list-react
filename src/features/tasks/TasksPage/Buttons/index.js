import {
    selectTasksState,
    toggleHideDone,
    setAllDone,
} from "../../taskSlice";
import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);

    const dispatch = useDispatch();

    return (
        <Wrapper>
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