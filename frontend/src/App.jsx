import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import AddProductMore from './components/AddProductMore';
import NoPageFound from './components/NoPageFound';
import First from './components/First';
import Inventory from './components/Inventory';

const router = createBrowserRouter([
    {
        path: "/",
        element: <First/>,

        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "/AddProduct",
                element: <AddProduct/>
            },
            {
                path: "/AddProductMore",
                element: <AddProductMore/>
            },
            {
                path: "/Inventory",
                element: <Inventory/>
            },
            {
                path: "*",
                element: <NoPageFound/>
            }
        ],
    }
]);

function App(){
    return <RouterProvider router = {router}/>;
}

export default App;