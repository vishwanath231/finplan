import React from 'react'
import { Card, CardBody } from 'reactstrap';
import PROFILE from '../../../assets/img/profile.png';
import './profile_card.css';

const ProfileCardDashboard = () => {
    return (
        <div>
            <Card>
                <CardBody className='profileCard_dash'>
                        <div className=''>
                            <div className='profileCard_dash_img'>
                                <img src={PROFILE} alt="" />
                            </div>
                            <div className='profileCard_user_info'>
                                <h5>Venkat</h5>
                                <p>Engineer | Age 37</p>
                                <div>#123, HSR Layout, 15th main, Bangalore, Karnataka</div>
                            </div>
                        <div className='profileCard_user_infos'>
                            <div className='profileCard_user_age'>
                                    <div>Retirement Age</div>
                                    <div>Status</div>
                                </div>
                            <div className='profileCard_user_status'>
                                    <div>60</div>
                                    <div>Active</div>
                                </div>
                            </div>
                        </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProfileCardDashboard;