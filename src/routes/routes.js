import { createBrowserRouter } from "react-router-dom";
import MyCart from '../myCart';

const router = createBrowserRouter([
    {
        path: "/cart",
        element: <MyCart />,
    },
]);

export default router;  
  