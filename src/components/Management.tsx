import { FC, useRef } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

//Appコンポーネントは、FC型
export const Management: FC = () => {

  const {
    todoList,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    addTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null!);
  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === "") return;
    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = "";

  }
  const inCompletedList = todoList.filter((flg) => {
    return !flg.done;
  });

  const completedList = todoList.filter((flg) => {
    return flg.done;
  });


  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle
        title="TODO進捗管理"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        mt="1"
      />

      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem} />

      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />

      <TodoList todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />
    </Container>
  );
};
export default Management;