import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './index.css'
import '../../Mobile.css'
import { Link } from 'react-router-dom'
import Ads from '../../Components/Ads/Ads'
import FeedFooter from '../../Components/FeedFooter/FeedFooter'
import NotificationList from './NotificationList'
import SecondaryNav from '../../Components/SecondaryNav/SecondaryNav'
function Notification() {
    document.title="Notification | LinkedIn"
    return (
        <div>
            <NavBar />
            <div className='mt-2 headflex notificationGrid align-items-start'>
                <div className='sm-hide card p-2 gap-2 d-flex flex-column align-items-center makeSticky'>
                    <p className='heading2 makeBold'>Notification</p>
                    <p className='grey w-50 makeCenter'>You have new notification</p>
                    <div className='hr'></div>
                    <p className='grey'>Improve your notification</p>
                    <Link>View Setting</Link>
                </div>
                <div>
                   <NotificationList/>
                </div>
                <div className='sm-hide makeSticky'>
                    <Ads className="card"/>
                    <FeedFooter/>
                </div>
            </div>
            <SecondaryNav/>
        </div>
    )
}

export default Notification