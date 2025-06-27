import { ElementType } from "react";
export type LoginType = LoginType_comp[]

export type LoginType_comp = {
    id: string,
    pass: string;
}


export type TodoListProps = {
    title: string,
    as: ElementType,
    fontSize: {},
    todoList: TodoListType,
    toggleTodoListItemStatus: any,
    deleteTodoListItem: any
};

// TODOアイテムの型定義
export type TodoItemProps = {
    todoItem: TodoItem_comp,
    toggleTodoListItemStatus: any,
    deleteTodoListItem: any
};

export type TodoItem_comp = {
    id: number, content: string, done: boolean
};

export type TodoListType = TodoItem_comp[]


export type TodoItem_comp_x = {
    done: boolean
};

export type Title_comp = {
    title: string;
    mt: string;
    as: ElementType;
    fontSize: {};
};