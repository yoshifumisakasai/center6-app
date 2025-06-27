/**モックサーバ通信用
 * Ajax通信用Node.jsライブラリ：axios
 * Promiseをベース、HTTP通信を行うライブラリ（GET/POST）
*/

/**
 * JSON Server
 * 状態情報をAPIのモックで管理
 * フロントエンドのアプリケーション開発時、WebAPIテストなどで使用
 * 開発に工数がかかるバックエンドが容易されていない状態で、フロントエンドをテスト
 */
import axios from "axios";
import { TodoItem_comp_x } from "../types";
const todoDataUrl = "http://localhost:3100/todos";

/**GETメソッド
 * 第1引数に入れたURLへGETリクエスト送信
 */
export const getAllTodoData = async () => {
    const response = await axios.get(todoDataUrl);
    return response.data;
};

/**POSTメソッド：
 * フォーム入力の値を第2引数へデータをセット
 * サーバに転送
 */
export const addTodoData = async (todo: TodoItem_comp_x) => {
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
};

/**DELETEメソッド */
export const deleteTodoData = async (id: number) => {
    await axios.delete(`${todoDataUrl}/${id}`);
    return id;
};

/**PUTメソッド
 * 第1引数：更新対象
 * 第2引数：更新データ
 */
export const updateTodoData = async (id: number, todo: TodoItem_comp_x) => {
    const response = await axios.put(`${todoDataUrl}/${id}`, todo);
    return response.data;
};
