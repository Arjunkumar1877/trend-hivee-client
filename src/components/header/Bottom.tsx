import React from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

const Bottom = () => {
  return (
      <Menubar className="bg-[#5F6A48] w-full rounded-none flex justify-center border-none gap-9">
        <MenubarMenu>
          <Link href="/" passHref className="text-white">
            Home
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/newarrival" passHref className="text-white">
            New Arrival
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/trending" passHref className="text-white">
            Trending
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/aboutus" passHref className="text-white">
            About Us
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="/contactus" passHref className="text-white">
            Contact Us
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/login" passHref className="text-white">
            Login
          </Link>
        </MenubarMenu>
      </Menubar>
  );
};

export default Bottom;