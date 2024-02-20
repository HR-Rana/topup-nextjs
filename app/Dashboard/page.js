"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from '@/app/Assist/Images/logo.png'
import DeshboardContent from './Common/DeshboardContent';
import { OrderData, OrderDetails, TransactionHeading, TransactionsDetails } from '../Components/TableData/Data';
import AddBalance from './Common/AddBalance';
import Link from 'next/link'
import { FaHistory } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Topbar from './Common/Topbar';
import { IoMdNotifications } from "react-icons/io";




export default function page() {
  const [openSidebar, setSidebar] = useState(true)

  const handleSidebar = () => {
    console.log("handlesidebar clicked..!", setSidebar);
    setSidebar(!openSidebar);
  }

  return (
    <div className='Dashboard-page'>
      <div className="layout">
        <div className="main-content">
          <Tabs>
            {
              openSidebar ? <div className="left-sitebar">
                <div className="sidebar-logo">
                  <Image src={logo} width={100} alt="logo" />
                </div>
                <TabList>
                  <Tab><span><FaShoppingCart /> Oders</span></Tab>
                  <Tab><Link href={"/"}><span><FaGift /> Offers</span></Link></Tab>
                  <Tab><span><IoMdNotifications /> Notification</span></Tab>
                  <Tab><span><FaMoneyBillWave /> Add Balance</span></Tab>
                  <Tab><span> <FaHistory /> Transaction History</span></Tab>
                  <Tab><span><IoLogOut /> Logout</span></Tab>
                </TabList>
              </div> : null

            }
            <TabPanel>
              <section>
                <Topbar title={'Order History'} handleSidebar={handleSidebar} />
                <DeshboardContent theading={OrderData} tbody={OrderDetails} />
              </section>
            </TabPanel>

            <TabPanel>

            </TabPanel>

            <TabPanel>
              <section className="notificaton-page">
                <Topbar title={"Notifications"} handleSidebar={handleSidebar} />
                <DeshboardContent notice={"hello js world"} />
              </section>
            </TabPanel>

            <TabPanel>
              <section className="add-balance-setion">
                <Topbar handleSidebar={handleSidebar} />
                <AddBalance />
              </section>
            </TabPanel>

            <TabPanel>
              <section>
                <Topbar title={"Transaction History"} handleSidebar={handleSidebar} />
                <DeshboardContent theading={TransactionHeading} tbody={TransactionsDetails} />
              </section>
            </TabPanel>

            <TabPanel>
              logout page
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

