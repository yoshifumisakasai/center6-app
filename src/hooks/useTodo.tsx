/**TODOリスト取得、追加、更新、削除
 * モックサーバ通信用（CRUD処理）
 * カスタムフック（業務ロジック）
 */
import { useState, useEffect } from "react";
/**Node.jsライブラリ
 * ulid:一意ID生成
 */
import { ulid } from "ulid";

/**モックサーバ通信用メソッドオブジェクト */
import * as todoData from "../apis/todos";
import { TodoListType } from "../types";


/**本カスタムフック（業務ロジック）を外部ファイルから利用許可（EXPORT） */
//型定義

export const useTodo = () => {
    const [todoList, setTodoList] = useState<TodoListType>([]);


    //TODO取得
    useEffect(() => {
        todoData.getAllTodoData().then((todoList) => {
            setTodoList([...todoList].reverse());
        });
    }, []);

    //完了/未完了変更処理
    const toggleTodoListItemStatus = (id: number, done: boolean) => {
        const todoItem = todoList.find((item) => item.id === id);
        const newTodoItem = { ...todoItem, done: !done };

        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            const newTodoList = todoList.map((item) =>
                item.id !== updatedTodo.id ? item : updatedTodo);
            setTodoList(newTodoList);
        });
    };

    //新規TODO追加
    const addTodoListItem = (todoContent: string) => {
        const newTodoItem = {
            content: todoContent,
            id: ulid(),
            done: false
        };
        return todoData.addTodoData(newTodoItem).then((addTodo) => {
            setTodoList([addTodo, ...todoList]);
        });
    };


    //TODO削除処理
    const deleteTodoListItem = (id: number) => {
        todoData.deleteTodoData(id).then((deleteListItemId) => {
            const newTodoList = todoList.filter(
                (item) => item.id !== deleteListItemId
            );
            setTodoList(newTodoList);
        });
    };

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    };
};
