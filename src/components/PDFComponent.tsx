import React from "react";

export const PDFComponent = React.memo(({ pdfUrl, isLoading}:any) => {
  // PDFのレンダリング処理
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <iframe src={pdfUrl} width="100%" height="500px" />}
    </div>
  );
});