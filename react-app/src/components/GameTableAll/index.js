import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function GetAllGameTables() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//     dispatch(getCommentByIdThunk(imageId));
//   }, [dispatch, imageId]);

//   const commentList = useSelector((state) => {
//     return state.comments;
//   });
//   let currentComments;
//   if (commentList) {
//     currentComments = Object.values(commentList).filter(
//       (comment) => comment.image_id === +imageId
//     );

//     const commentsSection = Object.values(currentComments)?.map((comment) => {
//       const newDate = comment?.created_at.split(" ");

      return (

        <div>TEST</div>
      )

        
}

export default GetAllGameTables;