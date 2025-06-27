import { FC } from "react";
import { TodoItemProps } from "../types";
import { Text, Flex, Button, IconButton, ListItem } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

//TodoItemコンポーネント定義
export const TodoItem: FC<TodoItemProps> = ({ todoItem, toggleTodoListItemStatus, deleteTodoListItem }) => {
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todoItem.id, todoItem.done);
    const handleDeleteTodoListItem = () => deleteTodoListItem(todoItem.id);
    const label = todoItem.done ? "未完了リストへ" : "完了リストへ";
    const setColorScheme = todoItem.done ? "pink" : "blue";

    return (
        <ListItem
            borderWidth="1px"
            p="4"
            mt="4"
            bg="white"
            borderRadius="md"
            borderColor="gray.300">
            <Text mb="6">{todoItem.content}</Text>
            <Flex align="center" justify="flex-end">
                <Button
                    colorScheme={setColorScheme}
                    variant="outline"
                    size="sm"
                    onClick={handleToggleTodoListItemStatus}>
                    {label}
                </Button>
                <IconButton
                    icon={<DeleteIcon />}
                    variant="unstyled"
                    aria-label="delete"
                    onClick={handleDeleteTodoListItem} />
            </Flex>
        </ListItem>
    );
};