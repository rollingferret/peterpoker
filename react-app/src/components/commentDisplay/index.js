import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getCommentByIdThunk } from "../../store/comments";
import css from './commendDisplay.module.css'
import CommentForm from '../NewCommentForm'
import EditCommentModal from '../editcommentform'
import DeleteCommentButton from '../deletecommentform'
// import getUsers from '../../store/users'
// import getMostUsersThunk from '../../store/users'
// import getSingleUserThunk from '../../store/users'
import poro from "../../assets/bouncingporo.gif";





function GetAllCommentsforSingleUser({ userId }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getCommentByIdThunk(userId));
    // dispatch(getUsers());
    // dispatch(getSingleUserThunk(userId));

  }, [dispatch, userId]);

  // console.log(setUsers)



  // useEffect(() => {
  //   // dispatch(getCommentByIdThunk(userId));
  //   dispatch(getMostUsersThunk());
  // }, [dispatch]);

  const commentList = useSelector((state) => {
    return state.comments;
  });

  // console.log(commentList, 'comment list comment list')

  // console.log(Object.values(commentList))

  const currentComments = Object.values(commentList).filter((comment) => comment.commented_user_id === +userId);


  const commentSection = Object.values(currentComments)?.map((comment) => {



    // console.log(comment.commenter_user_id, 'insiiiiiiiiiiiiide')

    let username;
    let useravatar;
    users.map((user) => {

      // console.log(user.id, '1111111111111111111111111111111111')
      // console.log(comment.commenter_user_id, '222222222222222222222222222222222222222')
      if (user.id === comment.commenter_user_id) {
        username = user.username;
        useravatar = user.avatar_url;
        // console.log(useravatar, '333333333333333333333333333333333333333333')
      }
    });
    // console.log(comment.content, 'insiiiiiiiiiiiiide')
    // const data = dispatch(getSingleUserThunk(+comment.commenter_user_id))

    return (
    <>
    <div className={css.commentdisplayoutter}>
    <div className={css.commentdisplaysetter}>
    <div className={css.commentprofile} style={{backgroundImage: `url(${useravatar?useravatar:`${poro}`})`}}></div>
    <div className={css.username}>{username}</div>
    <div className={css.commentcontent}>{comment.content}</div>
    </div>


    {/* <div className={css.commentbuttons}>
    <div><EditCommentModal commentId={comment.id}/></div>
    <div><DeleteCommentButton commentId={comment.id}/></div>
    </div> */}
    <div>

    {currentUser && currentUser.id === comment.commenter_user_id && (
    <>
    <div className={css.commentbuttons}>
    <div><EditCommentModal commentId={comment.id} className={css.editbutton}/></div>
    <div><DeleteCommentButton commentId={comment.id} className={css.deletebutton}/></div>
    </div>
    </>
    )}
    </div>
    </div>
    </>
    )
  })
  
  if (!commentList) return null;
    else {
  return (
    <>
    <div className={css.commentsectionoutter}>
    <div className={css.commentsection}>{commentSection}</div>
    <div className={css.commentcommentform}><CommentForm /></div>
    </div>
    </>
  );
  }
}

export default GetAllCommentsforSingleUser;
