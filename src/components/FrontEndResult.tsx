"use client"

import { Checkbox, Container, Input, Link, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react"
import { CheckboxGroup } from "@chakra-ui/react";
import { TodoTitle } from "./TodoTitle";
import { Tabs } from "@chakra-ui/react";
import { Paper } from "@mui/material";
import { AddIcon } from "@chakra-ui/icons";
import { SideMenu } from "./SideMenu";
import { Text } from "@chakra-ui/react"
// ルーティング設定に必要なものをimport
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
    ChakraProvider,
    Box,
    Button,
    Flex,
    Icon,
    Image,
    theme,
} from "@chakra-ui/react";
import Framework from "./Framework";
import Language from "./Language";
import { TopHeader } from "./TopHeader";
import { Bar } from 'react-chartjs-2'


import 'chart.js/auto' // 今回はバンドルサイズ気にしないので、autoを使う
import SideMenu_temp from "./SideMenu_temp";
import SideMenu_top from "./SideMenu_top";
import { BlobProvider, BlobProviderParams, DocumentProps, PDFViewer, usePDF } from "@react-pdf/renderer";
import PDF from "./PDF";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { ref } from "firebase/storage";

const MemoPDF = React.memo(PDF);
const FrontEndResult = () => {


    const [front_language1, setLanguage1] = useState([]);
    // let shouldScrollToTop = useRef([]);

    //useEffect の第二引数 (依存配列) と再レンダリング:
    //空の配列 ([]):
    //依存配列が空の場合、useEffect は初回レンダリング時のみ実行されます。
    useEffect(() => {


        const usersCollectionRef1 = doc(db, 'front_language', 'level_1');

        getDoc(usersCollectionRef1).then((documentSnapshot) => {
            if (documentSnapshot.exists()) {
                setLanguage1(documentSnapshot.get('content'))
                // console.log('shouldScrollToTop(FrontEndResultコンポ）', front_language1);
            }
        });
        // console.log('shouldScrollToTop([再レンダリングなし]]FrontEndResultコンポーネント）', front_language1);

    }, [])
    const [instance, updateInstance] = usePDF({ document: <MemoPDF /> });
    const { url, loading } = instance;

    //String型へ型変換
    const url_j = instance.url as string;

    const location = useLocation();
    let navigate = useNavigate();
    const level1_Array: string[] = location.state.level1;
    const level2_Array: string[] = location.state.level2;
    const level3_Array: string[] = location.state.level3;
    // let front_language1: string[] = []
    // const usersCollectionRef1 = doc(db, 'front_language', 'level_1');

    // getDoc(usersCollectionRef1).then((documentSnapshot) => {
    // shouldScrollToTop.current = documentSnapshot.get('content');
    // console.log('getDoc内', shouldScrollToTop.current);
    // if (documentSnapshot.exists()) {
    // setLanguage1(documentSnapshot.get('content'));
    // console.log('[getDoc内側1]shouldScrollToTop(FrontEndResultコンポーネント）', documentSnapshot.get('content'));
    // console.log('[getDoc内側2]shouldScrollToTop(FrontEndResultコンポーネント）', front_language1);
    // console.log('getDocのdata値', documentSnapshot.data);

    // }
    // });
    // console.log('shouldScrollToTop([外側<1>]FrontEndResultコンポーネント）', shouldScrollToTop.current);

    const lv1 = Object.keys(level1_Array).length;
    const lv2 = Object.keys(level2_Array).length;
    const lv3 = Object.keys(level3_Array).length;
    const data = {
        // x 軸のラベル
        labels: ['基礎レベル', '現場レベル', '上級レベル'],
        datasets: [
            {

                label: 'Language分野',
                // データの値
                data: [lv1, lv2, lv3],
                // グラフの背景色
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                // グラフの枠線の色
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(75, 192, 192)',
                ],
                // グラフの枠線の太さ
                borderWidth: 1,
            },
        ],
    };

    let goBack = () => {
        navigate(-1)
    };
    //削除＆追加
    const viewPdf = async (name: any) => {
        navigate("/viewPdf/")
    };

    const ref = useRef<HTMLInputElement>(null);

    function handleRef() {
        console.log(ref);
        console.log("input", ref.current);
        console.log("value", ref.current?.value);
        console.log("width", ref.current?.offsetWidth);
    };
    //useMemoで計算結果をメモ化する:
    //useMemoを使うことで、依存関係が変わらない限り、同じ計算を何度も実行することを防ぎ、再レンダリングの負荷を軽減できます。
    const pdfComponent = useMemo(() => {
        // if (isFirstRender.current) {
        //     isFirstRender.current = false;
        //     return;
        // }


        // console.log('基礎レベル（レベル1）', location.state.level1);
        // console.log('現場レベル（レベル2）', location.state.level2);
        // console.log('応用レベル（レベル3）', location.state.level3);

        //4,3,2,1だったら、[4,3,2,1]の文字数：11
        //3,1,2だったら、[3,1,2]：7
        //1,2だったら、
        // console.log("レベル１：" + Object.keys(level1_Array).length);
        // console.log("レベル２：" + Object.keys(level2_Array).length);
        // console.log("レベル３：" + Object.keys(level3_Array).length);



        const level1_Array_content = [...level1_Array];
        // console.log('内容です1', level1_Array)
        // console.log('内容です2', level1_Array_content)


        interface OnRenderProps {
            blob?: Blob;
            loading: boolean;
            error: Error | null;
        }
        interface BlobProviderProps {
            document: React.ReactElement<DocumentProps>;
            children: (params: BlobProviderParams) => React.ReactNode;
        }
        interface UsePDFInstance {
            loading: boolean;
            blob: Blob | null;
            url: string | null;
            error: string | null;
        }



        //usePDF 再レンダリング
        // 再レンダリングを抑制するには、usePDFフックの値を参照するコンポーネントの再レンダリングを最適化
        // usePDFフック自体が再レンダリングを引き起こすのではなく、
        // フックが返す値（例えば、urlやloading状態など）が変更された場合に、それを参照しているコンポーネントが再レンダリングされます。
        // const [instance, updateInstance] = usePDF({ document: <PDF /> });
        // const { url, loading } = instance;
        // const pdfComponent = useMemo(() => {
        //     return (
        //         <div>
        //             {loading ? <p>Loading...</p> : <p>Loaded</p>}
        //         </div>
        //     )
        // }, [url, loading])
        // console.log('インスタンス', instance);
        // console.log('URL', instance.url);
        //「instance.url」データ型：ReactPDF.UsePDFInstance.url: string | null
        //string | null 型を、string | undefined型に代入しようとしているのでエラー



        // console.log('ローディング', instance.loading);
        // console.log('エラー', instance.error);
        // console.log('BLOG', instance.blob)


        const graph = () => {
            navigate("/graph/")
        }

    }, [])
    return (

        <>
            <Input type="text" ref={ref}></Input>
            <Button onClick={handleRef}>useRef</Button>
            {front_language1.map((item) => {
                <li>{item}</li>;
            })}
            <ChakraProvider theme={theme}>
                <Flex w="100vw" h="100wh">
                    <SideMenu_top />
                    <SideMenu_temp />
                    <Flex w="50vw" h="50wh" direction={"column"}>
                        <Bar data={data} />
                        <br />
                        <Text bg='rgb(255, 99, 132)'>基礎レベル<b>[{level1_Array.length}]</b>ポイント</Text>
                        {level1_Array.map((content: any, index: any) => (
                            <Flex direction="column">
                                {content}
                            </Flex>
                        ))}
                        <br />
                        <Text bg='rgb(255, 159, 64)'>現場レベル<b>[{level2_Array.length}]</b>ポイント</Text>
                        {level2_Array.map((content: any, index: any) => (
                            <Flex direction="column">
                                {content}
                            </Flex>
                        ))}
                        <br />
                        <Text bg='rgb(75, 192, 192)'>応用レベル<b>[{level3_Array.length}]</b>ポイント</Text>
                        {level3_Array.map((content: any, index: any) => (
                            <Flex direction="column">
                                {content}
                            </Flex>
                        ))}
                        <br />
                     
                      
                        <br />

                        <Flex>
                            <Button colorScheme="blue" size="sm" variant="outline" leftIcon={<AddIcon />}>
                                <Link href={url_j} download="test.pdf">PDFダウンロード</Link>
                            </Button>



                        </Flex>

                    </Flex>

                </Flex>

                <Button
                    onClick={goBack}
                    colorScheme="green"
                    leftIcon={<AddIcon />}
                    mt="8">戻る
                </Button>
            </ChakraProvider>



        </>

    );
};
export default FrontEndResult;
