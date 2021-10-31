import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCommentByIdThunk } from "../../store/comments";
import css from './commendDisplay.module.css'
import CommentForm from '../NewCommentForm'
import EditCommentModal from '../editcommentform'
import DeleteCommentButton from '../deletecommentform'


function GetAllCommentsforSingleUser({ userId }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);



  useEffect(() => {
    dispatch(getCommentByIdThunk(userId));
  }, [dispatch, userId]);

  const commentList = useSelector((state) => {
    return state.comments;
  });

  console.log(commentList, 'comment list comment list')

  // console.log(Object.values(commentList))

  const currentComments = Object.values(commentList).filter((comment) => comment.commented_user_id === +userId);


  const commentSection = Object.values(currentComments)?.map((comment) => {


    // console.log(comment, 'insiiiiiiiiiiiiide')
    // console.log(comment.content, 'insiiiiiiiiiiiiide')

    return (
    <>
    <div>{comment.content}</div>
    <div><EditCommentModal commentId={comment.id}/></div>
    <div><DeleteCommentButton commentId={comment.id}/></div>
    </>
    )
  })
  
  if (!commentList) return null;
    else {
  return (
    <>
    <div>{commentSection}</div>
    <CommentForm />
    </>
  );
  }
}

export default GetAllCommentsforSingleUser;
