"use client";

import React from "react";
import PDF from "./PDF";
import { PDFViewer } from "@react-pdf/renderer";



// PDFをPDFViewerというコンポーネントを利用してレンダリング
const MemoizedPDFViewer = React.memo(({ PDF }: any) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <PDFViewer width="100%" height="100%">
        <PDF/>
      </PDFViewer>
    </div>
  );
});
export default MemoizedPDFViewer;