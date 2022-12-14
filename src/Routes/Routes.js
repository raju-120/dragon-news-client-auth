import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Categorys/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Others/Profile/Profile";
import TermsAndCondition from "../Pages/Others/TermsAndCondition/TermsAndCondition";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-flame-two.vercel.app/news')
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-flame-two.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-flame-two.vercel.app/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
        ]
    }
])