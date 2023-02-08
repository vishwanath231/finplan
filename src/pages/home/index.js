import React from 'react'
import HeaderSection from './components/HeaderSection';
import NavbarComponent from './components/Navbar';

const Home = () => {
    return (
        <div className='' style={{background: '#fff'}}>
            <NavbarComponent />
            <div className='container'>
                <HeaderSection />
            </div>
        </div>
    )
}

export default Home;