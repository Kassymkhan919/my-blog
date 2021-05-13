import Post from '../components/post';
import { useEffect, useState } from 'react';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Contentful = () => {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <div className="bg-white">
      {posts &&
        posts.map((p) => (
          <Post
            alt={p.fields.alt}
            date={p.fields.date}
            image={p.fields.image}
            title={p.fields.title}
            url={p.fields.url}
          />
          // <li className={utilStyles.listItem} key={id}>
          //   <Link href={'/posts/${id}'}>{title}</Link>
          //   <br />
          //   <small className={utilStyles.lightText}>
          //     <Date dateString={date} />
          //   </small>
          // </li>
        ))}
    </div>
  );
};

export default Contentful;
