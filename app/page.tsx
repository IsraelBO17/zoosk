/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from 'react';

export default function Home() {

  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <div className={`${menu ? '' : 'hidden'} fixed bg-[#cbd3dfcc] h-full w-full overflow-y-auto top-0 right-0 bottom-0 left-0 z-50`} onClick={toggleMenu}>
        <div className='bg-white mx-auto p-6 w-full lg:w-[514px] lg:mr-0 lg:p-10'>
          <header className='flex justify-between items-center mb-7 lg:mb-16'>
            <Image alt='Heart' src='/heart-red.svg' width={40} height={35} className='w-[27px] h-[24px] lg:w-10 lg:h-9' />
            <CgClose className=' text-[#7f8b96] w-8 h-8 lg:w-9 lg:h-9' onClick={toggleMenu} />
          </header>
          <nav className='mb-10 lg:mb-14'>
            <ul className='mb-8 list-none leading-6 text-[#374756] font-medium text-lg m-0 p-0 text-center lg:text-left'>
              <li className='mb-4'><Link href='/' className=''>About Zoosk</Link></li>
              <li className='mb-4'><Link href='/' className=''>Help Center</Link></li>
              <li className='mb-4'><Link href='/' className=''>Dating and Relationship</Link></li>
              <li className='mb-4'><Link href='/' className=''>Press</Link></li>
            </ul>
            <ul className='mb-8 list-none leading-6 text-[#7f8b96] font-medium text-lg m-0 p-0 text-center lg:text-left'>
              <li className='mb-4'><Link href='/' className=''>Privacy</Link></li>
              <li className='mb-4'><Link href='/' className=''>Safety</Link></li>
              <li className='mb-4'><Link href='/' className=''>Terms of Use</Link></li>
            </ul>
          </nav>
          <div className='flex mb-10 justify-around lg:justify-normal lg:mb-16'>
            <Link href='' className='' ><Image alt='Google Play' src='/google-play.svg' className='w-[135px] h-[40px]' width={135} height={40} /></Link>
          </div>
          <footer>
            <div className='flex items-center justify-center space-x-8 text-4xl font-semibold mb-12 lg:justify-normal lg:mb-24'>
              <Link href='/'><FaFacebook /></Link>
              <Link href='/'><FaInstagramSquare /></Link>
              <Link href='/'><FaTwitterSquare /></Link>
            </div>
            <div className='flex flex-col-reverse justify-between items-center lg:flex-row lg:justify-between'>
              <span className='text-[#374756] text-lg font-medium'>© 2023 Zoosk</span>
              <div className='mb-14 lg:mb-0'>
                <select name="language" id="language" className='border border-[#b5bed6] rounded-lg min-w-52 py-2 pr-12 pl-6 leading-6 font-medium text-base bg-[url("/dropdown-menu.svg")] bg-[right_9px_center] bg-no-repeat bg-[#f4f4f4]'>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="it">Italiano</option>
                  <option value="pt">Português</option>
                  <option value="ja">日本語</option>
                  <option value="ko">한국어</option>
                  <option value="zh">中文(简体)</option>
                  <option value="zh_TW">中文(繁體)</option>
                </select>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <main className="bg-white h-screen relative">
        <div className='container pb-8 bg-login-bg bg-no-repeat bg-[center_bottom] lg:w-full lg:max-w-full lg:mx-auto lg:px-0'>
          <header className='flex py-3.5 px-4 items-center lg:w-[90%] lg:mx-auto lg:p-0 lg:pt-5'>
            <Image alt='Zoosk Logo' src='/zoosk-heart-logo.svg' width={100} height={24} className='w-[155px] h-[54px]' />
            <div className='flex-grow'>
              <div className='flex items-center justify-end space-x-5 lg:space-x-12'>
                <Link href='/' className='text-xl font-medium'>Sign Up</Link>
                <button className='text-[#374756] text-sm font-bold' onClick={toggleMenu}><FiMenu className='w-8 h-8'/></button>
              </div>
            </div>
          </header>

          <div className='max-w-[450px] w-full mx-auto mb-20 p-8 pt-14 bg-form-bg bg-no-repeat bg-[center_top] bg-white shadow-lg drop-shadow-xl rounded-lg'>
            <form action="" className='flex flex-col text-[#5a6978] gap-y-4'>
              <div className='flex flex-col'>
                <label htmlFor="email" className='mb-2 leading-6'>Email Address:</label>
                <input type="email" name="Email" id="email" className='h-11 border border-solid border-transparent shadow-inner py-2.5 px-5 font-medium bg-[#e8eaee] rounded-md' placeholder='name@email.com' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="password" className='mb-2 leading-6'>Password:</label>
                <input type="password" name="password" id="password" className='h-11 border border-solid border-transparent shadow-inner py-2.5 px-5 font-medium bg-[#e8eaee] rounded-md' placeholder='name@email.com' />
              </div>
              <Link href='/' className='my-4 text-center font-medium'>Forgot password?</Link>
              <button disabled className={`text-white bg-[#19b7ea] font-medium py-3.5 rounded-3xl`}>Log In</button>
              <div className='block relative text-center before:absolute before:top-1/2 before:bg-[#7f8b96] before:h-[1px] before:w-1/4 before:left-[10%] after:absolute after:top-1/2 after:bg-[#7f8b96] after:h-[1px] after:w-1/4 after:right-[10%]'>
                Or
              </div>
              <button className={`text-[#1b3e85] font-medium px-1.5 py-2.5 border border-[#969fafb3] rounded-lg flex items-center justify-center gap-x-4`}><FaFacebook className='w-7 h-7' />Log in with Facebook*</button>
              <button className={`text-[#1b3e85] font-medium px-5 border border-[#969fafb3] rounded-lg text-center h-11`}>
                <span className='relative px-5 before:absolute before:w-6 before:h-6 before:bg-[url("/google-logo.svg")] before:bg-center before:bg-cover before:bg-no-repeat before:-left-4 before:-top-1'> Log in with Google*</span>
              </button>
              <div className='text-xs text-[#7f8b96] text-left leading-5'>
                *By selecting "Log in with Facebook" or "Log in with Google", you agree to our <Link href='' className="underline">Terms of Use</Link> (including the mandatory arbitration of disputes) and consent to our <Link href='' className="underline">Privacy Policy</Link>.</div>
            </form>
          </div>
        </div>
        <footer className='container text-[#374756] lg:w-[90%] lg:mx-auto lg:px-0 xl:max-w-full'>
          <h2 className='text-3xl font-semibold leading-tight mb-6 pt-12 text-center lg:hidden'>Dating made <strong className='font-semibold text-[#19b7ea]'>fun</strong> <span className='block'>... without the games.</span></h2>
          <div className='py-7 flex items-center justify-center'>
            <Link href='/'><Image alt='Google Play' src='/google-play.svg' width={140} height={40} className='w-[160px] h-[48px] lg:w-[135px] lg:h-[40px]' /></Link>
          </div>
          <h3 className='text-3xl font-light text-center mb-7'>Over <strong className='font-bold'>30 million</strong> downloads.</h3>
          <div className='flex flex-col text-center border-t border-[#c9ced3] pt-8 lg:flex-row lg:text-left'>
            <div className='flex-1 pb-10 flex flex-col space-y-4 lg:pb-0'>
              <h4 className='font-bold leading-5'>Zoosk Dating</h4>
              <Link href='/' className='font-medium'>Dating Site</Link>
              <Link href='/' className='font-medium'>iPhone Dating App</Link>
              <Link href='/' className='font-medium'>Android Dating App</Link>
              <Link href='/' className='font-medium'>Start Dating</Link>
            </div>
            <div className='flex-1 pb-10 flex flex-col space-y-4 lg:pb-0'>
              <h4 className='font-bold leading-5'>Dating and Relationship Advice</h4>
              <Link href='/' className='font-medium'>Dating Tips</Link>
              <Link href='/' className='font-medium'>Online Dating Advice</Link>
              <Link href='/' className='font-medium'>Relationship Advice</Link>
              <Link href='/' className='font-medium'>Single Life</Link>
            </div>
            <div className='flex-1 pb-10 flex flex-col space-y-4 lg:pb-0'>
              <h4 className='font-bold leading-5'>About Zoosk</h4>
              <Link href='/' className='font-medium'>About Us</Link>
              <Link href='/' className='font-medium'>Success Couples</Link>
              <Link href='/' className='font-medium'>Careers</Link>
              <Link href='/' className='font-medium'>Help</Link>
            </div>
            <div className='flex-1 pb-10 flex flex-col space-y-4 lg:pb-0'>
              <h4 className='font-bold leading-5'>Follow Zoosk</h4>
              <div className='flex items-center justify-center space-x-8 text-4xl font-semibold lg:justify-normal'>
                <Link href='/'><FaFacebook /></Link>
                <Link href='/'><FaInstagramSquare /></Link>
                <Link href='/'><FaTwitterSquare /></Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col-reverse justify-center pb-5 lg:flex-row lg:justify-between lg:items-center lg:pt-[60px]'>
            <p className='text-center leading-6 mt-7 lg:leading-5 lg:text-left lg:mt-0'> © Copyright 2007-2023 Zoosk, Inc. All rights reserved.</p>
            <div className='text-center text-[15px] lg:text-left'>
              <Link href='' className='leading-5 inline-block px-3 mb-4 border-r border-[#374756] font-medium lg:mb-0'>Accessibility</Link>
              <Link href='' className='leading-5 inline-block px-3 mb-4 border-r border-[#374756] font-medium lg:mb-0'>Safety</Link>
              <Link href='' className='leading-5 inline-block px-3 mb-4 border-r border-[#374756] font-medium lg:mb-0'>Terms of Service</Link>
              <Link href='' className='leading-5 inline-block px-3 mb-4 border-r border-[#374756] font-medium lg:mb-0'>Privacy</Link>
              <Link href='' className='leading-5 inline-block px-3 mb-4 border-r border-[#374756] font-medium lg:mb-0'>Imprint</Link>
            </div>
          </div>
          <div className='pb-14 text-xs font-bold leading-4 flex flex-col-reverse justify-center'>
            <span>ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON THE MEMBERS OR THE SUBSCRIBERS OF THIS WEBSITE.<br /> HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY. BY SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR <Link href='/' className='text-[#1379de] font-medium'> ONLINE DATING SAFETY TIPS</Link>.</span>
          </div>
        </footer>
      </main>
    </>
  )
}
