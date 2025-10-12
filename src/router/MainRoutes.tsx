import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/home/HomePage';
import AboutPage from '../components/pages/aboutClothes/AboutPage';
import Admin from '../components/pages/admin/Admin';
import CartPage from '../components/pages/cart/CartPage';
import EditPage from '../components/pages/edit/EditPage';
import Clothes from '../components/pages/сlothes/Clothes';
import ContactPage from '../components/pages/contact/ContactPage';
import RegisterPage from '../components/pages/register/RegisterPage';
import LoginPage from '../components/pages/login/LoginPage';

const MainRoutes = () => {
       const route = [
        {link: "/" , element: <HomePage/>},
        {link: "/about/:id" , element: <AboutPage/>},
        {link: "/admin" , element: <Admin/>},
        {link: "/cart" , element: <CartPage/>},
        {link: "/edit/:id" , element: <EditPage/>},
        {link: "/onlyClothes/:id" , element: <Clothes/>},
        {link: "/contact" , element: <ContactPage/>},
        {link: "/register" , element: <RegisterPage/>},
        {link: "/login" , element: <LoginPage/>},
    ]
    return (
        <Routes>
            {
                route.map((item , idx) => <Route key={idx} path={item.link} element={item.element}/>)
            }
        </Routes>
    );
};

export default MainRoutes;