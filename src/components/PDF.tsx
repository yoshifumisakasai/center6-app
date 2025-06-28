import { Font, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import notoRegular from '../fonts/NotoSansJP-Regular.ttf';
import notoBold from '../fonts/NotoSansJP-Bold.ttf'
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useState } from "react";
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

export default function PDF() {

  //PDF出力データ取得Add commentMore actions
  // const [front_language1, setLanguage1] = useState<DocumentData>([]);

  const usersCollectionRef1 = doc(db, 'front_language', 'level_1');
  let array: any = [];
  getDoc(usersCollectionRef1).then((documentSnapshot) => {
    if (documentSnapshot.exists()) {
      // setLanguage2(documentSnapshot.data());
      //console.log('Document data1:', documentSnapshot.get('content'));
      array = documentSnapshot.data()['content'];
      console.log('配列サイズ→', array.length);
      console.log('配列サイズ→', array);
      // for (let i: number = 0; i < array.length; i++) {
      //console.log('Document data2:', documentSnapshot.get('content')[i]);
      // setLanguage1(documentSnapshot.get('content'));
      // }
    }
  });
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
            {array.map((content: any, index: any) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>✖</Text>
                <Text style={styles.tableCol}>{content}</Text>
                <Text style={styles.tableCol}>〇</Text>
                <Text style={styles.tableCol}>✖</Text>
                <Text style={styles.tableCol}>✖</Text>
                <Text style={styles.tableCol}>〇</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}