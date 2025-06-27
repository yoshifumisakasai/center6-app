import React, { useEffect, useState } from "react";
import { TodoTitle } from "./TodoTitle";
import { Button, Container, Flex } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import { TopHeader } from "./TopHeader";
import SideMenu_top from "./SideMenu_top";

export type GlobalAuthState = {
    user: User | null | undefined
}
const initialState: GlobalAuthState = {
    user: undefined,
}
const Mypage = () => {

    const [user, setUser] = useState<any>("")

    useEffect(() => {
        try {
            const auth = getAuth()
            return onAuthStateChanged(auth, (xx) => {
                setUser(xx)
            })
        } catch (error) {
            setUser(initialState)
            throw error
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigate = useNavigate();
    const logout = async () => {
        await signOut(auth);
        navigate("/login/");
    }
    const skill_check = async () => {
        navigate("/skill_check/");
    }

    const skillRegister = async () => {
        navigate("/skillRegister/");
    }

    return (
        <>
        <Flex >
            <SideMenu_top />
            <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
                <TodoTitle
                    title="マイページ"
                    as="h1"
                    fontSize={{ base: "xl", md: "xl" }}
                    mt="1"
                />
                
               
              
                <p>{user?.email}</p>
                <Button
                onClick={logout}
                colorScheme="blue"
                leftIcon={<AddIcon />}
                mt="8">ログアウト
            </Button>
            </Container>
            </Flex>
        </>
    );
};

export default Mypage;