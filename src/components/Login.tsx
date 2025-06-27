import { AddIcon } from "@chakra-ui/icons";
import { Button, Container, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TodoTitle } from "./TodoTitle";
import { onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { Navigate } from "react-router-dom";

export type GlobalAuthState = {
    user: User | null | undefined
}
const initialState: GlobalAuthState = {
    user: undefined,
}




const Login = () => {
    /* ↓state変数を定義 */
    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPassword, setLoginPassword] = useState<string>("");

    /* ↓関数「handleSubmit」を定義 */
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {

            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            alert("メールアドレスまたはパスワードが間違っています");
        }
    };
    const [user, setUser] = useState<any>("")
    console.log(user)
    useEffect(() => {
        try {
            return onAuthStateChanged(auth, (loggedUser) => {
                setUser(loggedUser)
            })
        } catch (error) {
            setUser(initialState)
            throw error
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {/* ↓ログインしている場合、マイページにリダイレクトする設定 */}
            {user ? (
                <Navigate to={`/mypage/`} />
            ) : (

                <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
                    <TodoTitle
                        title="ログインページ"
                        as="h1"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        mt="1"
                    />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>メールアドレス</label>
                            {/* ↓「value」と「onChange」を追加 */}
                            <Input
                                name="email"
                                type="email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>パスワード</label>
                            {/* ↓「value」と「onChange」を追加 */}
                            <Input
                                name="password"
                                type="password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            onClick={handleSubmit}
                            colorScheme="blue"
                            leftIcon={<AddIcon />}
                            mt="8">ログイン
                        </Button>
                    </form>
                </Container>
            )}
        </>
    );
};

export default Login;
