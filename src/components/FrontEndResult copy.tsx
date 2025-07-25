"use client"

import { Checkbox, Container, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react"
import { CheckboxGroup } from "@chakra-ui/react";
import { TodoTitle } from "./TodoTitle";
import { Tabs } from "@chakra-ui/react";
import { Paper } from "@mui/material";
import { AddIcon } from "@chakra-ui/icons";
import { SideMenu } from "./SideMenu";
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


const FrontEndResult = () => {

    const location = useLocation();
    let navigate = useNavigate();
    const level1_Array: number[] = location.state.level1;
    const level2_Array: number[] = location.state.level2;
    const level3_Array: number[] = location.state.level3;

    //4,3,2,1だったら、[4,3,2,1]の文字数：11
    //3,1,2だったら、[3,1,2]：7
    //1,2だったら、
    console.log("レベル１：" + Object.keys(level1_Array).length);
    console.log("レベル２：" + Object.keys(level2_Array).length);
    console.log("レベル３：" + Object.keys(level3_Array).length);

    const lv1 = Object.keys(level1_Array).length;
    const lv2 = Object.keys(level2_Array).length;
    const lv3 = Object.keys(level3_Array).length;

    const data = {
        // x 軸のラベル
        labels: ['基礎レベル', '現場レベル', '上級レベル'],
        datasets: [
            {
               
                label: 'Dataset',
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

    const graph = () => {
        navigate("/graph/")
    }
    return (
        <>
        
            {/* <TodoTitle
                title="フロントエンド判定結果"
                as="h1"
                fontSize={{ base: "2xl", md: "3xl" }}
                mt="1"
            /> */}
            <Bar data={data} />
            
            <ChakraProvider theme={theme}>
            </ChakraProvider>
            <Button
                onClick={goBack}
                colorScheme="pink"
                leftIcon={<AddIcon />}
                mt="8">戻る
            </Button>

        </>


    )
}
export default FrontEndResult;
