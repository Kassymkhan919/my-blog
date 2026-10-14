import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="bg-primary text-white text-sm pb-8">
      <div className="container flex flex-col item-center text-center">
        <div className="mt-1 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kasymkhan_bkb"
            aria-label="Twitter"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Kassymkhan919"
            aria-label="GitHub"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kassymkhanb/"
            aria-label="Linked In"
            className="hover:text-blue-400 mx-2 p-1"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </a>
        </div>

        <div className="my-3">
          Copyright ©{' '}
          <a className="hover:text-blue-400" href="/">
            Kassymkhan Bekbolatov
          </a>{' '}
          {new Date().getFullYear()}.
        </div>
      </div>
    </div>
  );
};
