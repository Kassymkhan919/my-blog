import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout home>
      <div className="flex flex-1 flex-col justify-center items-center bg-primary text-white">
        <div className="max-w-xl mx-12 my-32">
          <h1 className="font-display text-5xl">Hello, I'm Kasym.</h1>
          <div className="mt-4 font-semibold text-xl font-extra">
            <p className="text-company">Full-Stack and Infrastructure </p> Software Engineer{''}
            {/* <a className="text-company hover:text-company-dark" href="#" target="_self" rel="noopener noreferrer">
              Google
            </a> */}
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
