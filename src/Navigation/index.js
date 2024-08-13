import { Item, List, } from "../features/tasks/TasksPage/TaskList/styled";
import { toAuthor, toTasks } from "../routes";
import { StyledNavLink } from "./styled";

export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};