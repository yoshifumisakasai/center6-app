"use client";

import PDF from "./PDF";
import { PDFViewer } from "@react-pdf/renderer";



// PDFをPDFViewerというコンポーネントを利用してレンダリング
export default function Home() {
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
}