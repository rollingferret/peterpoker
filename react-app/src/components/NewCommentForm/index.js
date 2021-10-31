import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/comments";
import styles from './newcommentform.module.css'

function CommentForm() {
  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);


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

        // if (res) {
        //   setContent("");
        // }
        if (res) {
          setErrors(res);
        }

        // if (res.ok) {
        //   setContent("");
        // }
        if (!res) {

          setContent("");
          setErrors([]);

        }

        // if (!errors) {
        //   setContent("");

        // }

        // console.log(res, '77777777777777777777777777777777777777')
        // console.log(errors, '999999999999999999999999999999999999999999999');



      }
    }
  };

  return (
    <>
    <div className={styles.editgamegame}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
    </div>
    <div className={styles.outtermostdiv}>
      <form onSubmit={handleSubmit} className={styles.deletecommentbuttoncss}>
        {/* <div className={css.comment_container}> */}
          <input
            type="content"
            value={content}
            placeholder="Add a comment..."
            onChange={(e) => setContent(e.target.value)}
            className={styles.deletebuttoninnercss}
            required={true}
          />
          {/* </div> */}

          <button type="submit" className={styles.deletebuttonsubmitcss}>
            Post
          </button>
      </form>
    </div>
    </>
  );
}

export default CommentForm;
