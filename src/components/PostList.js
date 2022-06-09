import { useSelector } from "react-redux";

import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = (props) => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPost = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3> {post.title} </h3>
      <p> {post.content} </p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
