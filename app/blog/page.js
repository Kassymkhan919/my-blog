import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';
import styles from '../../components/layout.module.css';
import { getSortedPostsData } from '../../lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();
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
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}
