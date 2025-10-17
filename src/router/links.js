import Home from "../pages/Home";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostPage},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]