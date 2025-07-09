import { Font, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import notoRegular from '../fonts/NotoSansJP-Regular.ttf';
import notoBold from '../fonts/NotoSansJP-Bold.ttf'
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

//React-pdfが提供するコンポーネントやAPIを利用してPDFのスタイルを定義
Font.register({
  family: 'font_001',
  fonts: [
    {
      src: notoRegular as string,
    },
    {
      src: notoBold as string,
      fontWeight: 'bold',
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "font_001",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    marginBottom: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  details: {
    marginBottom: 30,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsTable: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontWeight: "bold",
    padding: 5,
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  textVertical: {
    flexDirection: "column",
  },
  company: {
    marginTop: 10,
  },
});

const data = [
  {
    title: "発注日",
    value: "2024/4/01",
    items: [
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
    ],
  },
];

const PDF = (props: any) => {

  const param_d = props.front_language1;
  console.log('props内容は', props);
  console.log('props内容は', props.front_language1);

  const isFirstRender = useRef(true);
  let countRef = useRef([]);
  // const [front_language1, setLanguage1] = useState([]);

  //  useEffectの依存配列を適切に設定する:
  //useEffectの依存配列に空の配列を渡すことで、コンポーネントのマウント時に一度だけ実行されるように設定できます。﻿
  //これにより、不要な再レンダリングを抑制できます。﻿
  useEffect(() => {

    // 初回レンダリング時にuseEffectを実行しないようにする方法
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    // const increment = useCallback((x: any) => {
    //   setLanguage1(x)
    // }, [])
    const usersCollectionRef1 = doc(db, 'front_language', 'level_1');

    getDoc(usersCollectionRef1).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        // increment(documentSnapshot.get('content'))
        // setLanguage1(documentSnapshot.get('content'))
        countRef.current = documentSnapshot.get('content');
        console.log('countRefの中身は', countRef.current);
      }
    });

  }, [])

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>領収書</Text>
        </View>
        <View style={styles.details}>
          {data.map((detail, index) => (
            <View style={styles.detailItem} key={index}>
              <View style={styles.textVertical}>
                <Text>株式会社〇〇</Text>
                <Text>〇〇 御中</Text>
              </View>
              <View>
                <Text>発行日{detail.value}</Text>
                <View style={styles.company}>
                  <Text>株式会社〇〇</Text>
                  <Text>東京都〇〇〇〇〇〇〇〇〇〇</Text>
                  <Text>TEL：00-0000-0000</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View>
          <View style={styles.itemsTable}>
            <View style={styles.tableRow}>
              {/* 大項目
                    フロントエンド
                    バックエンド
                    インフラ
                    */}
              <Text style={styles.tableColHeader}>大項目</Text>
              <Text style={styles.tableColHeader}>中項目</Text>
              <Text style={styles.tableColHeader}>単位</Text>
              <Text style={styles.tableColHeader}>単価</Text>
              <Text style={styles.tableColHeader}>金額</Text>
            </View>
            {countRef.current.map((content: any, index: any) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{content}</Text>
                <Text style={styles.tableCol}>{content}</Text>
                <Text style={styles.tableCol}>{content}</Text>
                <Text style={styles.tableCol}>{content}</Text>
                <Text style={styles.tableCol}>{content}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default PDF;