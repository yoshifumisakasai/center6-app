import { Button, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";
import { TodoTitle } from "./TodoTitle";
import { Input } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons";

export type GlobalAuthState = {
    user: User | null | undefined
}
const initialState: GlobalAuthState = {
    user: undefined,
}
const Register = () => {
    /* ↓state変数を定義 */
    const [registerEmail, setRegisterEmail] = useState<string>("");
    const [registerPassword, setRegisterPassword] = useState<string>("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        } catch (error) {
            alert("正しく入力してください");
        }
    };
    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };
    const [user, setUser] = useState<any>("")
    console.log(user);
    useEffect(() => {
        try {
            const auth = getAuth()
            return onAuthStateChanged(auth, (newUser) => {
                setUser(newUser)
            })
        } catch (error) {
            setUser(initialState)
            throw error
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {/* ↓ログインしていればマイページを表示 */}
            {user ? (
                <Navigate to={`/`} />
            ) : (
                <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
                    <TodoTitle
                        title="新規登録"
                        as="h1"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        mt="1"
                    />
                    <form onSubmit={handleSubmit}>

                        <label>メールアドレス</label>
                        {/* ↓「value」と「onChange」を追加 */}
                        <Input
                            bgColor="white"
                            placeholder="ID"
                            name="email"
                            type="email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <label>パスワード</label>
                        {/* ↓「value」と「onChange」を追加 */}
                        <Input
                            bgColor="white"
                            placeholder="PASSWORD"
                            name="password"
                            type="password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                        <Button
                            onClick={handleSubmit}
                            colorScheme="blue"
                            leftIcon={<AddIcon />}
                            mt="8">会員登録
                        </Button>
                    </form>
                    <Button
                        onClick={goBack}
                        colorScheme="gray"
                        variant="outline"
                        size="sm"
                        leftIcon={<AddIcon />}
                        mt="8">戻る
                    </Button>
                </Container >
            )}
        </>
    );
};

export default Register;