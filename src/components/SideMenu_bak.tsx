// react rooter v6で画面遷移するために使うやつ
import { Box, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SideMenu_bak = () => {
  // natigate関数を取得
  const sideMenuItems = [
    {
      name: "Dashboard",
      path: "/dashbard",
    },
    {
      name: "Account",
      path: "/dashbard",
    },
    {
      name: "Mailbox",
      path: "/dashbard",
    },
    {
      name: "Message",
      path: "/dashbard",
    },
    {
      name: "Charts",
      path: "/dashbard",
    },
    {
      name: "Weather",
      path: "/dashbard",
    },
    {
      name: "RateReview",
      path: "/dashbard",
    },
  ];
  const navigate = useNavigate();
  return (
    <Box w="20vw" m="20px">
      {sideMenuItems.map((item) => (
        <label>
          <Box mt="10px" ml="10px">
            // ボタンをクリックしたらルーティングする
            <Button variant="ghost" onClick={() => navigate(item.path)}>
              {item.name}
            </Button>
          </Box>
        </label>
      ))}
    </Box>
  );
};