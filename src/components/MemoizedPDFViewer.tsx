"use client";

import React, { FC, useEffect, useState } from "react";
import PDF from "./PDF";
import { PDFViewer } from "@react-pdf/renderer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";


// PDFをPDFViewerというコンポーネントを利用してレンダリング

const MemoizedPDFViewer: FC = () => {
  const [front_language1, setLanguage1] = useState([]);

  useEffect(() => {
    const usersCollectionRef1 = doc(db, 'front_language', 'level_1');

    getDoc(usersCollectionRef1).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        setLanguage1(documentSnapshot.get('content'));
      }
    })
  },[]);
  console.log('MemorizedPDFViewerコンポ実行')
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <PDFViewer width="100%" height="100%">
        <PDF />
      </PDFViewer>
    </div>
  );
};
export default React.memo(MemoizedPDFViewer);