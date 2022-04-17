import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout home>
      <div className="flex flex-1 flex-col justify-center items-center bg-primary text-white">
        <div className="max-w-xl mx-12 my-32">
          <h1 className="font-display text-5xl">Hello, I'm Kasym.</h1>
          <div className="mt-4 font-light text-xl  font-extra">
            <p className="text-company">Front-end and iOS</p> Software Developer{''}
            {/* <a className="text-company hover:text-company-dark" href="#" target="_self" rel="noopener noreferrer">
              Google
            </a> */}
            , Vancouver
          </div>

          <div className="mt-2 font-light text-sm  font-extra">
            Previously at {''}
            {/* <h3 className="text-gray-500 hover:text-blue-hover">BioInteractive Tech</h3> */}
            <a className="text-gray-500 hover:text-blue-hover" href="https://www.tenzrhealth.com/" target="_blank" rel="noopener noreferrer">
              BioInteractive Tech
            </a>
            ,{' '}
            <a className="text-gray-500 hover:text-blue-hover" href="#" target="_self" rel="noopener noreferrer">
              Amcama
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
