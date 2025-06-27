import { Box, Button, Icon } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const SideMenu = () => {

  // natigate関数を取得
  const navigate = useNavigate();


  return (


    <Box w="20vw" m="20px">
      <label>
        <Box mt="1px" ml="1px">
          <Button variant="ghost" onClick={() => navigate("/language")}>
            プログラミング言語</Button>
        </Box>
        <Box mt="1px" ml="1px">
          <Button variant="ghost" onClick={() => navigate("/framework")}>
            フレームワーク</Button>
        </Box>
      </label>
    </Box>
  );
};