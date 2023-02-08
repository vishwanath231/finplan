import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PROFILE_CARD from '../../../../assets/img/profile.png';
import './profileCart.css';


const ProfileChartCard = () => {

    return (
            <Link to='/profile' className=''>
                <div className='profileChart_container'>
                        <div className='profileChart_box'>
                            <div>
                                <img src={PROFILE_CARD} alt="profile_image" className='dashboardProfile_img' />
                            </div>
                            <div className='dashboardProfile_info'>
                                <h5>Vishwanath</h5>
                                <h6>vishwanathvishwabai@gmail.com</h6>
                                <p>6385213119</p>
                            </div>
                        </div>
                </div>
            </Link>

        
    )
}

export default ProfileChartCard;