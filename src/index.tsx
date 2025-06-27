import ReactDOM from 'react-dom/client';
import App from './components/App';
/**
 * Chakura UI
 * React UIコンポーネントライブラリ
 */
// Chakura UIのChakura Provider
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import React from 'react';

//TODO進捗管理アプリのトップルート


/**
 *t ReactDOM.render
 * コンポーネントをDOMに変換し出力
 * Reactコンポーネントの内容をブラウザに描画
 * Deprecation notice: ReactDOM.render is no longer supported in React 18
 * https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/**
 * レンダリング
 * Reactにおけるレンダリング
 * ↓
 * propsとstateをもとにコンポーネントに対してそれらがどのように画面上に表示されるか、
 * 変更前と変更後の仮想DOMを構築して変更差分を検出し、
 * 実際にDOMに変更を加える必要があるかどうか判定するプロセス
 */

/**
 * Chakura Provider
 * アプリケーションのトップルートで設定
 * アプリケーションのトップルートでコンポーネントをラップ
 * Chakura Providerにthemeを渡す
 */
root.render(
  /**
   * Strictモード
   * javascriptのコードを通常より厳しくエラーチェックする
   */
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);