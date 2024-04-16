"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="mobi-wrap">
        <Link href="/" passHref legacyBehavior>
          <a className="logo-text">EZEdit</a>
        </Link>
        <nav className="flex gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {/* Insert your Sheet component here */}
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover" variant="outline">
              <Link href="/sign-in" passHref legacyBehavior>
                <a>Login</a>
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>

      {/* Sheet content should be rendered outside of the 'nav' element */}
      {/* Make sure to adjust SheetTrigger and SheetContent components accordingly */}
      {/* Example: */}
      {/* <Sheet>
        <SheetTrigger>
          <Image className="cursor-pointer" src="/assets/icons/menu.svg" alt="hamburger" height={32} width={32} />
        </SheetTrigger>
        <SheetContent className="sheet-content sm:w-64">
          <h2 className="logo-text">EZEdit</h2>
          <ul className="header-nav_elements">
            {navLinks.map((link, i) => {
              const isActive = link.route === pathname;
              return (
                <li className={`p-18 flex whitespace-nowrap text-dark-700 ${isActive ? 'gradient-text' : ''}`} key={`nav-link-key=${i}`}>
                  <Link href={link.route} passHref>
                    <a className="sidebar-link cursor-pointer">
                      <Image src={link.icon} alt="logo" width={24} height={24} />
                      {link.label}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="flex-center cursor-pointer gap-2 p-4">
              <UserButton afterSignOutUrl="/" showName />
            </li>
          </ul>
        </SheetContent>
      </Sheet> */}
    </header>
  );
};

export default MobileNav;
