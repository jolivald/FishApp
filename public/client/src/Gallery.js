import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState(Array.from(posts));
  const handleChange = event => {
    const key = event.target.value;
    const sorted = Array.from(sortedPosts).sort((a, b) => a[key] > b[key]);
    setSortedPosts(sorted);
  };
  return (
    <div>
      <p>
        Trier les publications:&nbsp;
        <select onChange={handleChange}>
          <option value="createdAt">Récentes</option>
          <option value="fishSize">Par taille</option>
          <option value="fishWeight">Par poids</option>
        </select>
      </p>
      {posts.map(post => {
        return (
          <article key={post.id}>
            <h3>
              <Link to={'/post/' + post.id}>
                {post.firstName} {post.lastName}
              </Link>
            </h3>
            <p>{post.contents}</p>
            <img src={'http://127.0.0.1:8000/images/fishes/' + post.fishImage} width="250" alt=""/>
            <p>
              <Link to={'/post/' + post.id}>
                Voir les commentaires
              </Link>
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;