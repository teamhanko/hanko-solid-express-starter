import { onMount, createSignal, onCleanup } from "solid-js";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { useNavigate } from "@solidjs/router";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export default function HankoAuth() {
  const navigate = useNavigate();
  const [hanko] = createSignal(new Hanko(hankoApi));

  const redirectAfterLogin = () => {
    navigate("/dashboard");
  };

  onMount(() => {
    hanko().onAuthFlowCompleted(() => {
      redirectAfterLogin();
    });

    register(hankoApi).catch((error) => {
      // handle error
    });
  });

  onCleanup(() => {
    // cleanup logic if needed
  });

  return <hanko-auth />;
}

type GlobalJsx = JSX.IntrinsicElements;

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "hanko-auth": GlobalJsx["hanko-auth"];
    }
  }
}
