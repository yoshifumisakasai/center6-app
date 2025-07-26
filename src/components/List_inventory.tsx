import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";
import { Button, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import SideMenu_top from "./SideMenu_top";
import { doc, DocumentData, setDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const List_inventory: FC = (props: any) => {


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const userDocumentRef = doc(db, 'list_inventory', '00001');
        const documentRef = await setDoc(userDocumentRef, {
            rireki_id: '0011',
            touroku_time: 'test_user001',
            name: 'test001',
            frontend: 'フロントエンドエンジニア001',
            backend: 'バックエンドエンジニア001',
            infra: 'インフラエンジニア001'
        });

        console.log(documentRef);
    };




    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1);
    };


    return (
        <>
            <ChakraProvider theme={theme}>
                <Flex w="100vw" h="100wh" >
                    <SideMenu_top />

                    <Flex direction="column">
                        <Button
                            onClick={goBack}
                            colorScheme="blue"
                            variant="outline"
                            size="sm"
                            leftIcon={<AddIcon />}
                            mt="8">戻る
                        </Button>
                    </Flex>
                </Flex>
            </ChakraProvider>

        </>
    );
};

export default List_inventory;