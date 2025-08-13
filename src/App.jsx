import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Notfound from "./pages/Notfound.jsx";
import ProtectionRoute from "./components/ProtectionRoute.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import Profile from "./pages/Profile.jsx";
import MyBeloved from "./pages/MyBeloved.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/', element: <Layout></Layout>, children: [
                {index: true, element: <Login/>},
                {path: '/login', element: <Login/>},
                {path: '/register', element: <Register/>},
                {path: '/mybeloved', element: <MyBeloved/>},
                {path: '/home', element: <ProtectionRoute><Home/></ProtectionRoute>},
                {path: '/post/:id', element: <ProtectionRoute><SinglePost/></ProtectionRoute>},
                {path: '/profile/:id', element: <ProtectionRoute><Profile/></ProtectionRoute>},
                {path: '*', element: <Notfound/>},
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
