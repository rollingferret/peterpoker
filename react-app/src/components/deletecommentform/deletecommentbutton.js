import { useDispatch } from "react-redux";
import { delCommentThunk } from "../../store/comments";
import styles from "./deletecommenform.module.css";

function DeleteCommentButton(props) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(delCommentThunk(props.commentId)).then(async () =>
    props.onClose()
  );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.deletecommentbuttoncss}>
        <div className={styles.deletebuttoninnercss}>
          Are you sure you want to delete?
        </div>
        <button type="submit" className={styles.deletebuttonsubmitcss}>
          Delete!
        </button>
      </form>
    </>
  );
}

export default DeleteCommentButton;
