import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../taskSlice";
import { Button } from "../TaskList/styled";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};