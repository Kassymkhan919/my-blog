import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../components/layout.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>{postData.title}</Head>

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

// needed to get paths for pages
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// needed to get content for pages
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
