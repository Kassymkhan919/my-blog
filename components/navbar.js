import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

var menu = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
  { name: 'resume', path: '/resume' },
  { name: 'about me', path: '/posts/newintro' },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-primary p-1">
      <div className="container flex flex-col lg:flex-row items-center justify-between flex-wrap my-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
          <a href="/">
            <Image src="/images/KB-logo-black.svg" alt="KB Logo" width={70} height={70} className="logo" />
          </a>
        </div>

        <div className="w-full block flex flex-1 justify-center items-center lg:justify-end lg:w-auto mt-5 lg:mt-0 ">
          <ul className="flex flex-row list-none ">
            {menu.map((item) => (
              <li key={item.name.toLowerCase()}>
                <Link href={item.path}>
                  <a
                    className={`px-2 py-3 lg:inline-block lg:mt-0 lowercase hover:text-blue-400 ${
                      item.path === router.asPath ? 'text-gray-500' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
