// import { createSignal, onMount } from 'solid-js';
// import { Outlet, useNavigate } from "@solidjs/router";
// import { createEffect } from "solid-js";


// export default function RouteGuard() {
//     const [isAuthenticated, setIsAuthenticated] = createSignal<boolean | null>(null);
//     const navigate = useNavigate();

//     onMount(() => {
//         fetch('http://localhost:5001/api/protected', {
//             credentials: 'include', // This is required to include the cookie in the request
//         })
//             .then((res) => {
//                 setIsAuthenticated(res.ok);
//             })
//             .catch(() => {
//                 setIsAuthenticated(false);
//             });
//     });

//     createEffect(() => {
//         if (!isAuthenticated()) {
//             navigate('/auth', { replace: true });
//         }
//     })

//     return (
//         <div>
//             <Outlet />
//         </div>
//     )
// }