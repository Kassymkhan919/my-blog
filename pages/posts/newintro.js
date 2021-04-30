import React from 'react';
import Layout from '../../components/layout';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';

const IndexPage = () => {
  return (
    <Layout aboutme>
      <div className="flex flex-1 flex-col justify-center items-center bg-primary text-white">
        <div className="max-w-xl mx-12 my-32">
          <h1 className="font-display text-5xl">Hello, I'm Kasym.</h1>
          <div className="mt-4 font-light text-xl  font-extra">
            Software Engineer at{' '}
            <a
              className="text-company hover:text-company-dark"
              href="https://www.formidable.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
            , Vancouver
          </div>

          <div className="mt-2 font-light text-sm  font-extra">
            Previously at{' '}
            <a
              className="text-gray-500 hover:text-blue-hover"
              href="https://www.thetimes.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BioInteractive Tech
            </a>
            ,{' '}
            <a
              className="text-gray-500 hover:text-blue-hover"
              href="https://www.news.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amcama
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
