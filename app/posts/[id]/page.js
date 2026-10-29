import Layout from '../../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';
import styles from '../../../components/layout.module.css';

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return { title: postData.title };
}

export async function generateStaticParams() {
  return getAllPostIds().map((p) => p.params);
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <Layout>
      <div className={styles.container}>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <br />
        </article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}
