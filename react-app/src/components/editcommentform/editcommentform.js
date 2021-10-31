import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCommentThunk } from "../../store/comments";
import css from './editcommentform.module.css'


function EditCommentForm({ ...props }) {
  const dispatch = useDispatch();

  const currentcomment = useSelector((state) => state.comments[props.commentId]);  

  const [content, setContent] = useState(`${currentcomment.content}`);
  const [errors, setErrors] = useState([]);

  // console.log(currentcomment, 'cuuuuuuuuuuuuuuuuuuuuuurent')

  const handleSubmit = async (e) => {
    e.preventDefault();

    let edited_comment = {
      id: props.commentId,
      content: content,
    };

    // return dispatch(updateCommentThunk(edited_comment)).then(async () =>
    //   props.onClose()
    // );

    const data =  await dispatch(updateCommentThunk(edited_comment))


    if (data) {
      setErrors(data);
    } else {

      props.onClose()
    }
    console.log(errors, 'errrrrrrrrrrrorrrrrrrrrrrrs')
  };

  return (
    <>
      <div className={css.outtereditcommentdiv}>
      {/* <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
        <form onSubmit={handleSubmit} className={css.commentdivform}>
          <div className={css.innercommentdivs2}>
            <label>Edit Comment</label>
            <div className={css.editgamegame}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          </div>
          <div className={css.innercommentdivs} id={css.topborderlinecommentdiv}>
            <input
              type="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={css.contentcommentdiv}
              required={true}
            />
          </div>
          <div className={css.innercommentdivs2} id={css.topborderlinecommentdiv}>
            <button type="submit" className={css.buttoncommentdivmodal}>
              Edit!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditCommentForm;
