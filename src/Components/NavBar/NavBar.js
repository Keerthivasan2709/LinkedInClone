import React, { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import Input from '../Input/Input'
import { NavBarLinks } from '../../Assets/Link'
import { Link } from 'react-router-dom'
import Dropdown from '../../Pages/Dropdown'

function NavBar() {
    const [dropDown, setDropdown] = useState();
    const Icon = useRef();

    function setRef(ref) {
        setDropdown(ref)
    }
    const handleDropdown = () => {
        dropDown.current.classList.toggle("show")
    }
    useEffect(() => {
        let number = pageNavigation();
        if (number <= 4) {
            Icon.current.children[`${number}`].classList.add('active')
        }
    }, [])
    const pageNavigation = () => {
        const PathName = window.location.pathname;
        if (PathName == '/feed')
            return 0;
        else if (PathName == '/mynetwork')
            return 1;
        else if (PathName == '/jobs')
            return 2;
        else if (PathName == '/messaging')
            return 3;
        else if (PathName == '/notification')
            return 4;
        else
            return 5;
    }
    return (
        <div style={{ position: "sticky", top: "0", zIndex: '3' }}>
            <div className='background'>
                <div className='headflex navBarContainer'>
                    <div className='headflex d-flex align-items-center'>
                        <img src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/LinkedIn_Icon_naugpk.svg" className='iconImg' />
                        <div>
                            <Input className="w-100 input sm-hide" />
                        </div>
                    </div>
                    <div className='lg-hide sm-show'>
                        <Input className="w-100 input" />
                    </div>
                    <div className='lg-hide sm-show sm-end'>
                        <img className="lg-hide sm-show" src="https://res.cloudinary.com/dibccigcp/image/upload/v1664264186/Messaging_qxqkve.svg" />
                    </div>
                    <div className='d-flex justify-content-between align-items-center sm-hide ' ref={Icon}>
                        {
                            NavBarLinks.map((data, index) => {
                                return (
                                    data.name == 'vr' ? <div key={data.name} className='verticalLine'></div> :
                                        <Link key={data.name} to={data.link} className="navBarLink">
                                            <div className='d-flex flex-column align-items-center'>
                                                {index === 5 ?
                                                    <div className='profileTooltip'>
                                                        <img src={data.img} className="navBarIcons" onClick={handleDropdown} />
                                                        <div className='tooltiptext'>
                                                            <Dropdown setRef={setRef} className="" />
                                                        </div>
                                                    </div> : <img src={data.img} className="navBarIcons" />}
                                                {data.dropDownImg ?
                                                    <div className='d-flex  sm-hide'>
                                                        <div className='smallText' >{data.name}</div>
                                                        <img src={data.dropDownImg} />
                                                    </div>
                                                    :
                                                    <div className='smallText sm-hide' style={{ marginBottom: "3px" }}>{data.name}</div>
                                                }
                                            </div>
                                        </Link>
                                )
                            })
                        }
                        <Link to="/premium" className='premiumLink'>Try premium for free</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar