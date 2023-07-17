import { Outlet } from "react-router-dom"
import Header from "../header"
import Footer from '../footer';
import Banner from '../banner';

export const UserLayout = () => {
    return <>
        <Header />
        <Banner />
        <Outlet />
        <Footer />
    </>
}
export default UserLayout