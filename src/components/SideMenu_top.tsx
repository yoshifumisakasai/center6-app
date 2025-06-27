import { Box, Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
    MdMessage,
    MdDashboard,
    MdEmail,
    MdAccountBox,
    MdInsertChart,
    MdWbSunny,
    MdRateReview,
} from "react-icons/md";

export const SideMenu_top = () => {
    // natigate関数を取得
    const navigate = useNavigate();
    const sideMenuItems = [
        {
            name: "スキル判定",
            path: "/skill_check/",
            icon: MdDashboard
        },
        {
            name: "判定履歴",
            path: "/management/",
            icon: MdAccountBox

        },
        {
            name: "管理メニュー",
            path: "/kanri_skill_Check/",
            icon: MdAccountBox

        },
    
    ];
    return (
        <Box w="20vw" m="20px">
            {sideMenuItems.map((item) => (
                <label>
                    <Box mt="10px" ml="10px">
                        <Button variant="ghost" onClick={() => navigate(item.path)}>
                        {/* <Icon as={item.icon} w={4} h={4} /> */}
                            {item.name}
                        </Button>
                    </Box>
                </label>
            ))}
        </Box>
    );
};

export default SideMenu_top;