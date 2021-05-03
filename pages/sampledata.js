import React, { useEffect, useState } from 'react';
import axis from 'axios';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const SampleData = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const wrapper = {
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const content = {
    maxWidth: '480px',
  };

  const poststyle = {
    fontWeight: 'bold',
    padding: '25px 0',
    borderBottom: '1px solid #ccc',
  };

  const loading = {
    textAlign: 'center',
  };

  return (
    <div style={wrapper}>
      {posts.length > 0 ? (
        <div style={content}>
          {posts.map((post) => (
            <div style={poststyle}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={loading}> Loading..</p>
      )}
    </div>
  );
};

export default SampleData;
