import Image from 'next/image';
import styles from '../../components/layout.module.css';
import utilstyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';

const Resume = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className="grid justify">
          <h1 className={utilstyles.headingXl}>Endeavors</h1>
          <h1 className={`${utilstyles.headingLg} text-primary font-semibold`}>
            <a
              href="https://t.me/FinlyTrackBot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Finly on Telegram"
              className="mr-2 inline-block h-9 w-9 overflow-hidden rounded-md align-middle"
            >
              <Image
                src="/images/finly_logo.jpg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 scale-[2.2] object-cover"
              />
            </a>
            Finly - AI Expense Tracker
            <br />
            <a href="https://t.me/FinlyTrackBot" target="_blank" rel="noopener noreferrer">
              @FinlyTrackBot
            </a>
          </h1>
          <p className={utilstyles.headingMd}>
          Built and launched Finly, a Telegram bot for tracking personal and group finances in plain text. Users just send messages like "50 coffee" or "30€ taxi yesterday", and Finly parses the amount, currency (60+ supported), and date, including relative dates like "last friday". Transactions are categorized automatically with AI, with keyword matching as a fallback. Developed the backend in Python, plus a Telegram Mini App dashboard with spending trends, transaction history, and budget progress. Added timezone-aware daily reminders and a Monday weekly summary. Monetized with a freemium model, where premium plans paid with Telegram Stars or card unlock budgets with spending alerts, color-coded Excel and CSV export, and editing. I keep developing Finly with AI coding tools like Cursor and Claude Code, which help me ship new features quickly.
          </p>
          <h1 className={`${utilstyles.headingXl} justify-self-center `}>Work Experience</h1>
          <h1 className={utilstyles.headingLg}>Software Engineer</h1>
          <h3 className={`${utilstyles.headingMd} text-primary font-semibold`}>SolidCore.ai</h3>
          <h3 className="font-semibold text-gray-small">April 2025 – Present · Remote</h3>
          <p className={utilstyles.headingMd}>
            At SolidCore.ai, I work across the full stack building and maintaining production infrastructure for an AI-native platform.
            I led a refactoring initiative to centralize database operations into a single SQLAlchemy mixin across 20 classes, removing 150+ lines of duplicate code and reducing bug blast radius to a single source of truth.
            I built Temporal workflows to sync and process AWS resource data (Bedrock, CloudTrail, Guardrails) into PostgreSQL using Pydantic and SQLAlchemy, running reliably across multiple enterprise deployments.
            I designed and implemented a row reaping mechanism in a Temporal workflow to automatically purge stale processed records, reducing long-term database storage growth at scale.
            I patched 20+ critical and high-severity CVEs across frontend and backend Docker images on ECR by upgrading base Node and Alpine images.
            I provisioned CloudWatch alarms for customer-facing AWS resources using OpenTofu (Terraform), improving observability and satisfying Drata SOC2 compliance requirements.
            I designed and implemented a user management system with Auth0, including RBAC, MFA, and email invitation flows.
            I built dashboard pages and data tables in Next.js, and upgraded the app from v15 to v16 by auditing breaking changes, applying codemods, and manually verifying edge cases.
          </p>

          <h1 className={utilstyles.headingLg}>Software Development Engineer</h1>
          <h3 className={`${utilstyles.headingMd} text-primary font-semibold`}> Workday Inc</h3>
          <h3 className="font-semibold text-gray-small"> June 2022 - February 2025</h3>
          <p className={utilstyles.headingMd}>
          At Workday, I drove CI/CD optimization and test infrastructure enhancements, enabling faster, more reliable software releases. I led the design and implementation of a CI/CD Metrics Collection system, improving pipeline performance visibility and empowering leadership with data-driven release decisions. By automating KPI extraction, I boosted build monitoring efficiency by 40%, reducing manual effort. I also spearheaded a private cloud migration, cutting CI/CD maintenance by 50% and improving execution stability by 30%. Through historical trend analysis, I collaborated with cross-functional teams to reduce average build times by 20% and lower failure rates. Additionally, I developed an automated data pipeline for performance monitoring, saving 5+ hours per week in manual reporting and enhancing incident response times. My work ensures scalable, efficient, and high-performing CI/CD infrastructure at Workday.
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
          <h1 className={utilstyles.headingLg}>Simon Fraser University</h1>
          <div>
            <h2 className="text-primary font-semibold">Bachelors of Science, Computing Science</h2>
            <h2 className="jusitfy-self-end">2017 - 2021</h2>
          </div>
          <p>Dean's Honor Roll</p>

          <h1 className={`${utilstyles.headingXl} justify-self-center`}>Technical Projects</h1>
          <h1 className={`${utilstyles.headingLg} text-primary font-semibold`}>E-COMMERCE ONLINE BOOKSTORE</h1>
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
