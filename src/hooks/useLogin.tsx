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
import { LoginType, TodoListType } from "../types";


/**本カスタムフック（業務ロジック）を外部ファイルから利用許可（EXPORT） */
//型定義

export const useRegister = () => {
    const [id, setLoginID] = useState<LoginType>([]);
    const [pass, setLoginPassword] = useState<LoginType>([]);


    //新規TODO追加
    const addTodoListItem = (id: string) => {
        return (
            <></>
        );
    };



    return {
        addTodoListItem
    };
};
