
"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = () => {


  const pathname = usePathname()


  return (

    <header className='header'>
      <Link href="/" className='mobi-wrap'>

        <h2 className='logo-text'>EZEdit</h2>
        <nav className='flex gap-2'>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
            <Sheet>
            <SheetTrigger>
              <Image className='cursor-pointer' src="/assets/icons/menu.svg" alt="hamburger" height={32} width={32}/>
            </SheetTrigger>
            <SheetContent className='shett-content sm:w-64'>
              <>
              <h2 className='logo-text'>EZEdit</h2>
              </>

              <ul className='header-nav_elements'>
                {navLinks.map((link, i) => {
                  const isActive = link.route === pathname
                     return (
                      <li className={`p-18 flex whitespace-nowrap text-dark-700 ${isActive && 'gradient-text'}`} key={`nav-link-key=${i}`}>
                        <Link className='sidebar-link' href={link.route}>
                          <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                     )
                })}
                <li className='flex-center cursor-pointer gap-2 p-4'>
                  <UserButton afterSignOutUrl='/' showName/>
                </li>
              </ul>

     

  

            </SheetContent>
          </Sheet>
          </SignedIn>

        </nav>
    

      </Link>

    </header>

  )
}

export default MobileNav