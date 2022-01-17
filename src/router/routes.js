import AboutUs from "../pages/AboutUs";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', component: AboutUs, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true}
]
