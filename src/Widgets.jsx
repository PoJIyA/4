import React, { useState, useEffect } from 'react';
import './Widgets.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsCard from './WidgetsCard';
import db from './Firebase';

function Widgets() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>
      setPosts(snapshot.docs.map(doc => doc.data()))
    );
  }, []);

  // Функция для фильтрации уникальных userName и исключения "APaulirique"
  const getFilteredPosts = (posts) => {
    const seen = new Set();
    return posts.filter(post => {
      // Условие: исключить userName "APaulirique" и проверка на уникальность userName
      if (post.userName === "APaulirique") return false;
      const isUnique = !seen.has(post.userName);
      seen.add(post.userName);
      return isUnique;
    });
  };

  const filteredPosts = getFilteredPosts(posts);

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchRoundedIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" className="inputWidgets" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Who to follow?</h2>

        {filteredPosts.map((post, index) => (
          <WidgetsCard
            key={index}
            displayName={post.displayName}
            userName={post.userName}
            avatar={post.avatar}
          />
        ))}

        <a className="show">Show more</a>
      </div>
    </div>
  );
}

export default Widgets;
