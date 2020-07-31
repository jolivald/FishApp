import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewPost = ({ posts }) => {
  const { id } = useParams();
  let post;
  for (let currentPost of posts){
    if (currentPost.id == id){
      post = currentPost;
      break;
    }
  }
  return (
    <article key={post.id}>
      <h3>{post.firstName} {post.lastName}</h3>
      <p>{post.contents}</p>
      <img src={'http://127.0.0.1:8000/images/fishes/' + post.fishImage} width="250"/>
      <dl>
        <dt>Espèce:</dt>
        <dd>{post.fishName}</dd>
        <dt>Taille:</dt>
        <dd>{post.fishSize}</dd>
        <dt>Poids:</dt>
        <dd>{post.fishWeight}</dd>
      </dl>
      <p><Link to={'/add-comment/' + post.id}>Ajouter un commentaire</Link></p>
      {post.comments.map((comm, i) => (
        <section key={i}>
          <h4>{comm.firstName} {comm.lastName}</h4>
          <p>{comm.contents}</p>
        </section>
      ))}
    </article>
  );
};

export default ViewPost;