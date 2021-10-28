import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCommentByIdThunk } from "../../store/comments";
import css from './commendDisplay.module.css'

function GetAllCommentsforSingleUser({ userId }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getCommentByIdThunk(userId));
  }, [dispatch, userId]);

  const commentList = useSelector((state) => {
    return state.comments;
  });

  let currentComments;

  if (commentList) {
    currentComments = Object.values(commentList).filter(
      (comment) => comment.user_id === +userId
    );

    const commentsSection = Object.values(currentComments)?.map((comment) => {
      const newDate = comment?.created_at.split(" ");

      return (
        <div
          key={comment.id}
          className={`single-comment ${css.outer_container}`}
        >
          <div className={css.comment_container}>
            <div className={css.inner_comment}>
              <div className={css.minsizeprofile}>
              <div
                alt="user_profile_image"
                style={{ backgroundImage: `url(${comment.user.profile_url})`}}
                className={css.user_profile_pic}
              />
              </div>
              <div className={css.username_content}>
                <Link
                  to={`/users/${comment.user_id}`}
                  className={css.user_name}
                >
                  {comment.user.username}
                </Link>
                <div className={css.comment_content}>{comment.content}</div>
              </div>
            </div>

          </div>
          <div className={css.comment_date}>
            {newDate[2]} {newDate[1]}, {newDate[3]}
            test
          </div>
        </div>
      );
    });

    if (!commentList) {
      return <div>things went wrong</div>;
    } else {
      return <>{commentsSection}</>;
    }
  }
}

export default GetAllCommentsforSingleUser;
