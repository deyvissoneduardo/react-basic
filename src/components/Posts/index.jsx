import React from 'react';
import P from 'prop-types';
import { PostCard } from '../PostCard';

import './style.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

Posts.defaultProps = {
  props: [],
};

Posts.propTypes = {
  posts: P.array,
};
