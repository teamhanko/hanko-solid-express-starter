import { useNavigate } from "@solidjs/router";
import HankoProfile from "../components/HankoProfile"
import LogoutBtn from "../components/LogoutButton"

export const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <HankoProfile />
            <div>
                <LogoutBtn />
            </div>
        </>
    )
}