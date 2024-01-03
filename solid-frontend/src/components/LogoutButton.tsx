import { createSignal, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

function LogoutBtn() {
    const navigate = useNavigate();
    const [hanko, setHanko] = createSignal<Hanko>();

    onMount(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) =>
            setHanko(new Hanko(hankoApi ?? ""))
        );
    });

    const logout = async () => {
        try {
            await hanko()?.user.logout();
            navigate("/auth");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return <button onClick={logout}>Logout</button>;
}

export default LogoutBtn;