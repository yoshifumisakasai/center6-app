import { FC, Fragment } from "react";
import { TodoListProps } from "../types";
import { TodoItem } from "./TodoItem";
import { List } from "@chakra-ui/react";
import { TodoTitle } from "./TodoTitle";

//TodoItemコンポーネント定義
//TodoListコンポーネント定義
export const TodoList: FC<TodoListProps> = ({
    title,
    as,
    fontSize,
    todoList,
    toggleTodoListItemStatus,
    deleteTodoListItem }) => {

    return (
        <>
            {todoList.length !== 0 && (
                <>
                    <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
                    <List w="full">
                        {todoList.map((st) => (
                            <TodoItem
                                todoItem={st}
                                key={st.id}
                                toggleTodoListItemStatus={toggleTodoListItemStatus}
                                deleteTodoListItem={deleteTodoListItem} />
                        ))}
                    </List>
                </>
            )}
        </>
    );
};
