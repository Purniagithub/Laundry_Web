import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import BookNow from "./components/Booknow/BookNow";
import HomeCleaningBookingForm from "./components/Booknow/HomeCleaningBookingForm";
import VehicleCleaningBookingForm from "./components/Booknow/VehicleCleaningBookingForm";
import LoginForm from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./Authcontext/AuthContext";
import Profile from "./components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "services",
                element: <Services/> 
            },
            {
                path: "book",
                element: <BookNow/>   
            },
            {
                path: "Login",
                element: <LoginForm/>
            },
            {
                path: "Signup",
                element: <Signup/>
            },
            {
                path:"book-home-cleaning",
                element: <HomeCleaningBookingForm />
            },
            {
                path: "book-vehicle-cleaning",
                element:<VehicleCleaningBookingForm />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
<RouterProvider router={router}/>
</AuthProvider>
    </React.StrictMode>,
)