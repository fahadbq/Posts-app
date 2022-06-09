import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "../features/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    else if (e.target.name === "content") setContent(e.target.value);
    else if (e.target.name === "author") setUserId(e.target.value);
  };

  const onSubmitPost = (e) => {
    e.preventDefault();
    console.log(userId);
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.data.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="add__post">
      <h2> Add a New Post </h2>

      <form onSubmit={onSubmitPost}>
        <label> Post Title </label>
        <input type="text" value={title} name="title" onChange={onChange} />
        <br />
        <label> Author </label>
        <select value={userId} name="author" onChange={onChange}>
          <option value=""> --select author-- </option>
          {usersOptions}
        </select>
        <br />
        <label> Content </label>
        <textarea
          type="text"
          value={content}
          name="content"
          onChange={onChange}
        >
          {" "}
        </textarea>
        <br />
        <button text="submit" disabled={!canSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default PostForm;
