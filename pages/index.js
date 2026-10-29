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

          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-gray-400">Get in touch</p>
            <p className="mt-3 text-lg">
              I'm currently open to new opportunities.{' '}
              <a className="text-company hover:text-company-dark underline" href="mailto:kasymhan007@gmail.com">
                kasymhan007@gmail.com
              </a>
            </p>
            <p className="mt-2 text-lg">
              Or find me on{' '}
              <a className="text-company hover:text-company-dark underline" href="https://github.com/Kassymkhan919" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              and{' '}
              <a className="text-company hover:text-company-dark underline" href="https://www.linkedin.com/in/kassymkhanb/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              .
            </p>
          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
