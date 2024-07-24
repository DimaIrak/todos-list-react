import { selectTasks, toggleHideDone } from "../taskSlice";
import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={setAllDone}
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