// 棒グラフ用のコンポーネントをインポート
import { JSX } from 'react';
import { Bar } from 'react-chartjs-2';
import { useLocation, useNavigate } from 'react-router-dom';
import { TodoTitle } from './TodoTitle';
import { Button, ChakraProvider, theme } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const data = {
  // x 軸のラベル
  labels: ['基礎レベル', '現場レベル', '上級レベル'],
  datasets: [
    {
      label: 'Dataset',
      // データの値
      data: [65, 59, 80, 81, 56, 55, 40],
      // グラフの背景色
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
      ],
      // グラフの枠線の色
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
      ],
      // グラフの枠線の太さ
      borderWidth: 1,
    },
  ],
};
const Graph = () => {

  const location = useLocation();
  let navigate = useNavigate();

  let goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TodoTitle
        title="フロントエンド判定結果"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        mt="1"
      />
      <Bar data={data} />;
    </>
  )
}
export default Graph;

// レンダリング
// export default function Graph(): JSX.Element {
//   return <Bar data={data} />;
// }