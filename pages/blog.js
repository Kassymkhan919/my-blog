import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import styles from '../components/layout.module.css';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.container}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData &&
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                {/* {id}
              <br />
              {date} */}
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
