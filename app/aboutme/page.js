import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { siteTitle } from '../../components/layout';

export const metadata = { title: siteTitle };


export default function Home() {
  return (
    <Layout aboutme>
      <section className={utilStyles.headingMd}>
        <p>I'm Kassymkhan — most people call me Kasym. I'm a software engineer working on backend and infrastructure systems, currently at SolidCore.ai. Previously I built CI/CD and observability tooling at Workday and full-stack products at Craver Tech and BioInteractive.</p>
        <p>
          I grew up in Almaty, Kazakhstan, studied computing science at SFU, and now live in Toronto. My interests sit at the intersection of data, infrastructure, and developer tooling — the unglamorous systems that have to be correct. <br /> I
          will document my learning journey here and write notes on what I like. <br />
          Enjoy!
        </p>
      </section>


    </Layout>
  );
}
