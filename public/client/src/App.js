import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import fetch from 'cross-fetch';
import Gallery from './Gallery';
import ViewPost from './ViewPost';
import CreatePost from './CreatePost';
import CreateComment from './CreateComment';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(err => alert(err));
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Galerie</Link>
              </li>
              <li>
                <Link to="/add-post">Poster</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/post/:id">
              <ViewPost posts={posts} />
            </Route>
            <Route path="/add-post">
              <CreatePost />
            </Route>
            <Route path="/add-comment/:id">
              <CreateComment />
            </Route>
            <Route path="/gallery">
              <Gallery posts={posts} />
            </Route>
            <Route path="/">
              <Gallery posts={posts} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
