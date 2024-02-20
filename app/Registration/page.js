"use client"

import Link from 'next/link'
import React from 'react'
import Input from '../Components/Elements/Input'
import Image from 'next/image'
import logo from '@/app/Assist/Images/logo.png'

export default function page() {
  return (
    <div className='login-area signup-area'>
      <div className="login-content-box">
        <Link href="/" class="flex mx-auto"> <Image src={logo} width={100} height={100} alt="logo" /> </Link>
        <h3>Registration  </h3>
        <br />
        <p><Link href={"/Login"} >Have any Account? <b>Login</b> </Link></p>
        <form className='block my-5'>
          <span>
            <label htmlFor='name'>Full Name</label>
            <Input type={'text'} placeholder={"Full Name"} id='name' />
          </span><br /><br />
          <span>
            <label htmlFor='num'>Mobile Number</label>
            <Input type={'number'} placeholder={"Number"} id={'num'} />
          </span><br /><br />
          <span>
            <label htmlFor='Password'>Password</label>
            <Input type={"password"} placeholder={"Password"} id={"Passowrd"} />
          </span>
          <span>
            <Input type={"submit"} value={"Registration"} />
          </span>
        </form>
      </div>
    </div>
  )
}
