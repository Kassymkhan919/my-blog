import React from 'react';
import styles from '../components/layout.module.css';
import utilstyles from '../styles/utils.module.css';
import Layout from '../components/layout';

const Resume = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className="grid justify">
          <h1 className={`${utilstyles.headingXl} justify-self-center `}>Work Experience</h1>
          <h1 className={utilstyles.headingLg}>Software Engineer</h1>
          <h3 className={`${utilstyles.headingMd} text-primary font-semibold`}> BioInteractive Tech</h3>
          <h3 className="font-semibold text-gray-small"> September 2020- April 2021</h3>
          <p className={utilstyles.headingMd}>
            Working as a junior software engineer at BIT, I Created interface to connect iOS devices to Bluetooth low
            energy peripheral to allow app exchange data. Designed UI using Xamarin for iOS, Android, macOS and UWP for
            efficient navigation in the app. Built custom image carousel for the cross-platform app in Xamarin to scroll
            images on the screen. Created persistent data in iOS, Android, macOS, UWP to save the current state of the
            app in device memory.
          </p>

          <h2 className={utilstyles.headingLg}>Full Stack Developer </h2>
          <h3 className={`${utilstyles.headingMd} text-primary font-semibold`}> Amcama Software Innovations</h3>
          <h3 className="font-semibold text-gray-small"> February 2018- August 2018</h3>
          <p className={`${utilstyles.headingMd}`}>
            Interning as a full-stack developer in the Amcama, I built a web app to help inspect buildings for fire
            risk. I quickly learned Angular and .Net frameworks and started building the app. I used Google Maps API to
            help inspectors navigate the buildings in the app and automated unit tests to reduce the number of bugs by
            20%.
          </p>

          <h1 className={`${utilstyles.headingXl} justify-self-center`}>Education</h1>
          <h1 className={utilstyles.headingLg}>Simon Fraser Univeristy</h1>
          <div>
            <h2 className="text-primary font-semibold">Bachelors of Science, Computing Science</h2>
            <h2 className="jusitfy-self-end">2017 - 2021</h2>
          </div>
          <p>Dean's Honor Roll</p>

          <h1 className={`${utilstyles.headingXl} justify-self-center`}>Technical Projects</h1>
          <h1 className={`${utilstyles.headingLg} text-primary font-semibold`}>E-COMMERECE ONLINE BOOKSTORE</h1>
          <p>
            Created online platform using Django to allow users to buy and sell books online. Built front-end/back-end
            for book listing page and functionality for sellers to add books to sell. As product owner led team of 5 to
            successfully launch app and receive recognition from professor
          </p>

          <h1 className={`${utilstyles.headingLg} text-primary font-semibold`}>ANALYSIS OF HAPPINESS FACTORS</h1>
          <p>
            Analyzed data of countries with highest happiness rankings to determine most important factors that affect
            happiness and predict happiness of countries in the future. Based on happiness data of the countries
            predicted ranking of the neighboring countries. Transformed raw data into linear regression ML models to
            predict future country happiness rate. Achieved 98% of accuracy in predicting training data using linear
            regression model and 94% in predicting test data
          </p>

          <h1 className={`${utilstyles.headingLg} text-primary font-semibold`}>HABIT TRACKING MOBILE APP</h1>
          <p>
            Designed middle-fidelity prototype of mobile app using Figma to allow users create habits. Identified and
            gathered requirements from potential users to better fit the needs of the users. Conducted user-centered
            design interviews and identified disadvantages of the existing habit-forming apps.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
