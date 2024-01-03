import PrivateRoute from "../components/PrivateRoute"

export const Protected = () => {
    return (
        <PrivateRoute>
            <h1>Hello from protected page, you can't access it without authentication</h1>
        </PrivateRoute>
    )
}
