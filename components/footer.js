import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  //   return (
  //     <div className="bg-primary text-white text-sm py-10 px-3 mt-0">
  //       <div className="container flex flex-col item-center text-center mb-4">
  //         <div className="mt-1 mb-4">
  //           <a
  //             className="hover:text-blue-400 mx-2 p-1"
  //             aria-label="Twitter"
  //             href="https://twitter.com/manosim_"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Twitter
  //           </a>
  //           <a
  //             className="hover:text-blue-400 mx-2 p-1"
  //             aria-label="Github"
  //             href="https://github.com/manosim"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Github
  //           </a>
  //           <a
  //             className="hover:text-blue-400 mx-2 p-1"
  //             aria-label="Github"
  //             href="https://uk.linkedin.com/in/manosim"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             LinkedIn
  //           </a>
  //         </div>
  //         <div className="my-3">
  //           Copyright ©{' '}
  //           <a className="hover:text-blue-400" href="https://www.manos.im/">
  //             Kassymkhan Bekbolatov
  //           </a>{' '}
  //           {new Date().getFullYear()}.
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="bg-primary text-white text-sm py-10 px-3 mt-0">
      <div className="container flex flex-col item-center text-center">
        <div className="mt-1 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kasymkhan_bkb"
            aria-label="Twitter"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faTwitter} fixedWidth className="text-2xl" />
            {/* <FontAwesomeIcon icon={faCoffee} fixedWidth className="text-2xl" /> */}
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Kassymkhan919"
            aria-label="GitHub"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth className="text-2xl" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kassymkhanb/"
            aria-label="Linked In"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth className="text-2xl" />
          </a>
        </div>

        <div className="my-3">
          Copyright ©{' '}
          <a className="hover:text-blue-400" href="https://www.manos.im/">
            Kassymkhan Bekbolatov
          </a>{' '}
          {new Date().getFullYear()}.
        </div>
      </div>
    </div>
  );
};
