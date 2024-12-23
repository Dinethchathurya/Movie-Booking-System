import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrderDetails from '../components/OrderDetails';
const MyAccount = () => {
    return(
        <div>
            <Navbar/>
            <OrderDetails/>
            <Footer/>
        </div>
    );
}

export default MyAccount;