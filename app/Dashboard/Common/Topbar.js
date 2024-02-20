"use client"

import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


const Topbar = ({ title, handleSidebar }) => {
    return (
        <div className='dashboard-page-heading'>
            <div className='dashboard-topbar'>
                <div>
                    <span onClick={() => { handleSidebar() }}><FaBars /></span>
                </div>
                <div className='profile flex items-center'>
                    <span className='flex gap-2'>
                        <h6>User-name</h6>
                        <FaUserCircle />
                    </span>
                </div>
            </div>
            <div>
                <h4>{title}</h4><br /> {
                    title ? <hr /> : null

                }
            </div>
        </div>
    );
}

export default Topbar;
