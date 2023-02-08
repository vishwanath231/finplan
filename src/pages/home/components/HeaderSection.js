import React from 'react';
import HEADER_IMAGE from '../../../assets/img/img-1.png';
import HEADER_IMAGE_TWO from '../../../assets/img/img-2.png';
import './header_section.css';


const HeaderSection = () => {
    return (
        <div>
            <div className='header_section'>
                <div className=''>
                    <h2 className='text-black text-center' style={{ margin: '0 auto' }}>India's only product for financial and Investment advice on the go!</h2>
                </div>
                <div className=''>
                    <img src={HEADER_IMAGE} alt="header_img" style={{ width: '100%', objectFit: 'contain' }} />
                </div>
            </div>
            <div className='header_section'>
                <div className=''>
                    <img src={HEADER_IMAGE_TWO} alt="header_img" style={{ width: '100%', objectFit: 'contain' }} />
                </div>
                <div className=''>
                    <h2 className='text-black text-center' style={{ margin: '0 auto' }}>"Count on us at every stage of your financial journey"</h2>
                    <p>Finplan simplifies financial planning with effective, technologically-backed advisory services</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;