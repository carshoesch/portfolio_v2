import { RouterProvider } from "react-router";
import Home from "../../components/home/Home";
import { createBrowserRouter } from "react-router-dom";

const Main = () => {
    const router = createBrowserRouter([
        {
            element: <Home />,
            path: "/",
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Main;
