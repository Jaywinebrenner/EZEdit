
"use client";
import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const SideBar = () => {

  const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-column gap-4 sidebar-wrapper'>
          <div className='logo-wrapper'>
            <Link href="/" className='sidebar-long'>
                <h2 className='logo-text'>EZEdit</h2>
            </Link>
            <h2 className='site-description'>AI-Powered Image Editing</h2>
          </div>
          <nav className='sidebar-nav'>
            <SignedIn>
              <ul className='sidebar-nav_elements'>
                {navLinks.map((link, i) => {
                  const isActive = link.route === pathname
                     return (
                      <li className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`} key={`nav-link-key=${i}`}>
                        <Link className='sidebar-link' href={link.route}>
                          <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}/>
                          {link.label}
                        </Link>
                      </li>
                     )
                })}

              </ul>

            </SignedIn>
            
          </nav>

        </div>

    </aside>
  )
}

export default SideBar