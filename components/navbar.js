import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="bg-primary p-1">
      <div className="container flex flex-col lg:flex-row items-center justify-between flex-wrap my-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:ml-32 ">
          <a href="/">
            <Image src="/images/KB-logo-black.svg" alt="KB Logo" width={70} height={70} className="logo" />
          </a>
        </div>

        <div className="w-full block flex flex-1 justify-center items-center lg:justify-end lg:w-auto mt-5 lg:mt-0 ">
          <ul className="flex flex-row list-none lg:mr-48">
            <li>
              <Link href="/">
                <a
                  aria-current="page"
                  className="px-2 py-3 lg:inline-block lg:mt-0 lowercase text-gray-500 hover:text-blue-hover"
                >
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/blog">
                <a className="px-2 py-3 lg:inline-block lg:mt-0 lowercase text-white hover:text-black">Blog</a>
              </Link>
            </li>

            <li>
              <Link href="/posts/newintro">
                <a className="px-2 py-3 lg:inline-block lg:mt-0 lowercase text-white hover:text-blue-400">About Me</a>
              </Link>
            </li>

            {/* <li>
              <Link href="/">
                <a className="px-2 py-3 lg:inline-block lg:mt-0 lowercase hover:text-blue-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/newintro">
                <a className="px-2 py-3 lg:inline-block lg:mt-0 lowercase hover:text-blue-400"> Intro</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="bg-primary">
    //   <div className="container flex flex-col lg:flex-row items-center justify-between flex-wrap my-6">
    //     <div className="flex items-center flex-shrink-0 text-white mr-6">
    //       <a href="/">
    //         <img className="logo" src="/images/logo.svg" alt="KB Logo" />
    //       </a>
    //     </div>

    //     <div className="w-full block flex flex-1 justify-center items-center lg:justify-end lg:w-auto mt-5 lg:mt-0">
    //       <ul className="flex flex-row list-none">
    //         <li>
    //           <Link className="px-2 py-3 lg:inline-block lg:mt-0 lowercase text-white hover:text-blue-400" href="/">
    //             <a>Home</a>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             className="px-2 py-3 lg:inline-block lg:mt-0 lowercase text-white hover:text-blue-400"
    //             href="/posts/newintro"
    //           >
    //             <a>Intro</a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
