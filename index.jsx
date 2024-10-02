import { createRoot } from 'react-dom/client'
import App from './App'
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import Error from './components/Error';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CountryDetail from './components/CountryDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <div>Hello world!</div>,
            },
            {
                path: "/:country",
                element: <CountryDetail />,
            },
        ]
    },

]);

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)