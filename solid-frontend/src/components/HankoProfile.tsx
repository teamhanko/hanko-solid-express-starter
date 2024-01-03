import { onMount } from "solid-js";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export default function HankoProfile() {
    onMount(() => {
        register(hankoApi).catch((error) => {
            // handle error
        });
    });

    return <hanko-profile />;
}

type GlobalJsx = JSX.IntrinsicElements;

declare module "solid-js" {
    namespace JSX {
        interface IntrinsicElements {
            "hanko-profile": GlobalJsx["hanko-profile"];
        }
    }
}
