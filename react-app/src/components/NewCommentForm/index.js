import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/comments";

import css from "./newcommentform.module.css";

function CommentForm() {
  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const { pathname } = history.location;
  const userId = pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sessionUser) {
      history.push("/");
    } else {
      if (content) {
        let comment = {
            commented_user_id: userId,
            commenter_user_id: sessionUser.id,
            content: content,
        };

        let res = await dispatch(addCommentThunk(comment));

        if (res) {
          setContent("");
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={css.comment_container}>
          <input
            type="content"
            value={content}
            placeholder="Add a comment..."
            onChange={(e) => setContent(e.target.value)}
            className={css.comment_text}
          />
          <button type="submit" className={css.comment_btn}>
            Post
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
