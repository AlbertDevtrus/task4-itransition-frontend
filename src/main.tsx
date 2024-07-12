import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Root from "./Root.tsx";
import { Login } from "./routes/Login.tsx";
import { Register } from "./routes/Register.tsx";

import "./index.css";
import { loginAction } from "./actions/loginAction.ts";
import { registerAction } from "./actions/registerAction.ts";
// import { ErrorPage } from "./routes/ErrorPage.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
        >
            <Route 
                index
                element={<Root />}
            />
            <Route
                element={<Login />}
                path="login"
                action={loginAction}
                errorElement={<Login />}
            />
            <Route
                element={<Register />}
                path="register"
                action={registerAction}
                errorElement={<Register />}
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
