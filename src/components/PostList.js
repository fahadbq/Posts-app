import { useSelector } from "react-redux";

import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostList = (props) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const renderedPost = posts.map((post) => (
    <article key={post.id}>
      <h3> {post.title} </h3>
      <p> {post.content} </p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.date} />
    </article>
  ));

  return (
    <section>
      <h1>Posts</h1>
      {renderedPost}
    </section>
  );
};

export default PostList;
