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
          <h1 className={utilstyles.headingLg}>Software Developement Engineer</h1>
          <h3 className={`${utilstyles.headingMd} text-primary font-semibold`}> Workday Inc</h3>
          <h3 className="font-semibold text-gray-small"> June 2022 - Present</h3>
          <p className={utilstyles.headingMd}>
          At Workday, I drive CI/CD optimization and test infrastructure enhancements, enabling faster, more reliable software releases. I led the design and implementation of a CI/CD Metrics Collection system, improving pipeline performance visibility and empowering leadership with data-driven release decisions. By automating KPI extraction, I boosted build monitoring efficiency by 40%, reducing manual effort. I also spearheaded a private cloud migration, cutting CI/CD maintenance by 50% and improving execution stability by 30%. Through historical trend analysis, I collaborated with cross-functional teams to reduce average build times by 20% and lower failure rates. Additionally, I developed an automated data pipeline for performance monitoring, saving 5+ hours per week in manual reporting and enhancing incident response times. My work ensures scalable, efficient, and high-performing CI/CD infrastructure at Workday.
          </p>

          <h1 className={utilstyles.headingLg}>Software Engineer</h1>
          <h3 className={`${utilstyles.headingMd} text-primary font-semibold`}> Craver Tech</h3>
          <h3 className="font-semibold text-gray-small"> September 2021- April 2022</h3>
          <p className={utilstyles.headingMd}>
          At Craver Solutions, I contributed to scalable backend development and automation, enhancing system efficiency and developer experience. I engineered asynchronous email processing, boosting delivery speed by 85% and improving system scalability. I also automated build and deployment pipelines using Bitrise, accelerating release cycles and reducing manual effort. As a key team member, I led developer onboarding, cutting ramp-up time by 50%, and actively drove quarterly planning, defining high-impact engineering goals. Additionally, I maintained and enhanced Confluence documentation, streamlining knowledge sharing and issue resolution across teams.
          </p>

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
