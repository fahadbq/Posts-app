import { useSelector } from "react-redux";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector((state) => state.users);

  const author = users.data.find((user) => user.id === Number(userId));

  return <span> by {author ? author.name : "Unkown Author"} </span>;
};

export default PostAuthor;
